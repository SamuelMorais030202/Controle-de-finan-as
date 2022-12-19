import React from "react";

class Values extends React.Component {
  render() {
    const { appetizer, spending } = this.props;
    const total = Number(appetizer) - Number(spending);
    return (
      <section className="values">
        <div className="value">
          <h4>Entradas</h4>
          <p>R$ <span>{appetizer}</span></p>
        </div>
        <div className="value">
          <h4>Gastos</h4>
          <p>R$ <span>{spending}</span></p>
        </div>
        <div className="value">
          <h4>Total</h4>
          <p>R$ <span>{total}</span></p>
        </div>
      </section>
    );
  }
}

export default Values;