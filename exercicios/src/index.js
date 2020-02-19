import React from 'react'
import ReactDOM from 'react-dom'

/*import Multi, { BoaNoite } from './componentes/Multiplos'

//const elemento = <h1>React</h1>
ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome="Bia"/>
    </div>
    , document.getElementById('root'))*/

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//const elemento = <h1>React</h1>
ReactDOM.render(
    <div>
      <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
      </Pai>
      
    </div>
    , document.getElementById('root'))


