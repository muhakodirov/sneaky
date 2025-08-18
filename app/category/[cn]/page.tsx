import { use } from "react";



function CategoryPage({ params }: { params: Promise<{ cn: string }> }) {
    const { cn } = use(params)
    return <div>Hallo3: {cn} </div>
}

export default CategoryPage