'use strict'

window.addEventListener("load", function() {
  var submit = document.getElementbyId('submit');
  var link = document.getElementById('link');

  function testController(submit, link, createNote) {
    this.submit = submit;
    this.link = link;
    this.createNote = createNote;
   };

  testController.prototype.submitButton = function() {
    this.submit.addEventListener('click', function(){
      var note = document.getElementById('text').innerHTML;
      this.createNote.createNewNote(note);
})


  }
})
