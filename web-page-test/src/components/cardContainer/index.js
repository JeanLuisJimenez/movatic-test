import Card from "../card";
import './index.css'

export default function CardContainer({title, cards}) {
    return <div className="card-container">
        <h2 className="card-container-title">{title}</h2>
        <div className="card-container-content">
            {cards.map(({title, value}, index) => <Card key={`card-${index}`} title={title} value={value}/>)}
        </div>
    </div>
}