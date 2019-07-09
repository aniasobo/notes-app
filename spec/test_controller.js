'use strict';

(function() { 
  window.addEventListener("load", function() {

  console.log("I HAVE LOADED");

   function TestController() {
     this.submitButton = document.querySelector("#submit");
     this.noteForm = document.querySelector("#addnote");
     this.noteTextInput = document.querySelector("#notetext");

     this.submitButtonAction = function() {
         this.submitButton.addEventListener("click", function(){
           console.log("you clicked submit");
           var note = document.querySelector("#notetext").value;
           var node = document.createElement("li");
           var textnode = document.createTextNode(note);
           node.appendChild(textnode);
           console.log(note);
           document.querySelector("#fullnote").appendChild(node);
         });
    };
    this.submitButtonAction();
  };
  new TestController();
});

})();
