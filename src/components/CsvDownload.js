import axios from "axios";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'

function cleanURL(windowURL)
{
    if (windowURL.substring(0,5) === "?url=")
    {
        return windowURL.substring(5, windowURL.length);
    }

    return "https://api.flipsidecrypto.com/api/v2/queries/10626502-7f56-4398-bec0-b4d4a7d53190/data/latest"
}

function CSVDownload()
{
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorData, setErrorData] = useState();
    var querySite = cleanURL(window.location.search);
    useEffect( () => {
        //axios.get("https://api.flipsidecrypto.com/api/v2/queries/10626502-7f56-4398-bec0-b4d4a7d53190/data/latest")
        axios.get(querySite)
        .then(response => {
            setMyData(response.data);
        }).catch(error => {
            console.log(error);
            setError(true);
            setErrorData(error);
        }).finally( () => {
            setLoading(false);
        })
    }, [])
    
    if (error) return <div>{errorData}</div>
    if (loading) return <div>Loading...</div>

    var keys = [];
    for (const key in myData[0])
    {
        keys.push(key);
    }
    var csvv = String();
    for(var i = 0; i < keys.length; ++i)
    {
        if (i!= 0){ csvv = csvv.concat(",") }
        csvv = csvv.concat(keys[i])
    }
    csvv = csvv.concat("<br>")

    console.log(myData);
    
    for(var i = 0; i < myData.length; ++i)
    {
        if ( i!= 0 ){ csvv = csvv.concat("<br>") }
        for(var j = 0; j < keys.length; ++j)
        {
            if (j != 0 ){ csvv = csvv.concat(",") }
            csvv = csvv.concat(myData[i][keys[j]]);
        }
        
    }
    return (<ReactMarkdown>
        {csvv}
    </ReactMarkdown>)
}

export default CSVDownload;