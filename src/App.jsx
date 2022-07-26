import "./App.css";
import "./reset.css";

import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
function App() {
  const [listTransactions, setListTransactions] = useState([]);

  console.log(listTransactions);
  return (
    <>
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      ></Form>
      {/*  <TotalMoney listTransactions={listTransactions}></TotalMoney>
      <List listTransactions={listTransactions}></List> */}
    </>
  );
}

export default App;
