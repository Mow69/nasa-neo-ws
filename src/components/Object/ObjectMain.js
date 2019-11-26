import React, { Component } from "react";
import { getSpeData } from "../../services/NeoWPService";
import Form from "../Form/Form";
import ObjectList from "./ObjectList";
import SpeObject from "./SpeObject";
import  "../Object/SpeObject.scss";

class ObjectMain extends Component {
    constructor(props) {
        super(props);


        this.state = {
            searchTerm: "",
            error: "",
            lisData: "",
            id: "",
            loading: true,
            getSpeData: false
        };
    }

    updateSearchValue = e => {
        const searchTerm = e.target.value;
        console.log(searchTerm);
        this.setState({
            searchTerm: searchTerm
        });
    };

    enterKeySearch = e => {
        if (e.key === "Enter") {
            this.search(e);
        }
    };

    search = async e => {
        this.setState({ displayObjectCard: true, loading: true });
        console.log("Mon terme de recherche est : ", this.state.searchTerm);

        try {
            const data = await getSpeData(this.state.searchTerm);

            console.log("Mes données dans search", data);

            setTimeout(() => {
                this.setState({
                    listData: data.name,
                    // TODO: Corriger la requete
                    id: data.id,
                    loading: false,
                    displayObjectCard: true,
                    error: ""
                });
            }, 1400);
        } catch (err) {
            this.setState({
                loading: false,
                displayObjectCard: false,
                error: err.response.data.message
            });
        }
    };

    render = () => {
        const { listData, id } = this.state;

        return (
            <>
                <Form
                    error={this.state.error}
                    handleSubmit={this.search}
                    searchValue={this.state.searchTerm}
                    updateValue={this.updateSearchValue}
                    handleKeyDown={this.enterKeySearch}
                    textPlaceholder="Sélectionner une période..."
                />
                <SpeObject
                    loading={this.state.loading}
                    display={this.state.displayObjectCard}
                    listData={listData}
                    id={id}
                />
            </>
        );
    };
}

export default ObjectMain;