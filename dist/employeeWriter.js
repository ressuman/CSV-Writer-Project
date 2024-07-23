"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// employee write
const employeeWriter = new index_1.CSVWriter([
    "id",
    "name",
    "salary",
    "role",
]);
employeeWriter.addRows([
    { id: 1, name: "George", salary: 50000, role: "Web Developer" },
    { id: 2, name: "Rose", salary: 60000, role: "Digital Manager" },
    { id: 3, name: "Pearl", salary: 100000, role: "Designer" },
    { id: 4, name: "Mavis", salary: 20000, role: "Product Manager" },
    { id: 5, name: "Ann", salary: 400000, role: "CEO" },
]);
employeeWriter.save("./data/employees.csv");
