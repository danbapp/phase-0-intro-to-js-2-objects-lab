const employee = {
  name: 'Sam',
  streetAddress: "10 Broadway"
}

function updateEmployeeWithKeyAndValue(employees, key, value){
  return {...employee, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee; 
}

function deleteFromEmployeeByKey(employee, name){
  return {...employee, [name]: undefined,};
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key] = undefined;
  return employee;
}