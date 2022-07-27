import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Header from "./components/Header";

import "./App.css";
import "./reset.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  console.log(listTransactions);
  return (
    <div className="tudo">
      <Header></Header>
      <main className="main">
        <section className="formAndTotalMoney">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        ></List>
      </main>
    </div>
  );
}

export default App;
