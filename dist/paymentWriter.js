"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentsWriter = new index_1.CSVWriter(["amount", "notes", "id", "to"]);
// add initial rows
paymentsWriter.addRows([
    { id: 1, amount: 50, to: "Richard", notes: "For HTML" },
    { id: 2, amount: 100, to: "Benjamin", notes: "For CSS" },
    { id: 3, amount: 150, to: "Ernest", notes: "For JavaScript" },
    { id: 4, amount: 200, to: "Anna", notes: "For Git" },
    { id: 5, amount: 250, to: "Miriam", notes: "For React" },
]);
// save the file
paymentsWriter.save("./data/payments.csv");
