import React, { useState } from "react";
import "./App.css";
import receiptsArr from './receiptData'
import Receipts from "./Components/Receipts";

export default function App() {

  const [receipts, setReceipts] = useState(receiptsArr)

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <input placeholder='Search'></input>
      <Receipts receipts={receipts}/>
    </div>
  );
}