"use client"
import React, { useState } from 'react'

function Sidebar() {
    const [clicked, setClicked] = useState("men")

    function renderSwitch(param: string) {
        switch (param) {
            case 'men':
                return (
                    <div className='flex flex-col text-white text-lg md:text-xl space-y-4'>
                        <ul>
                            <a href="/category/shoes"> <li> Обувь </li> </a>
                            <a href="/category/sport-wear"> <li> Спортивная одежда </li> </a>
                            <a href="/category/sport-pitanie"> <li> Спортивное питание </li> </a>
                        </ul>
                    </div>);
            case 'women':
                return <div></div>
            default:
                return <div></div>;
        }
    }


    return (
        <>
            <div className='flex flex-wrap gap-4 justify-between md:justify-center text-white text-2xl font-bold'>
                <span onClick={() => setClicked("men")} className={`sidebar-category ${clicked === "men" ? 'border-blue-500 rounded-xl' : ''}`}> Мужчины </span>
                <span onClick={() => setClicked("women")} className={`sidebar-category ${clicked === "women" ? 'border-blue-500 rounded-xl' : ''}`}> Женщины </span>
            </div>
            <hr className='border border-gray-400 my-4' />
            {renderSwitch(clicked)}

            {/** Men: Shoes, Clothes, Sports */}
        </>
    )
}

export default Sidebar