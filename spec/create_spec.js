"use strict";
(function() { 
  window.addEventListener("load", function() {

  console.log("I HAVE LOADED THIS TEST");
  
  function NoteTest(Test) {
    this.test = Test;

    this.describe("NoteObject", function() {
      test.it("creates a new note", function() {
        var text = "It was a dark and stormy night";
        test.isTruthy(new noteObject.Note(text) instanceof noteObject.Note);
      });
  
    test.it("formats note title correctly", function() {
      test.isTruthy(new noteObject.Note(text).title() === "It was a dark and st...");
    });
  
    test.it("returns full contents of note", function() {
      test.isTruthy(new noteObject.Note(text).contents() === text);
    });
  })
}
 new NoteTest(new Test());

})(this);
