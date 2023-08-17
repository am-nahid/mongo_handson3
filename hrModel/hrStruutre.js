const mongoose = require('mongoose')

const employeeSchema =  mongoose.Schema({
firstName: String,
lastName: String,
salary: Number,
department : String,
lastCompany: String,
lastSalary: Number,
overallExp: Number,
contactInfo: Number,
yearGrad: Number,
gradStream: String
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee