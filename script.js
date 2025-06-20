    let notes = [];

    const titleInput = document.getElementById("noteTitle");
    const bodyInput = document.getElementById("noteBody");
    const notesContainer = document.getElementById("notesContainer");
    const addBtn = document.getElementById("addNoteBtn");

    addBtn.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();

      if (!title || !body) {
        alert("Both Title and Body are required!");
        return;
      }

      const note = { title, body };
      notes.push(note);

      titleInput.value = "";
      bodyInput.value = "";

      renderNotes();
    });

    function renderNotes() {
      notesContainer.innerHTML = "";

      notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note-card";

        const titleEl = document.createElement("h3");
        titleEl.textContent = note.title;

        const bodyEl = document.createElement("p");
        bodyEl.textContent = note.body;

        const delBtn = document.createElement("button");
        delBtn.className = "delete-btn";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
          notes.splice(index, 1);
          renderNotes();
        });

        noteDiv.appendChild(titleEl);
        noteDiv.appendChild(bodyEl);
        noteDiv.appendChild(delBtn);

        notesContainer.appendChild(noteDiv);
      });
    }