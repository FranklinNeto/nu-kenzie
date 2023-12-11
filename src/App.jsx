import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Header from "./components/Header";
import { motion } from "framer-motion";


import "./App.css";
import "./reset.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="tudo">
      <Header></Header>
      <main className="main">
        <section className="formAndTotalMoney">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney
            listTransactions={listTransactions}
            filteredCards={filteredCards}
          ></TotalMoney>
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
        ></List>
      </main>
    </div>
    </motion.div>
  );
}

export default App;
