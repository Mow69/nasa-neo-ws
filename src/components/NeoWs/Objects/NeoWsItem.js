import React from "react";

const NeoWsItem = ({
    date,
                      }) => {
    return (
        <div className="card shadow mt-3 weather-card forecast-item">
            <div className="card-header text-center bg-primary text-white">
                <h2>{date}</h2>
            </div>
        </div>
    );
};

export default NeoWsItem;
