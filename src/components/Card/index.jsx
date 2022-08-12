import { CardContainer } from "./styles";
import logo from "../../assets/trash.png";

function Card({
  transaction,
  listTransactions,
  setListTransactions,
  filteredCards,
  setFilteredCards,
}) {
  function handleCards(removeTransaction) {
    setListTransactions(
      listTransactions.filter((element) => {
        return element.id !== removeTransaction;
      })
    );

    setFilteredCards(
      filteredCards.filter((element) => {
        return element.id !== removeTransaction;
      })
    );
  }

  return (
    <CardContainer className="liCard" transaction={transaction.type}>
      <div className="cardDescricao">
        <h2>{transaction.description}</h2>
        <span>{transaction.type}</span>
      </div>
      <div className="cardValor">
        <span>R$ {transaction.value.toFixed(2)}</span>
        <button onClick={() => handleCards(transaction.id)}>
          <img alt="" src={logo} />
        </button>
      </div>
    </CardContainer>
  );
}
export default Card;
