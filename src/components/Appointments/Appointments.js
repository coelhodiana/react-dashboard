import React, { Component } from "react";

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realizadas: [],
            marcadas: []
        };
    }

    componentDidMount() {
        fetch("http://www.devup.com.br/php/api-dashboard/api/consultas")
            .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render() {
        return (
            <div>
                <h3 className="mt-2">Consultas</h3>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Realizadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <body>
                                    {
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </body>
                            </table>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Marcadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <body>
                                    {
                                        this.state.marcadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </body>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointments;