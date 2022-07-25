import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [inputDescription, setInputDescription] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [selectTypeTransaction, setSelectTypeTransaction] = useState("Entrada");

  function addToListTransactions() {
    if (inputDescription !== "" && inputValue !== "") {
      const objTransaction = {
        description: inputDescription,
        value: inputValue,
        type: selectTypeTransaction,
      };

      setListTransactions([...listTransactions, objTransaction]);
    }
  }

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
        onClick={(event) => addToListTransactions(event.preventDefault())}
      >
        Inserir Valor
      </button>
    </form>
  );
}
export default Form;
