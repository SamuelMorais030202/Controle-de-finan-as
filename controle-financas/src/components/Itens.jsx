import React from "react";

class Itens extends React.Component {
  render() {
    const { listItens } = this.props;
    console.log(typeof list)
    return (
      <div className="containerTable">
        <table>
          <tr>
            <td>Descrição</td>
            <td>Valor</td>
            <td>Tipo</td>
          </tr>
          {listItens.map((iten) => (
            <tr>
              <td>{iten.descricao}</td>
              <td>{iten.valor}</td>
              <td>{iten.tipo}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Itens;