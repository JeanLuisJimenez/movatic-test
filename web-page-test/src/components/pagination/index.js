import './index.css'

function Pagination({ prev, next, step, total, current }) {

    function setPrevNums() {
        const numbers = []
        for (let index = current.value - 3; current.value > index; index++) 
            index > 0 && numbers.push(<a className="pagination-numbers" onClick={() => {
                prev.set(index - 1)
                current.set(index)
                next.set(index + 1)
            }}>{index}</a>)
        
        return numbers
    }

    function setNextNums() {
        const numbers = []

        for (let index = current.value + 1; current.value + 5 > index && index * step.value < total.value; index++) 
            numbers.push(<a className="pagination-numbers" onClick={() => {
                prev.set(index - 1)
                current.set(index)
                next.set(index + 1)
            }}>{index}</a>)

        return numbers
    }

    return <div className="pagination">
        <button onClick={() => {
            current.set(prev.value)
            next.set(current.value)
            prev.set(prev.value - 1)
            }} className="pagination-button" disabled={!prev.value}>Prev</button>
        {setPrevNums(current.value)}
        <a className="pagination-numbers current">{current.value}</a>
        {setNextNums(current.value, total.value)}
        <button onClick={() => {
                prev.set(current.value)
                current.set(next.value)
                next.set(next.value + 1)
            }} className="pagination-button" disabled={(next.value * step.value) > total.value }>Next</button>
    </div>
}

export default Pagination;
