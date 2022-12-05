const mongoose = require("mongoose");
//giving the address of database
const url ="mongodb://127.0.0.1:27017/Human_Resource";//this is server where my database will be run
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    lastCompany: {
      type: String,
    },
    lastSalary: {
      type: Number,
    },
    overallExp: {
      type: Number,
    },
    contactInfo: {
      type: Number,
    },
    yearGrad: {
      type: Number,
    },
    gradStream: {
      type: String,
    },
  });
  async function main() {
    try {
      console.log("connecting");
  
      //connect to db
      await mongoose.connect(url);
  
      //conecting to collection employees
      const EmpModel = mongoose.model("employees", EmployeeSchema);
      console.log("connected");
    //Q1. Query the collection ""employee"" and list all the documents

    //insert data
    const employee1 = new EmpModel({
        firstName: "John",
        lastName: "Doe",
        salary: 25000,
        department: "HR",
        lastCompany: "X",
        lastSalary: 10000,
        overallExp: 2,
        contactInfo: 1234567890,
        yearGrad: 2016,
        gradStream: "CSE",
      });
  
      const employee2 = new EmpModel({
        firstName: "Rohan",
        lastName: "Jame",
        salary: 30000,
        department: "Technical",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 1,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee3 = new EmpModel({
        firstName: "Jame",
        lastName: "Doe",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 20000,
        overallExp: 1,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "ECE",
      });
  
      const employee4 = new EmpModel({
        firstName: "Sao",
        lastName: "Avika",
        salary: 30000,
        department: "Sales",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee5 = new EmpModel({
        firstName: "Jame",
        lastName: "roh",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "EEE",
      });
  
      const employee6 = new EmpModel({
        firstName: "Rohan",
        lastName: "Jame",
        salary: 30000,
        department: "Technical",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 1,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee7 = new EmpModel({
        firstName: "Jame",
        lastName: "Doe",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 20000,
        overallExp: 1,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "ECE",
      });
  
      const employee8 = new EmpModel({
        firstName: "Sao",
        lastName: "Avika",
        salary: 30000,
        department: "Sales",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee9 = new EmpModel({
        firstName: "Jame",
        lastName: "Doe",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "EEE",
      });
  
      const employee10 = new EmpModel({
        firstName: "Rohan",
        lastName: "Jame",
        salary: 30000,
        department: "Technical",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 1,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee11 = new EmpModel({
        firstName: "Jame",
        lastName: "Doe",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 20000,
        overallExp: 1,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "ECE",
      });
  
      const employee12 = new EmpModel({
        firstName: "Sao",
        lastName: "Avika",
        salary: 30000,
        department: "Sales",
        lastCompany: "Y",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 1234567860,
        yearGrad: 2015,
        gradStream: "CSE",
      });
  
      const employee13 = new EmpModel({
        firstName: "Jame",
        lastName: "Doe",
        salary: 35000,
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: 15000,
        overallExp: 2,
        contactInfo: 123567890,
        yearGrad: 2019,
        gradStream: "EEE",
      });

      const employeeArr = [
        employee1,
        employee2,
        employee3,
        employee4,
        employee5,
        employee6,
        employee7,
        employee8,
        employee9,
        employee10,
        employee11,
        employee12,
        employee13,
      ];
  const response = await EmpModel.insertMany(employeeArr);
    console.log("response", response);

    //Q2. Query the collection ""employee"" and list the employees who are having salary more than 30000

    const response2 = await EmpModel.find({
        salary: { $gt: 30000 },
      });
      console.log(response2);

  //Q3. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

    const response3 = await EmpModel.find({
      overallExp: { $gte: 2 },
    });

    console.log(response3);

    //Q4. Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year

    const response4 = await EmpModel.find({
        $and: [
          {
            yearGrad: { $gt: 2015 },
          },
          {
            overallExp: { $gt: 1 },
          },
        ],
      });
      console.log(response4);

       //Q5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

    const response5 = await EmpModel.updateMany(
        {
          salary: { $gt: 15000 },
        },
        {
          $set: {
            salary: 25000,
          },
        }
      );
      console.log(response5);
      //Q5. Delete all the documents from ""employee"" where last company is Y"

    const response6 = await EmpModel.deleteMany({
        lastCompany: "Y",
      });
      console.log(response6);
  
  
  
    } catch (error) {
  
      console.log(error, "err");
      
    }
  }
  
  main();
  
  