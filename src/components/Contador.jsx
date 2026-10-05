const { Component } = require("react");

class Contador extends Component {
    
    numero = 1;

    incrementarNumero = () => {
        this.numero += 1;
        console.log("Número: " + this.numero);        
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementarValor = () => {
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render () {
        return (
            <div>
                <h1>Contador JSX: {this.props.inicio}</h1>
                <h3 style={{color: "red"}}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>Incrementar valor</button>
                <button onClick={this.incrementarNumero}>Incrementar numero</button>
            </div>
        )
    }
}

export default Contador;