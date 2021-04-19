const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

//This describes what the Employee constructor is meant to produce as the final product.
describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an object containing the employee's name, ID#, and email address.", () => {
            const employee = new Employee ("Annie", 12345, "amfm0793@gmail.com");
            expect(employee).toEqual({name: "Annie", id: 12345, email: "amfm0793@gmail.com"});
        });
    });

    //This is checking to ensure that the Employee data is gathered into an object.
    test ("Can create an Employee object.", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })

    //This is checking to ensure that there is a name for the Employee.
    test ("Can return the name of the Employee.", () => {
        const employee = new Employee("Annie");
        expect(employee.getName()).toBe(employee.name);
    })

    //This is checking to ensure that there is an ID number for the Employee.
    test ("Can return the ID# of the Employee.", () => {
        const employee = new Employee(12345);
        expect(employee.getId()).toBe(employee.id);
    })

    //This is checking to ensure that there is an email address for the Employee.
    test ("Can return the email address of the Employee.", () => {
        const employee = new Employee("amfm0793@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    //This is returing the type of role.
    test ("Can return the role of the Employee.", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee");
    })

})

