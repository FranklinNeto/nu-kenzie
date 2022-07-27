import Card from "../Card";
import "./styles.css";
function List({ listTransactions }) {
  return (
    <ul className="list">
      <div className="listHeader">
        <h3>Resumo Financeiro</h3>
        <div className="listHeaderButtons">
          <button className="pinkButtonHeader">Todos</button>
          <button className="greyButtonHeader">Entradas</button>
          <button className="greyButtonHeader">Despesas</button>
        </div>
      </div>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </ul>
  );
}
export default List;
