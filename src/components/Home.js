import { useState, useEffect} from "react";
import { Navbar, Nav, Container, Tabs,Tab, Row, Col } from "react-bootstrap";
import TopNavBar from "./TopNavbar";
function Sonnet(props)
{
    return <div>{props.text}</div>
}
function ControlledTabs() {
    const [key, setKey] = useState('profile');
  
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Sonnet text="You found me, but there's nothing here."/>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet text="Nothing here. Click the other to do stuffs."/>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet text="text3"/>
        </Tab>
      </Tabs>
    );
}

function Home()
{
    return (<div>
        <TopNavBar></TopNavBar>
        <br></br><br></br>
        <div><ControlledTabs></ControlledTabs></div>
        </div>);
}

export default Home;