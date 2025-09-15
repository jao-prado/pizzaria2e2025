import Axios from 'axios'
import { useEffect, useState } from 'react';

const Produtos = () => {

        axios.get ("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then ((response)=>{
            alert(JSON.stringify(response))

        })


    //Consumir os produtos do endpoint (rota)
        useEffect = (() =>  {


        }, []);
    
    

    // Objeto que possui lisrta de pizzas
    const pizzas = [
            "pizza de frango",
            "Pizza de muçarela",
            "Pizza de calabresa",
            "Pizza baiana",
            "Pizza portuguesa",
            "pizza de Atum"
    ];

        // Mapeamento das pizzas da lista (interação)
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return(
        <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}            
      </ul>
        </>
    )

}

export default Produtos