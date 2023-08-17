const { addMultipleData, fetchData, greaterThanSalary, graduatedExp, updateSalary, deleteEmployee } = require('../controller/employee')

const route = require('express').Router()

route.post('/addEmployee',addMultipleData)
route.get('/fetch',fetchData)
route.get('/salarygreater',greaterThanSalary)
route.get('/expgreater',greaterThanSalary)
route.get("/gradexp", graduatedExp)
route.get("/updateone", updateSalary)
route.get("/deletemany", deleteEmployee)

module.exports = route