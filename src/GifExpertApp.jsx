import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball Z']);

  const onAddCategory = (newCategory) => {

    const textMayus = newCategory.toUpperCase();

    if (categories.includes( textMayus )) return; //Esto hace que no se puedan repetir nombres

    //console.log( newCategory )
    setCategories([textMayus, ...categories]); // Esto hace que agreguemos nuevos nombres
    //setCategories( c => [...c, 'Valorant'] );
  };

  return (
    <>
      <h1> Gifs de Anime </h1>

      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)} //esto hace que se ejecute la funcion
      />

      

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))

        //return <li key={ category }>{ category }</li>//este codigo es para agregar listas sin usar etiquetas li
      }
    </>
  );
};
