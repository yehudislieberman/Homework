'use strict';

function NewCompany(name, address) {
    return {
        name,
        address,
        employees: [],
        
        addEmployee: function (employee, dptmt) {
            this.employees.push(NewEmployee(employee, dptmt)); 
        },

        print: function () {
            console.log(`Name: ${this.name} Address: ${this.address}`);
            this.employees.forEach(e => e.print());
        }
    };
}

function NewEmployee(employee, dptmt) {
    return {
        employee,
        dptmt,
        print() {
            console.log(`Employees Name: ${this.employee}, Department: ${this.dptmt}`);
        }
    };
}
const Walmart = NewCompany('Walmart', ' 221 River Street');
const Target = NewCompany('Target', '521 W 25th Street');

Walmart.addEmployee('Bryan Clark', 'Designer');
Walmart.addEmployee('John Green', 'Manager');
Walmart.print();

Target.addEmployee('Brian Cornell', 'CEO');
Target.addEmployee('David Smith', 'Assistant Manager');
Target.print();
