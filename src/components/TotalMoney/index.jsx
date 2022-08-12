import "./styles.css";

function TotalMoney({ listTransactions, filteredCards }) {
  const totalValue =
    filteredCards.length === 0
      ? listTransactions.reduce((previousValue, currentValue) => {
          if (currentValue.type === "Entrada") {
            const sum = previousValue + currentValue.value;
            return sum;
          } else {
            const subtraction = previousValue - currentValue.value;
            return subtraction;
          }
        }, 0)
      : filteredCards.reduce((previousValue, currentValue) => {
          if (currentValue.type === "Entrada") {
            const sum = previousValue + currentValue.value;
            return sum;
          } else {
            const subtraction = previousValue - currentValue.value;
            return subtraction;
          }
        }, 0);

  return (
    <div className="totalMoney">
      <div className="divTotalValue">
        <h2>Valor Total:</h2>
        <p>${totalValue.toFixed(2)}</p>
      </div>

      <span>O valor se refere ao saldo</span>
    </div>
  );
}
export default TotalMoney;
