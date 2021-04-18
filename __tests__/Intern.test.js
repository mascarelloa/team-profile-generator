const Intern = require("../lib/Intern");
const { expect } = require("@jest/globals");

describe("intern", () => {
    describe("Extend", () => {
        it("Should add a Intern employee with an additional property for school.", () => {
        const intern = new Intern("Annie", 12345, "amfm0793@gmail.com", "UCF");
        expect(intern).toEqual({name: "Annie", id: 12345, email: "amfm0793@gmail.com", school: "UCF"});
        });
    });

    test ("Can return the school of the Intern Employee.", () => {
        const intern = new Intern("mascarelloa");
        expect(intern.getSchool()).toBe(Intern.school);
    })

    test ("Can return the the role of the Intern Employee.", () => {
        const intern = new Intern("Intern");
        expect(intern.getRole()).toBe("Intern");
    })

});