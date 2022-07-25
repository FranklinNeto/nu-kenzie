function TotalMoney({ listTransactions }) {
  const totalValue = listTransactions.reduce((previousValue, currentValue) => {
    return previousValue + parseInt(currentValue.value);
  }, 0);
  console.log(totalValue);
  return (
    <div className="totalMoney">
      <div className="divTotalValue">
        <h2>Valor Total:</h2>
        <p>${totalValue}</p>
      </div>

      <span>Valor se refere ao saldo</span>
    </div>
  );
}
export default TotalMoney;
