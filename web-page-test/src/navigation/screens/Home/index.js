import { useEffect, useState } from "react";
import { getStations, getTotalStations } from "../../../api";
import Pagination from "../../../components/pagination";
import Table from "../../../components/table";

function Home() {
    const [content, setContent] = useState([])
    const [next, setNext] = useState(2)
    const [prev, setPrev] = useState(0)
    const [step, setStep] = useState(10)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState()

    useEffect(() => {
        getTotalStations().then(res => setTotal(res))
        getStations(current, step, prev).then(res => setContent(res));
    }, [current])

    return <div className="container">
        <Pagination 
            next={{value: next, set: setNext}} 
            prev={{value: prev, set: setPrev}}
            step={{value: step, set: setStep}}
            current={{value: current, set: setCurrent}}
            total={{value: total, set: setTotal}}/>
        <Table initial={prev * step} content={content} headers={[{ name: 'Station', key: 'name' }, { name: 'Address', key: 'address' }]} />
        <Pagination 
            next={{value: next, set: setNext}} 
            prev={{value: prev, set: setPrev}}
            step={{value: step, set: setStep}}
            current={{value: current, set: setCurrent}}
            total={{value: total, set: setTotal}}/>
    </div>
}

export default Home;
