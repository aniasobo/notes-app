"use strict";

(function(exports) {
  function ListItemFormatter() {
    this._i = 1;
  }

  ListItemFormatter.prototype = {
    displayLinkBuilder: function(noteTitle) {
      var result = this.createAnchorElement(noteTitle);
      this.incrementCounter();
      console.log("I AM THE RESULT:")
      console.log(result);
      return result;
    },

    createAnchorElement: function(noteTitle) {
      var anchorElement = document.createElement('a');
      anchorElement.setAttribute("href", `#notes/${this._i}`);
      anchorElement.setAttribute("id", `${this._i}`);
      anchorElement.innerHTML = noteTitle;
      var linebreak = document.createElement("br");
      anchorElement.append(linebreak);
      return anchorElement;
    },

    incrementCounter: function() {
      this._i++;
    }
  };

  exports.ListItemFormatter = ListItemFormatter;
})(this);