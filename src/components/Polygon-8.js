import axios from "axios";
import { useState, useEffect} from "react";
import TopNavBar from "./TopNavbar";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onZoomChange = function() {

}

function Polygon8()
{
    const [myVar, setMyVar] = useState("Polygon-8");

    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [data, setData] = useState({
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
        links: [
          // { source: "Harry", target: "Sally" },
          // { source: "Harry", target: "Alice" },
        ],
      });
      
      // the graph configuration, just override the ones you need
    const [myConfig, setMyConfig] = useState({
        nodeHighlightBehavior: true,
        node: {
          color: "lightgreen",
          size: 640,
          highlightStrokeColor: "blue",
        },
        link: {
          highlightColor: "lightblue",
        },
      });

    useEffect( () => {
        axios.get("https://api.flipsidecrypto.com/api/v2/queries/e8df953c-a0e1-4bbf-af3d-9a3a4d4ca258/data/latest").then(
            response => {
                let flipprata = []
                response.data.map( x => {
                  flipprata.push({"id":x.ID});
                })

                setData(prevState => ({
                    ...prevState,
                    nodes: flipprata,
                }));

                setLoading(false);

        }).catch(error => {
            console.log(error);
            setError(true);
        })
    }, [])
    
    useEffect( () => {
        axios.get("https://api.flipsidecrypto.com/api/v2/queries/dd1119f6-a17b-48d0-b6d7-112772959943/data/latest").then(
            response => {
                // { source: "Harry", target: "Sally" },
                // { source: "Harry", target: "Alice" },
                // { source: "Sally", target: "Alice" }
                let flipprata = [];
                response.data.map( x => {
                  flipprata.push({"source":x._FROM, "target":x._TO});
                });
                setData(prevState => ({
                    ...prevState,
                    links: flipprata,
                }));
                setLoading(false);

        }).catch(error => {
            console.log(error);
            setError(true);
        })
    }, [])
    

    if (error) return <div>Error! check console...</div>
    if (loading) return <div>Loading...</div>

    console.log(myData);

    return (<div>
        <TopNavBar></TopNavBar>
        <br /><br /><br /><br /><br />
        <body>
        <p> Tried to do the network graph. Don't think this turned out very well. </p>
        <p> Spent way too much time on this bounty :( ...</p>
        <Graph
            class="body"
            id="graph-id" // id is mandatory
            data={data}
            config={myConfig}
            onClickNode={onClickNode}
            onClickLink={onClickLink}
            onZoomChange={onZoomChange}
        />
        </body>
        </div>)
}

export default Polygon8;