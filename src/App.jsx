import { useEffect, useState } from 'react'
import './App.css'
import { getAllCreatures } from './api';

function App() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    getAllCreatures()
      .then(data => {
        setCreatures(data);
      })
      .catch(error => {
        console.log("Error", error);
      })
  }, []);

  return (
    <>
    <h1>Creatures</h1>
      <ul>
        {creatures.map(creature => {
          return (
          <li key={creature.id}>
            <strong>{creature.name}</strong>
            <p>{creature.species}</p>
            <p>{creature.happiness}</p>
          </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
