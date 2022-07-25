function Card({ transaction }) {
  return (
    <div>
      <div>
        <h2>{transaction.description}</h2>
        <span>{transaction.type}</span>
      </div>
      <div>
        <span>{transaction.value}</span>
        <button></button>
      </div>
    </div>
  );
}
export default Card;
