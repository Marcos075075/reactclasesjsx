import { Component } from "react";

class DibujosComplejosRender extends Component {

    state = {
        nombres: ["Pepe", "Jorge", "Paula", "Lorenzo"]
    }

    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE");

        this.setState({
            nombres: this.state.nombres
        })
    }

    render(){
        return(
        <div>
            <h1>Dibujos complejos render</h1>
            <button onClick={this.generarNombre}>Generar Nombre</button>
            {
                this.state.nombres.map((nombres, index) => {
                    return (<h4 style={{color:"blue"}} key={index}>{nombres}</h4>)
                })
            }
        </div>)
    }
}

export default DibujosComplejosRender;