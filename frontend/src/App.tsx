import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/hello', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => setResponse(data.message)) 
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{response || "Loading..."}</p>
      </header>
    </div>
  )
}

export default App;
