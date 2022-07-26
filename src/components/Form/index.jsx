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
        value: inputValue,
        type: selectTypeTransaction,
      };

      setListTransactions([...listTransactions, objTransaction]);
    }
  }

  return (
    <div className="formMoney">
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
          {/* <p>Valor</p> */}
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
          {/* <p>Tipo de Entrada</p> */}
          <div className="divSelect">
            <label>Tipo de Entrada</label>
            <select
              value={selectTypeTransaction}
              onChange={(event) => {
                setSelectTypeTransaction(event.target.value);
              }}
            >
              <option>Entrada</option>
              <option>Saída</option>
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
    </div>
  );
}
export default Form;
