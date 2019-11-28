import React, { Component }  from 'react';
import _ from "lodash";
import DatePicker from "react-datepicker";
import NeoWsItem from "./NeoWsItem";

const NeoWsObjects = (
    {
      startDate,
      endDate,
      startDateChangeHandler,
      endDateChangeHandler,
      onClickHandler,

      object,
      loader,
      error,
      date,
    }
) => {

  // TODO: Corriger les noms de variables qui iennent de la météo app
  return <div uk-grid="true" className="uk-flex uk-flex-center uk-flex-bottom">
    <div className="row mt-3">
      <div className="col">
        <a href="/" className="btn btn-sm btn-info">
          Retour à l'accueil
        </a>
      </div>
    </div>
    <div className="row border-bottom mt-1 mb-4">
      <div className="col">
        <h1>{object} : Données sur 7 jours</h1>
      </div>
    </div>
    {loader}
    {error}
    Object.keys(this.state.data).map((date, i) => (
    <div key={i}>
      <h2 className="mt-4 border-bottom">{date}</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        {_.get(this.state.data, date).map(data => (
            <NeoWsItem
                date={data[0].close_approach_data[0].close_approach_date_full}
            />
        ))}
      </div>
    </div>
    ))}
  </div>;
};

export default NeoWsObjects;