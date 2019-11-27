import React, { Component } from "react";
import Nav from "./Nav";
import NeoWsContainer from "./NeoWs/NeoWsContainer";
import Header from "./Header";
import WeatherMain from "./Object/ObjectMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Forecast from "./Object/SpeObject";
import "../components/Object/SpeObject.scss"

function App() {
  return (
    <>
        <div className="bg-stars">
            <Nav />
            <NeoWsContainer />
            <Forecast />  WeatherMain
            <WeatherMain />
            <NotFound />
        </div>


    </>
  );
}

export default App;




class App0 extends Component {
    render = () => {
        return (
            <>
                <Header />
                <Router>
                    <div className="bg-stars">
                        <Switch>
                            <Route path="/speObject/:object" component={Forecast} />
                            <Route exact path="/" component={WeatherMain} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
                <div className="mt-4"></div>
            </>
        );
    };
}

export default App0;