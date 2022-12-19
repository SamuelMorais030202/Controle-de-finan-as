import React from "react";
import Values from "./Values";
import Itens from "./Itens";
import '../App.css'

class Aplication extends React.Component {
  state = {
    description: '',
    value: '',
    entrada: 0,
    saida: 0,
    total: 0,
    list: [],
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  appetizer = () => {
    const { value, entrada, description } = this.state;
    const obj = {
      descricao: description,
      valor: value,
      tipo: 'ganho'
    }
    this.setState((state) => ({
      entrada: Number(value) + Number(entrada),
      value: '',
      description: '',
      list: [...state.list, obj],
    }));
  }

  spending = () => {
    const { value, saida, description } = this.state;
    const obj = {
      descricao: description,
      valor: value,
      tipo: 'gasto'
    }
    this.setState((state) => ({
      saida: Number(value) + Number(saida),
      value: '',
      description: '',
      list: [...state.list, obj],
    }));
  }

  render() {
    const { entrada, saida, description, value, list } = this.state;
    const disabled = description.length > 2
    return (
      <div>
        <header>
          <h1>Controle Financeiro</h1>
        </header>
        <Values appetizer={ entrada } spending={ saida } />
        <div className="form">
          <label htmlFor="earnings">
            <p>Descrição:</p>
            <input
              type="text"
              id="earnings"
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="spending">
            <p>Valor:</p>
            <input
              type="number"
              name="value"
              value={value}
              id="spending"
              onChange={this.handleChange}
            />
          </label>
          <div className="buttons">
            <button
              type="button"
              onClick={ this.spending }
              disabled={ !disabled }
              className="spending"
            >
              Adicionar Saída
            </button>
            <button
              type="button"
              onClick={ this.appetizer }
              disabled={ !disabled }
              className="appetizer"
            >
              Adicionar Entrada
            </button>
          </div>
        </div>
        <Itens listItens={ list } />
      </div>
    );
  }
}

export default Aplication;