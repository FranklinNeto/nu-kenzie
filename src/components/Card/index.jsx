import "./styles.css";
import logo from "../../assets/trash.png";
function Card({ transaction, listTransactions, setListTransactions, index }) {
  function handleCards(removeTransaction) {
    setListTransactions(
      listTransactions.filter((element, index) => {
        return index !== removeTransaction;
      })
    );
  }

  return (
    <div className="liCard">
      <div className="cardDescricao">
        <h2>{transaction.description}</h2>
        <span>{transaction.type}</span>
      </div>
      <div className="cardValor">
        <span>R$ {transaction.value}</span>
        <button onClick={() => handleCards(index)}>
          <img alt="" src={logo} />
        </button>
      </div>
    </div>
  );
}
export default Card;
