import { useState } from "react";

function Form({
  listTransactions,
  setListTransactions,
  addToListTransactions,
}) {
  const [inputDescription, setInputDescription] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [selectTypeTransaction, setSelectTypeTransaction] = useState("Entrada");

  return (
    <form>
      <input
        name="descricao"
        value={inputDescription}
        onChange={(event) => {
          setInputDescription(event.target.value);
        }}
      />
      <input
        name="valor"
        type="number"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <select
        value={selectTypeTransaction}
        onChange={(event) => {
          setSelectTypeTransaction(event.target.value);
        }}
      >
        <option>Entrada</option>
        <option>Saída</option>
      </select>
      <button
        onClick={(event) =>
          addToListTransactions(
            event.preventDefault(),
            inputDescription,
            inputValue,
            selectTypeTransaction
          )
        }
      >
        Inserir Valor
      </button>
    </form>
  );
}
export default Form;
