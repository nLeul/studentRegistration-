/* eslint-disable no-undef */

"use strict";

describe("Sort courses by name", function () {
    it("Sort courses by name", function () {

        assert.equal(sortObjectsByHelper(allCourses(), "name")[0].getName(), "BIOLOGY");
    });
});

describe("faculty and student view", function () {
    it("faculty and student view", function () {

        assert.equal(allUsers()[1].getFirstName(), "Getaneh");
    });
});

describe("Sort student by First Name", function () {
    it("Sort student by First Name", function () {

        assert.equal(sortObjectsByHelper(allUsers(), "first")[0].getFirstName(), "Elizabeth");
    });
});

describe("Sort Faculty by First Name", function () {
    it("Sort Faculty by First Name", function () {

        assert.equal(sortObjectsByHelper(allUsers(), "first")[4].getFirstName(), "John");
    });
});