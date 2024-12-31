import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('http://localhost:5000/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    return sortOrder === 'asc' ? a.experience - b.experience : b.experience - a.experience;
  });

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="App">
      <h1>Candidate List Viewer</h1>
      <input
        type="text"
        placeholder="Search by Name or Skills"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={toggleSortOrder}>
        Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
