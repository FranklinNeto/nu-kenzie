import "./styles.css";

function TotalMoney({ listTransactions }) {
  const totalValue = listTransactions.reduce((previousValue, currentValue) => {
    if (currentValue.type === "Entrada") {
      const sum = previousValue + currentValue.value;
      return parseFloat(sum.toFixed(2));
    } else {
      const subtraction = previousValue - currentValue.value;
      return parseFloat(subtraction.toFixed(2));
    }
  }, 0);

  return (
    <div className="totalMoney">
      <div className="divTotalValue">
        <h2>Valor Total:</h2>
        <p>${totalValue}</p>
      </div>

      <span>O valor se refere ao saldo</span>
    </div>
  );
}
export default TotalMoney;
