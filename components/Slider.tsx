"use client"

import { useState } from "react"

interface PhotoSliderProps {
    images: string[]
    alt?: string
    className?: string
}

export function Slider({ images, alt = "Product image", className }: PhotoSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [startX, setStartX] = useState<number | null>(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    if (!images || images.length === 0) {
        return (
            <div className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center ${className || ""}`}>
                <span className="text-gray-500">No images available</span>
            </div>
        )
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (diff > 50) {
            // swipe left
            setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
        } else if (diff < -50) {
            // swipe right
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }

        setStartX(null);
    };

    return (
        <div
            className={`relative group mx-auto  ${className || ""}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Main image display */}
            <div className="relative touch-manipulation aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Navigation arrows - only show if more than 1 image */}
                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md p-2 hover:bg-white"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md p-2 hover:bg-white"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 text-sm text-gray-900">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnail navigation - only show if more than 1 image */}
            {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                ? "border-blue-500 ring-2 ring-blue-500/20"
                                : "border-gray-200 hover:border-blue-300"
                                }`}
                            aria-label={`View image ${index + 1}`}
                        >
                            <img
                                src={image || "/placeholder.svg"}
                                alt={`${alt} thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Dot indicators for mobile - only show if more than 1 image */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
