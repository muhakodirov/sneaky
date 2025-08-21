import { use } from "react";
import CategoryCard from "./Category-Card";

function CategoryPage({ params }: { params: Promise<{ cn: string }> }) {
    const { cn } = use(params)
    return (
        <>
            <h1 className="text-xl font-semibold sm:text-xl md:text-2xl"> Все продукты в этой категории: </h1>

            {/* Filter-Eingaben */}
            {/* <div className="flex bg-gray-900/90 rounded-xl text-white sticky top-19 justify-between p-4 flex-wrap gap-4 mt-4 mb-10"> */}
            <div className="flex  justify-between p-4 flex-wrap gap-4 mt-4 mb-10">
                <input
                    type="text"
                    placeholder="Поиск по названию продукта..."
                    className="border rounded-lg px-3 py-2 w-[100%]"
                />
                <select className="border rounded-lg px-3 py-2">
                    <option value="">Все цены</option>
                    <option value="low"> {">"} 50€</option>
                    <option value="mid">50€ - 100€</option>
                    <option value="high">{"<"} 100€</option>
                </select>
                <select className="border rounded-lg px-3 py-2">
                    <option value="">Сортировать по</option>
                    <option value="price-asc">Цена: по возрастанию</option>
                    <option value="price-desc">Цена: по убыванию</option>
                </select>
            </div>

            <main className="grid mt-5 gap-2 space-y-3 grid-cols-2 sm:grid-cols-3">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </main>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    className="border rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition-all"
                >
                    Загрузить ещё
                </button>
            </div>
        </>
    )
}

export default CategoryPage