import { Component } from "react";
import HijoDeportes from "./HijosDeportes";

export default class PadreDeportes extends Component {
    
    deportes = ["Petanca", "Futbol", "Voleybol", "Judo"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render(){
        return(
            <div>
                <h1>Padre deportes</h1>
                <h3 style={{backgroundColor: "black", color: "red"}}>Su deporte favorito es: {this.state.favorito}</h3>
                {
                    this.deportes.map((deportes, index) => {
                        return(<HijoDeportes nombre={deportes} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                    })
                }
            </div>
        )
    }
    
}