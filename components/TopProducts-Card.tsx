"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function TopProductsCard() {
    return (
        <div className='w-auto border p-2 mx-auto'>
            <div className=' hover:cursor-pointer'>
                <Link href="/product/1">
                    <Image
                        className="  "
                        src="/topofweek1.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </Link>
            </div>

            <div className='flex justify-between mt-3 md:mt-6 md:py-2 text-sm sm:text-lg md:text-xl'>
                <p className='md:text-2xl'> Nike Air Max </p>
                <p className='border rounded-lg px-1 md:px-2 md:py-1 bg-gray-900 text-white'> 150€ </p>
            </div>
        </div>
    )
}

export default TopProductsCard