import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //setCategories([...categories, 'Valorant'])
        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat]);
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpert App</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            {
                categories.map(category =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}