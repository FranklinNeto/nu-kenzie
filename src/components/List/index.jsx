import Card from "../Card";
import "./styles.css";

function List({
  listTransactions,
  setListTransactions,
  filteredCards,
  setFilteredCards,
}) {
  function filterCards(event) {
    if (event.target.id !== "Todos") {
      const buttonId = event.target.id;

      setFilteredCards(
        listTransactions.filter((element) => element.type === buttonId)
      );
    } else {
      setFilteredCards([]);
    }
  }

  return (
    <ul className="list">
      <div className="listHeader">
        <h3>Resumo Financeiro</h3>
        <div className="listHeaderButtons">
          <button
            id="Todos"
            onClick={(event) => filterCards(event)}
            className="pinkButtonHeader"
          >
            Todos
          </button>
          <button
            id="Entrada"
            onClick={(event) => filterCards(event)}
            className="greyButtonHeader"
          >
            Entradas
          </button>
          <button
            id="Despesa"
            onClick={(event) => filterCards(event)}
            className="greyButtonHeader"
          >
            Despesas
          </button>
        </div>
      </div>
      {filteredCards.length === 0
        ? listTransactions.map((transaction) => (
            <Card
              transaction={transaction}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              key={transaction.id}
              filteredCards={filteredCards}
              setFilteredCards={setFilteredCards}
            />
          ))
        : filteredCards.map((transaction) => (
            <Card
              transaction={transaction}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              key={transaction.id}
              filteredCards={filteredCards}
              setFilteredCards={setFilteredCards}
            />
          ))}
    </ul>
  );
}
export default List;
