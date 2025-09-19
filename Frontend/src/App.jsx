import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null);
  async function fetchData() {
      const response = await axios.get('http://localhost:3000/');
      setData(response.data.message);
  }
  fetchData();
  return (
    <div>
      <h1 className='bg-red-500'>{data}</h1>
    </div>
  )
}

export default App
