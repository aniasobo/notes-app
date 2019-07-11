(function(exports) {
  function testListItem() {
    var note = new Note();
    var turn = turnIntoLink(note);

    if (turn.href !== note.id) {
      throw new Error("link does not point to note, sorry :(");
    }
  }
})
