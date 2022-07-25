import Card from "../Card";
function List({ listTransactions }) {
  return listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
}
export default List;
