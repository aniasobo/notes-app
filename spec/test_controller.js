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
        console.log("YOU HAVE CLICKED THE SUBMIT BUTTON")
        var note = document.querySelector("#notetext").value;
        // WARNING, BUGS AHEAD
        var formattedNoteLink = linkItemFormatter.displayLinkBuilder(note);
        document.querySelector("#fullnote").appendChild(formattedNoteLink);
    });
  };

     this.submitButtonAction = function() {
         this.submitButton.addEventListener("click", function(){
           // assigns input text to the note variable:
           var note = document.querySelector("#notetext").value;
           // creates a list element:
           var node = document.createElement("li");
           // creates a text node for the list element:
           var textnode = document.createTextNode(note);
           // tells the list element to add the text note to itself:
           node.appendChild(textnode);
           // takes the list item with text node appended to it,
           // tells the document to append thos construct into its fullnote element:
           document.querySelector("#fullnote").appendChild(node);
          // creates a div element:
           var anotherNode = document.createElement("div");
           // creates a text node with the contents of note:
           var fullTextNode = document.createTextNode(note);
           // tells the div to append the note text to itself:
           anotherNode.appendChild(fullTextNode);
           // takes the div with the text note appended to it,
           // tells the document to append all that to its fulltextnote span element:
           document.querySelector("#fulltextnote").appendChild(anotherNode);
         });
    };

  //   this.testFunctionForButton = function() {
  //     this.submitButton.addEventListener("click", function(){
  //       var listItem = document.createElement('li');
  //       var anchorElement = document.createElement('a');
  //       anchorElement.setAttribute("href", "#1");
  //       anchorElement.innerHTML = "Test link text bla";
  //       listItem.appendChild(anchorElement);
  //       document.querySelector("#fullnote").appendChild(listItem);
  //   })
  // };

  //  this.submitButtonAction();
 //     this.testFunctionForButton();
        this.addFormattedLink();
  };
  new TestController(new ListItemFormatter());
});

})();
