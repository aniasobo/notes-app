'use strict';

// import { WannabeDatabase } from "../src/persist-data";

(function() { 
  window.addEventListener("load", function() {

  console.log("I HAVE LOADED");

   function TestController(ListItemFormatter, WannabeDatabase) {
     const submitButton = document.querySelector("#submit");
     this.noteForm = document.querySelector("#addnote");
     this.noteTextInput = document.querySelector("#notetext");
     this.ListItemFormatter = ListItemFormatter;
     this.WannabeDatabase = WannabeDatabase;

     this.addFormattedLink = function() {
       const linkItemFormatter = this.ListItemFormatter;
       const dataPersister = this.WannabeDatabase;
       submitButton.addEventListener("click", function(){
        var note = document.querySelector("#notetext").value;
        var formattedNoteLink = linkItemFormatter.displayLinkBuilder(note);
        document.querySelector("#fullnote").appendChild(formattedNoteLink);
        dataPersister.pushIntoStore(note);
    });
  };

    this.displayAllNotesInHiddenElements = function() {
      var arrayOfNotes = dataPersister.returnEverything();
      for(var counter = 0; counter < arrayOfNotes.length; counter++) {
        var item = arrayOfNotes[counter].contents;
        var ourDiv = document.createElement("div");
        ourDiv.setAttribute("style.display", "none");
        var formattedItem = ourDiv.appendChild(item);
        // var formattedItem = ourDiv.createTextNode(item);
        document.querySelector("#fulltextnote").appendChild(formattedItem);
    }
  };
        this.addFormattedLink();
  };
  new TestController(new ListItemFormatter(), new WannabeDatabase());
});

})();


