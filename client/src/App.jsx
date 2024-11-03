import { useEffect, useState } from 'react'

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4444/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, [])

  return (
    <div>
      <h1>Items list</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span><b>Id:</b> {item.id}</span>
            <span><b>Name:</b> {item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
