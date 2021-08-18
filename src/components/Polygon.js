import { useState, useEffect} from "react";
import { Navbar, Nav, Container, Tabs,Tab, Row, Col } from "react-bootstrap";
import TopNavBar from "./TopNavbar";
import PolygonIssue1 from "./Polygon-Issue1"
function Sonnet(props)
{
    return <div>{props.text}</div>
}
function ControlledTabs() {
    const [key, setKey] = useState('issue1');
  
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="issue1" title="issue1">
            <PolygonIssue1></PolygonIssue1>
        </Tab>
        <Tab eventKey="issue2" title="issue2">
          <Sonnet text="Nothing here. Click the other to do stuffs."/>
        </Tab>
        <Tab eventKey="issue3" title="issue3">
          <Sonnet text="text3"/>
        </Tab>
      </Tabs>
    );
}

function Polygon()
{
    const [myVar, setMyVar] = useState("Polygon");
    return (<div>
        <TopNavBar></TopNavBar>
        <br></br><br></br>
        <ControlledTabs></ControlledTabs>
        </div>);
}

export default Polygon;