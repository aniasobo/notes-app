'use strict';

(function() { 
  window.addEventListener("load", function() {

  console.log("I HAVE LOADED");

   function TestController(ListItemFormatter) {
     const submitButton = document.querySelector("#submit");
     this.noteForm = document.querySelector("#addnote");
     this.noteTextInput = document.querySelector("#notetext");
     this.ListItemFormatter = ListItemFormatter;

     this.addFormattedLink = function() {
       const linkItemFormatter = this.ListItemFormatter;
       submitButton.addEventListener("click", function(){
        var note = document.querySelector("#notetext").value;
        var formattedNoteLink = linkItemFormatter.displayLinkBuilder(note);
        document.querySelector("#fullnote").appendChild(formattedNoteLink);
    });
  };
        this.addFormattedLink();
  };
  new TestController(new ListItemFormatter());
});

})();


