
import React from "react";
import Nav from "./Nav";
import NeoWsContainer from "./NeoWs/NeoWsContainer";
import WeatherMain from "./Object/ObjectMain";
import NotFound from "./NotFound";
import "../components/Object/SpeObject.scss"
import Header from "./Header";

function App() {
    return (
        <>
            <div className="bg-stars">
                <Nav />
                <Header />
                <NeoWsContainer />
                {/*<Forecast />  WeatherMain*/}
                {/*<WeatherMain />*/}
                <NotFound />
            </div>
        </>
    );
}

export default App;
