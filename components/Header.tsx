"use client"
import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion"
import Link from "next/link";
import { IoHeart } from "react-icons/io5";

const Header = () => {
    const { isOpen, toggleIsOpen } = useSidebar();

    return (
        <>
            <header className="text-white p-4 fixed z-10 w-[100%] top-0 left-0">
                <div className="flex justify-center">
                    <div className="w-full max-w-[900px] h-14 rounded-[14px] border border-[#2a2a2e] bg-[#14161a] flex items-center justify-between px-3">
                        <button
                            onClick={toggleIsOpen}
                            aria-label="Open menu"
                            className="w-10 h-10 rounded-[10px] border border-[#2a2a2e] text-[#c8c8c8] flex items-center justify-center hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            <span className="text-[20px] leading-none cursor-pointer"> {isOpen ? 'X' : '☰'}</span>
                        </button>
                        <Link href="/"><span className="text-white text-lg md:text-2xl font-semibold select-none"> Mix Store </span> </Link>


                        <div
                            aria-label="Favorites"
                            className="text-[#c8c8c8]"
                        >
                            <Link href="#"> <IoHeart size={35} /> </Link>
                        </div>
                    </div>
                </div>
            </header>
            {isOpen && (
                <motion.div className="fixed left-1/2 -translate-x-1/2 top-18 z-10 bg-black/90 border w-[90%] md:w-[30%] border-gray-300 p-4 rounded-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                        opacity: 1,
                        y: 5,
                        transition: { duration: 0.35 }
                    }}
                >

                    <Sidebar />
                </motion.div>
            )}
        </>
    );
};

export default Header;
