import { useState, useEffect} from "react";
import TopNavBar from "./TopNavbar";

function Aave()
{
    const [myVar, setMyVar] = useState("Aave");
    return (<div>
        <TopNavBar></TopNavBar>
        {myVar}
        </div>);
}

export default Aave;