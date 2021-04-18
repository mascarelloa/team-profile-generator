const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an object containing the employee's name, ID#, and email address.", () => {
            const employee = new Employee ("Annie", 12345, "amfm0793@gmail.com");
            expect(employee).toEqual({name: "Annie", id: 12345, email: "amfm0793@gmail.com"});
        });
    });

    test ("Can create an Employee object.", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })

    test ("Can return the name of the Employee.", () => {
        const employee = new Employee("Annie");
        expect(employee.getName()).toBe(employee.name);
    })

    test ("Can return the ID# of the Employee.", () => {
        const employee = new Employee(12345);
        expect(employee.getId()).toBe(employee.id);
    })

    test ("Can return the email address of the Employee.", () => {
        const employee = new Employee("amfm0793@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    test ("Can return the role of the Employee.", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee");
    })

})

