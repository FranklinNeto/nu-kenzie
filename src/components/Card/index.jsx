import "./styles.css";
function Card({ transaction }) {
  return (
    <div className="liCard">
      <div className="cardDescricao">
        <h2>{transaction.description}</h2>
        <span>{transaction.type}</span>
      </div>
      <div className="cardValor">
        <span>R$ {transaction.value}</span>
        <button></button>
      </div>
    </div>
  );
}
export default Card;
