import { div } from "framer-motion/client";
import { use } from "react";



function CategoryPage({ params }: { params: Promise<{ cn: string }> }) {
    const { cn } = use(params)
    return <div>Hallo {cn} </div>
}

export default CategoryPage