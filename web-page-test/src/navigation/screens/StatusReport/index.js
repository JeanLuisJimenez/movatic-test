import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStationDetails } from "../../../api";
import CardContainer from "../../../components/cardContainer";

function StationReport() {
    const [cards, setCards] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState(useParams())
    
    useEffect(() => {
        getStationDetails(id).then(res => {
            const cards = [
                { title: 'Is Installed', value: res.is_installed ? "Yes" : "No" },
                { title: 'Is Renting', value: res.is_renting ? "Yes" : "No" },
                { title: 'Is Returning', value: res.is_returning ? "Yes" : "No" },
                { title: 'Bikes Available', value: res.num_bikes_available },
                { title: 'Docks Available', value: res.num_docks_available },
                { title: 'Electrics Bikes', value: res.num_bikes_available_types.electric ? "Yes" : "No" },
                { title: 'Smart Bikes', value: res.num_bikes_available_types.smart ? "Yes" : "No" },
                { title: 'Classic Bikes', value: res.num_bikes_available_types.classic ? "Yes" : "No" }
            ]

            setName(res.name)
            setCards(cards)
        })
    }, []);

    return <div className="container">
        <CardContainer title={name} cards={cards} />
    </div>
}

export default StationReport;
