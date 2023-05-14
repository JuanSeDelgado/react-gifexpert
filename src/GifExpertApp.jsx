import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Kimetsu"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onEraseCategory = (categoryToDelete) => {
    setCategories(categories.filter(category => category !== categoryToDelete));
  };
  

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {/* Listado de Gif's */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} onEraseCategory={onEraseCategory}     />;
      })}

      
    </>
  );
};
