import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from 'react-media';
import {FormularioWeb} from './FormularioWeb';
import {FormularioMovil} from './FormularioMovil';


export class Inicio extends React.Component {
  
    render() {
        return (
            <Media queries={{small:{maxWidth: 400}, large: { maxWidth: 1600 } }}>
                {
                    matches =>
                        matches.small ? (
                           <FormularioMovil></FormularioMovil>
                        )
                            : 
                           <FormularioWeb></FormularioWeb>
                }
            </Media>

        )
    }

    
}