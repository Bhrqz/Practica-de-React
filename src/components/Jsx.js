import React, {Fragment, useState} from 'react';

const Jsx = () => {


    const temperatura = 10;

    return ( 
        <div>
            <h2>Frio o calor?</h2>
            <h4>
                {
                    temperatura > 20 ? "Calor":"Frio"
                }
            </h4>
        </div>
     );
}
 
export default Jsx;