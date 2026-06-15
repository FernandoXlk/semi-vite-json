//export const Card = (props) =>{
//   return(
//     <>
//     <img src={props.image} alt={item.name} />
//            <div> 
//             <h2>{props.name}</h2>
//             <p>{props.desc}</p>
//            <h3>${(props.valor).toFixed(2)}</h3>
 //          </div> 
//     </>
//  )
//}
import s from './App.module.css'
export const Card = ({imagem, nome, descricao, valor}) =>{
  return(
     <>
            <img className={s.cardimage} src={imagem} alt={nome} />
            <div className={s.wrapText}> 
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <h3>${(valor).toFixed(2)}</h3>
            </div> 
     </>
  )
}