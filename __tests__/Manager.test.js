const Manager = require("../lib/Manager");
const { expect } = require("@jest/globals");

describe("Manager", () => {
    describe("Extend", () => {
        it("Should add a Manager employee with an additional property for office number.", () => {
        const manager = new Manager("Annie", 12345, "amfm0793@gmail.com", "1A");
        expect(manager).toEqual({name: "Annie", id: 12345, email: "amfm0793@gmail.com", officeNumber: "1A"});
        });
    });

    test ("Can return the the office number of the Manager Employee.", () => {
        const manager = new Manager("1A");
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    })

    test ("Can return the the role of the Manager Employee.", () => {
        const manager = new Manager("Manager");
        expect(manager.getRole()).toBe("Manager");
    })

});