import { useState } from "react";
import "./styles.css";

import { v4 as uuidv4 } from "uuid";

function Form({ listTransactions, setListTransactions }) {
  
  const [form, setForm] = useState({
    description: "",
    value: "",
    type: "Entrada",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.description !== "" && form.value !== "") {
      const objTransaction = {
        description: form.description,
        value: parseFloat(form.value),
        type: form.type,
        id: uuidv4(),
      };

      setListTransactions([...listTransactions, objTransaction]);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        onChange={handleChange}
      />
      <span>Ex: Compra de roupas</span>

      <div className="divInputSelect">
        <div className="divInputValor">
          <label>Valor</label>
          <div className="divInputValorNoLabel">
            <input
              name="value"
              type="number"
              placeholder="0"
              onChange={handleChange}
            />
            <span>R$</span>
          </div>
        </div>
        <div className="divSelect">
          <label>Tipo de Entrada</label>
          <select name="type" onChange={handleChange}>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir Valor</button>
    </form>
  );
}
export default Form;
