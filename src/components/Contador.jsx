const { Component } = require("react");

class Contador extends Component {
    
    numero = 1;

    incrementarNumero = () => {
        this.numero += 1;
        console.log("Número: " + this.numero);        
    }

    render () {
        return (
            <div>
                <h1>Contador JSX</h1>
                <button onClick={this.incrementarNumero}>Incrementar numero</button>
            </div>
        )
    }
}

export default Contador;