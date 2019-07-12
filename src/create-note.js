"use strict";

(function(exports) {

  function Note(text) {
    this._text = text;
  };

  Note.prototype = {
    title: function() {
      return this._text.slice(0, 20) + "..."
    },

    contents: function() {
      return this._text;
    }
  };
  
  exports.Note = Note;
})(this);