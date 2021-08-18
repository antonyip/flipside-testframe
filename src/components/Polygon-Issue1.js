import { useState, useEffect } from "react"
import axios from "axios"
import {Spinner} from "react-bootstrap"

function PolygonIssue1()
{
    //const something = useEffect();
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://api.flipsidecrypto.com/api/v2/queries/1bee27bc-7530-461b-aed7-db5689b968f6/data/latest")
        .then( response => { setData(response.data) })
        .finally(setLoading(false))
    })

    return (
        loading == true ?
        <Spinner></Spinner>
        :
        <div>
            <div>List Of Transactions</div>
            {data.map(x => <div><div>{x.TX_ID}</div></div>)}
            <div>End of List</div>
        </div>
    );
}

export default PolygonIssue1;