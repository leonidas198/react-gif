import { useState } from "react";
import PropTypes from "prop-types";



export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = ( { target } ) => { 
        
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();//ESte codigo es para frenar la act del form
        //console.log(inputValue)
        if (inputValue.trim().length <= 1 ) return;//esta condicion hace que se eliminen los espacios en el input
        //setCategories( categories => [ inputValue, ...categories ]  )
        onNewCategory( inputValue.trim() );
        setInputValue( '' );//esto hace que una vez agregado el nombre el input se limpie
    }


  return (
    <form onSubmit={ onSubmit } aria-label="form" >
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
    />
    </form>
    
  )
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}