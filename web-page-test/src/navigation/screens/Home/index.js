import { useEffect, useState } from "react";
import { getStations } from "../../../api";
import Table from "../../../components/table";

function Home() {
    const [content, setContent] = useState([])

    useEffect(() => {
        getStations().then(res => setContent(res));
    }, [])

    return <div className="container">
        <Table content={content} headers={[{ name: 'Station', key: 'name' }, { name: 'Address', key: 'address' }]} />
    </div>
}

export default Home;
