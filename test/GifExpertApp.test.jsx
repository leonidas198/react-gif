import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en el GifExpertApp', () => {

    test('debe hacer el match con el snapshot', () => {

        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
        
        screen.debug();
      
    })
    
  
})
