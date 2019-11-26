import React from "react";

import "./SpeObject.scss";
import Loader from "../Utils/Loader";

const SpeObject = ({ display, speObject, id, loading }) => {
    if (!display) return <div></div>;

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 col-md-5 col-lg-4 col-xl-3 m-auto">
                    <div className="card shadow mt-3 weather-card">
                        <div className="card-header text-center">
                            <h2>{speObject}</h2>
                            <p className="m-0">{id}</p>
                        </div>
                        <div className="card-body">
                        </div>
                        <div className="card-footer text-center">
                            <a href={`/object/${speObject}`} className="btn btn-primary">
                                Afficher les détails
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeObject;
