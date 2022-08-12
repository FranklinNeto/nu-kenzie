import { useState } from "react";
import "./styles.css";

function Form({ listTransactions, setListTransactions }) {
  const [inputDescription, setInputDescription] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [selectTypeTransaction, setSelectTypeTransaction] = useState("Entrada");

  function addToListTransactions() {
    if (inputDescription !== "" && inputValue !== "") {
      const objTransaction = {
        description: inputDescription,
        value: parseFloat(inputValue),
        type: selectTypeTransaction,
        id: Math.random(),
      };

      setListTransactions([...listTransactions, objTransaction]);
    }
  }

  return (
    <form>
      <label>Descrição</label>
      <input
        name="descricao"
        value={inputDescription}
        placeholder="Digite aqui sua descrição"
        onChange={(event) => {
          setInputDescription(event.target.value);
        }}
      />
      <span>Ex: Compra de roupas</span>

      <div className="divInputSelect">
        <div className="divInputValor">
          <label>Valor</label>
          <div className="divInputValorNoLabel">
            <input
              name="valor"
              type="number"
              value={inputValue}
              placeholder="1"
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            <span>R$</span>
          </div>
        </div>
        <div className="divSelect">
          <label>Tipo de Entrada</label>
          <select
            value={selectTypeTransaction}
            onChange={(event) => {
              setSelectTypeTransaction(event.target.value);
            }}
          >
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => addToListTransactions(event.preventDefault())}
      >
        Inserir Valor
      </button>
    </form>
  );
}
export default Form;
