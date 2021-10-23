import React, { useState } from "react";
import "./App.css";
import receiptsArr from './receiptData'
import Receipts from "./Components/Receipts";
import Form from "./Components/Form";

export default function App() {

  const [receipts, setReceipts] = useState(receiptsArr)

  const handleSubmit = filter => event => {
    event.preventDefault()
    setReceipts(receiptsArr.filter(receipt => receipt.person.toLowerCase().includes(filter.toLowerCase())))
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form handleSubmit={handleSubmit}/>
      <Receipts receipts={receipts}/>
    </div>
  );
}