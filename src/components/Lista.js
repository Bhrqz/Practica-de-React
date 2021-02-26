import React, { Fragment , useState} from 'react';

const Lista = () => {

    /* setNumero es para hacer que el array pueda dinamizarse */
    const [arrayNumero, setNumero] = useState([1])

    const agregarElemento = () => {
        console.log("cliqueado")
        setNumero([
            ...arrayNumero, [arrayNumero.length+1]
        ])
    }


    return ( 
        <Fragment>
        <h2>
            Lista
        </h2>
        
        {/* /* Un boton para dispara la funcion agregar elemento*/}
        <button onClick={agregarElemento}>Agregar</button>

        {/* Se mapea el array con su index*/}
        {
            arrayNumero.map((item, index) => 
                <p key={index}>{item} con posición {index}</p>
            )
        }

        </Fragment>
     );
}
 
export default Lista;