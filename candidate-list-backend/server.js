const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const candidates = [
  { id: 1, name: 'Alice Johnson', skills: 'JavaScript, React', experience: 5 },
  { id: 2, name: 'Bob Smith', skills: 'Java, Spring', experience: 7 },
  { id: 3, name: 'Charlie Brown', skills: 'Python, Django', experience: 3 },
  { id: 4, name: 'Diana Prince', skills: 'HTML, CSS, JavaScript', experience: 4 },
  { id: 5, name: 'Ethan Hunt', skills: 'C++, Qt', experience: 6 },
  { id: 6, name: 'Fiona Clarke', skills: 'Ruby, Rails', experience: 2 },
  { id: 7, name: 'George Lucas', skills: 'PHP, Laravel', experience: 5 },
  { id: 8, name: 'Hannah Lee', skills: 'Go, Kubernetes', experience: 8 },
  { id: 9, name: 'Ian Wright', skills: 'Swift, iOS Development', experience: 4 },
  { id: 10, name: 'Jane Doe', skills: 'Kotlin, Android Development', experience: 6 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
