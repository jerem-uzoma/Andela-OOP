"use strict";

class Employee {
    constructor(name, department, officeLocation) {
        this._name = name;
        this._department = department;
        this._officeLocation = officeLocation;
    }
    getFirstName() {
        var names = this._name.split();
        return names.shift();

    }
    getLastName() {
        var names = this._name.split();
        return names.pop();
    }
    getFullName() {
        return this._name
    }
}

class AdminDpt extends Employee {
    constructor(name, department, officeLocation,) {
        super(name, department, officeLocation);
        this._employeesWithManager = [];
    }
    addEmployee(employee) {
        this._employeesWithManager.push(employee)
    }
}
class InfoTech extends Employee {
    constructor(name, department, officeLocation,) {
        super(name, department, officeLocation,);
    }
    getFunFact(hobby) {
        let x = new Employee();
        let firstName = x['getFirstName']();
        return firstName + 'loves' + hobby
    }

}
class HumanResources extends Employee {
    constructor(name, department, officeLocation,) {
        super(name, department, officeLocation,);

    }
    getNamesOfActiveEmpl() {
        for (let value of this._employeesWithManager) {
            value += 1;
            return value;
        }
    }
}
