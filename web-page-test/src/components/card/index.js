import './index.css'

export default function Card({title, value}) {
    return <div className='card'>
        <h4 className='card-title'>{title}</h4>
        <h5 className='card-value'>{value}</h5>
    </div>
}