
import React from "react";
import Nav from "./Nav";
import NeoWsContainer from "./NeoWs/NeoWsContainer";
import WeatherMain from "./Object/ObjectMain";
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



