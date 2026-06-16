import s from './App.module.css'
import produtos from "./constants/produtos.json"
import { Card } from "./components/card"

function App() {

  return(
      <>
        <h1 className={s.titulo}>Página de produtos</h1>

        <main className={s.principal}>

          {produtos.map((item) => {
            return(
              <div key={item.id} className={s.card}>
                <Card image={item.image} nome={item.name} desc={item.desc} value={item.value}></Card>
              </div>
            )
          })}
        </main>
      </>
  )
}

export default App