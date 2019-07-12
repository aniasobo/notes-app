"use strict";

var test = require("test");
var Note = require("../src/create-note").Note; 

test.describe("Note", function() {
  test.it("creates a new note", function() {
    var text = "It was a dark and stormy night";
    test.isTruthy(new Note(text) instanceof Note);
  });
  
  test.it("formats note title correctly", function() {
    test.isTruthy(new Note(text).title() === "It was a dark and st...");
  });
  
  test.it("returns full contents of note", function() {
    test.isTruthy(new Note(text).contents() === text);
  });
});