import React, { Component } from 'react';
import './App.css';
import animals from "./animals";

class PetList extends Component {
    render() {
        const animalsHtml = animals.map((animal) => {
            return (
                <div className="pet">
                    <h2>{animal.name}</h2>
                    <p>{animal.type}</p>
                    <p>{animal.size}</p>
                    <img src={animal.picture} alt="" />
                </div>
            )
        });

        return (
            <section>
                {animalsHtml}
            </section>
        );
    }
}

export default PetList;