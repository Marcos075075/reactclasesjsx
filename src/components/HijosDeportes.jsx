import { Component } from "react";

export default class HijoDeportes extends Component {

    state = {
        mensaje: ""
    }

    seleccionarFavorito = () => {
        
        this.props.mostrarFavorito(this.props.nombre);
        
    }
    
    render(){
        return(
            <div>
                <h2 style={{color: "red"}}>{this.state.mensaje}</h2>
                <h3 style={{color: "blue"}}>Deporte: {this.props.nombre}</h3>
                <button onClick={this.seleccionarFavorito}>Favorito</button>
            </div>
        )
    }
    
}
