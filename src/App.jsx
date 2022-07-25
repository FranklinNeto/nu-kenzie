import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Card from "./components/Card";
import TotalMoney from "./components/TotalMoney";
function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addToListTransactions(
    preventDefault,
    newDescription,
    newValue,
    newType
  ) {
    if (newDescription !== "" && newValue !== "") {
      const objTransaction = {
        description: newDescription,
        value: newValue,
        type: newType,
      };

      setListTransactions([...listTransactions, objTransaction]);
    }
  }
  console.log(listTransactions);
  return (
    <>
      <Form addToListTransactions={addToListTransactions}></Form>
      <List listTransactions={listTransactions}></List>
      <TotalMoney listTransactions={listTransactions}></TotalMoney>
    </>
  );
}

export default App;
