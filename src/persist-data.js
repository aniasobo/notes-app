"use strict";

(function(exports) {
  function WannabeDatabase() {
    this._store = [];
  }

  WannabeDatabase.prototype = {
    returnEverything: function() {
      return this._store;
    },

    pushIntoStore: function(note) {
      this._store.push(note);
    },
  };

  exports.WannabeDatabase = WannabeDatabase;
})(this);