"use client"
import TopProductsCard from "@/components/TopProducts-Card";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";


export default function Main() {
  const { isOpen, toggleIsOpen } = useSidebar();


  return (
    <main className="">
      <div className="text-white relative">
        <Image
          className="border rounded-2xl mx-auto"
          src="/main-image.png"
          width={500}
          height={100}
          alt="Picture of the author"
        />
        <button onClick={toggleIsOpen} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="border px-4 py-2 rounded-2xl hover:bg-gray-900 transition-all cursor-pointer">
            Все категории
          </span>
        </button>
      </div>



      <div className="mt-10 md:mt-20">
        <p className="text-xl md:text-3xl font-bold">
          ТОП-5 товары недели
        </p>
        <hr className="my-3 md:mb-14 text-gray-400" />
        <div className="grid space-y-5 gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 mb-10 ">
          {/** Card */}
          <TopProductsCard />
          <TopProductsCard />
          <TopProductsCard />
          <TopProductsCard />
          <TopProductsCard />
          <TopProductsCard />
        </div>
      </div>
    </main>
  );
}
