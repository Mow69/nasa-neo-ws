import React from "react";
import "./SpeObject.scss";


const ObjectListItem = ({
    timestamp,
    description,
}) => {
    const itemDate = new Date(timestamp * 1000);
    const itemDay = itemDate.getDay();

    return (
        <div className="card shadow mt-3 weather-card forecast-item">
            <div className="card-header text-center bg-primary text-white">
                <h2>{itemDay}h</h2>
                <p className="m-0">{description}</p>
            </div>
            <div className="card-body">

            </div>
            <div className="card-footer text-center">
                <h4>
          <span className="badge badge-light">
            <i className="wi wi-owm-804 mr-2"></i>
          </span>
                </h4>
            </div>
        </div>
    );
};

export default ObjectListItem;
