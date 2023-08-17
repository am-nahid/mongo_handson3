const Employee = require("../hrModel/hrStruutre")

const addMultipleData = async (req,res)=>{
    const employeeData = req.body; // Assuming you're sending an array of employee objects

  try {
    const result = await Employee.insertMany(employeeData);
    return res.send({
      msg: "Employee data stored successfully",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Error storing employee data",
      error: error.message,
    });
  }
}

const fetchData = async(req,res)=>{
    try {
        const result = await Employee.find();
        res.send(result);
      } catch (error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
      }
} 

const greaterThanSalary =async (req,res)=>{
    try {
        const result = await Employee.find({ salary: { $gt: 30000 } });
        res.send(result);
      } catch (error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
      }
}

const greaterExp = async (req,res)=>{
    try{
        const result = await Employee.find({ "overallExp": { $gt: parseInt("2") } });
        res.send(result)
    } catch(error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
    }
}

const graduatedExp = async (req,res)=>{
    try{
        const result = await Employee.find({ "yearGrad": { $gt:2015 } , "overallExp":{$gt:1}});
        res.send(result)
    } catch(error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
    }
}

const updateSalary = async (req,res)=>{
    try{
        const result = await Employee.updateOne({"salary":{"$gt":"70000"}},{"$set":{"salary":"65000"}})
        res.send(result)
    } catch(error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
    }
}


const deleteEmployee =async (req,res)=>{
    try{
        const result = await Employee.deleteMany({"lastCompany":"Y"})
        res.send(result)
    } catch(error) {
        return res.status(500).send({
          msg: "Error fetching employee data",
          error: error.message,
        });
    }
}




module.exports = {addMultipleData, fetchData, greaterThanSalary, greaterExp, graduatedExp, updateSalary, deleteEmployee}