//imports do projeto
import s from './App.module.css'
import { Card } from './components/card'
import produtos from "./constants/produtos.json"


function App() {
  //funcionalidades js
 
  return(
    <>
      <h1 className={s.título}>Página de produtos</h1>
      <main>

        {produtos.map((item) => {
          return(
            <div key={item.id} className={s.card}>
              <Card imagem={item.image} nome={item.name} descrição={item.desc} valor={item.value}/>
            </div>
          )
        })}

      </main>
    </>
  )
}

export default App