import { useState } from 'react';

export default function App() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!title.trim() || !note.trim()) return;

    setNotes([
      ...notes,
      {
        id: Date.now(),
        title,
        note
      }
    ]);

    setTitle('');
    setNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Add Note</button>

      <div className="notes-grid">
        {notes.map((item) => (
          <div className="note-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <button onClick={() => deleteNote(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
