import React, {useState, Fragment} from 'react';

const Contador = () => {

    
    const [numero, setNumero] = useState(1);

    const aumentar = () => {
        setNumero(numero+1)
    }


    //RECUERDA colocar solo un elemento HTML en los return
    //en vez de DIV es recomendable usar FRAGMENT
    return (  
        
        <Fragment>
        <h3>
            EL primer componente {numero}
        </h3>
        <button onClick={aumentar}>
            Aumentar
        </button>


        </Fragment>
    );
}
 
export default Contador;