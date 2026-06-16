
import s from './card.module.css'

export const Card = ({image,nome,desc,value}) => {
    return(
        <>
            <img className={s.cardImage} src={image} alt={nome} />
            <div className={s.wrapText}>
                <h2>{nome}</h2>
                <p>{desc}</p>
                <h3>R${parseFloat(value).toFixed(2)}</h3>
            </div>
        </>
    )
}