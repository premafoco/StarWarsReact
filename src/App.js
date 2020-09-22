import React, { Component } from 'react';
import Api from './Api';

class App extends Component {
    state = {
        filmes: [],
    }
    async componentDidMount() {
        const response = await Api.get('');

        this.setState({ filmes: response.data });
    }


    render() {

        const { filmes } = this.state;
        return (
            <div>
                <h1>Listar Filmes</h1>
                {console.log(filmes)}
                {filmes.map(filme => (

                    <ul>
                        <li key={filme.show.id}>
                            <strong>Titulo:</strong>
                              <h2>  {filme.show.name} </h2>
                            <p> {filme.show.url}</p>
                            <br></br>
                            <hr/>
                        </li>
                    </ul>
                ))}

            </div>

        );
    }
}
export default App
