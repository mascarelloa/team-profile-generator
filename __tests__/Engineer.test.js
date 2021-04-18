const Engineer = require("../lib/Engineer");
const { expect } = require("@jest/globals");

describe("Engineer", () => {
    describe("Extend", () => {
        it("Should add a Engineer employee with an additional property for GitHub username.", () => {
        const engineer = new Engineer("Annie", 12345, "amfm0793@gmail.com", "mascarelloa");
        expect(engineer).toEqual({name: "Annie", id: 12345, email: "amfm0793@gmail.com", github: "mascarelloa"});
        });
    });

    test ("Can return the GitHub username of the Engineer Employee.", () => {
        const engineer = new Engineer("mascarelloa");
        expect(engineer.getGithub()).toBe(Engineer.github);
    })

    test ("Can return the the role of the Engineer Employee.", () => {
        const engineer = new Engineer("Engineer");
        expect(engineer.getRole()).toBe("Engineer");
    })

});