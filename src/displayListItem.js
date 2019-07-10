"use strict";

(function(exports) {
  function ListItemFormatter() {
    this._i = 1;
    this.NotesArray = [];
  }

  ListItemFormatter.prototype = {
    displayLinkBuilder: function(noteTitle) {
      var anchorElement = this.createAnchorElement(noteTitle);
      var result = this.createListItem(anchorElement);
      this.incrementCounter();
      //var result = this.appendAnchorElementToListItem(listItem, anchorElement);
      return result;
    },

    createListItem: function(anchorElement) {
      var listItem = document.createElement("li");
      console.log(document);
      console.log(listItem);
      return listItem.innerHTML = anchorElement;
    },

    createAnchorElement: function(noteTitle) {
      var anchorElement = document.createElement('a');
      anchorElement.setAttribute("href", `#notes/${this._i}`);
      anchorElement.innerHTML = noteTitle;
      return anchorElement;
    },

    // appendAnchorElementToListItem: function(listItem, anchorElement) {
    //   var result = listItem.appendChild(anchorElement);
    //   console.log("LIST ITEM WITH ANCHOR ITEM APPENDED:")
    //   console.log(result);
    //   return result;
    // },

    incrementCounter: function() {
      this._i++;
    },

    returnAllLinks: function(note) {
      console.log("something");
    }
  };

  exports.ListItemFormatter = ListItemFormatter;
})(this);