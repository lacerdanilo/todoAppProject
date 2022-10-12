import {useState} from 'react'
import * as C from './App.styles' 
import {item} from './types/Item'

const App = () => {
  const [list, setList] = useState<item[]>([
    {id: 1, name:'Comprar o pão na Padaria', done: false},
    {id: 2, name:'Comprar um bolo na Padaria', done: false},
  
  ])
  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>


        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
