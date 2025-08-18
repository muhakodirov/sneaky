import React from "react";
import { Slider } from "./Slider";


const ProductSinglePage = () => {
    const productImages = [
        "/modern-sneaker-front.png",
        "/modern-sneaker-side.png",
        "/modern-sneaker-back.png",
        "/modern-sneaker-sole.png",
        "/modern-sneaker-detail.png",
    ]
    return (
        <div className="">
            <Slider images={productImages} alt="Product image" className="w-full md:w-[40%]" />
            {/* Add more content here later */}


            <div className="md:w-[40%] mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 md:mb-4">Adidas Gazelle - for men </h1>
                <div className="mt-2 mb-4">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Цена: 150&nbsp;€</span>
                </div>

                {/* Verfügbare Größen */}
                <div className="mt-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Доступные размеры:</h2>
                    <div className="flex gap-2 flex-wrap">
                        {["39", "40", "41", "42", "43", "44", "45"].map((size) => (
                            <button
                                key={size}
                                className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-900"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                {/* <div className="mx-auto border"> */}
                <div className="my-8 flex justify-start gap-2 sm:gap-4 md:justify-start ">
                    <a
                        href="https://t.me/kadyrovm12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-900 hover:bg-gray-700 text-gray-200 font-bold rounded-lg shadow transition-all sm:text-lg md:text-xl"
                    >
                        Купить сейчас через Telegram
                    </a>

                    <button className="border w-20 rounded-lg cursor-pointer hover:bg-red-200 active:bg-red-200 transition-all">
                        <span> ❤️ </span>
                    </button>
                </div>
                {/* </div> */}

                {/* Produktinformationen */}
                <div className="mt-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Информация о продукте:</h2>
                    <ul className="list-disc list-inside space-y-1 md:text-xl text-black ">
                        <li>Бренд: <span className="font-medium ">Adidas</span></li>
                        <li>Модель: <span className="font-medium">Gazelle</span></li>
                        <li>Для: <span className="font-medium ">мужчин</span></li>
                        <li>Материал: замша и текстиль</li>
                        <li>Цвет: серый/белый</li>
                        <li>Удобная посадка и классический дизайн</li>
                        <li>Идеально для повседневной носки и отдыха</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">О продукте:</h2>
                    <p className="text-black md:text-xl">
                        Adidas Gazelle — нестареющая классика, идеально сочетающая комфорт и стиль. Высококачественный замшевый верх обеспечивает удобную посадку, а прочная подошва — оптимальное сцепление. Эти кроссовки подойдут как для повседневной носки, так и для отдыха или занятий спортом. Лаконичный дизайн в серо-белых тонах универсален и подходит к любому наряду. Откройте для себя идеальное сочетание традиций и современности!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductSinglePage;