"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function TopProductsCard() {
    return (
        <div className=''>
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

            <div className='text-sm sm:text-xl  mt-2 md:mt-3 text-gray-600 md:text-gray-800  '>
                <p> Nike Air Max - Exclusive design only </p>
                <p> 150€ </p>
            </div>
        </div>
    )
}

export default TopProductsCard