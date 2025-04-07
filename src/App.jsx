import { useEffect, useState } from 'react'
import Jobcard from './components/JobCard.jsx'
import './App.css'
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((result)=>{
        console.log(result);
        setData(result);
      })
  }, [])
  
  return (
    <div className="App">
      {data.map((user) => (
        <Jobcard
          key={user.id}
          name={user.name}
          address={user.address.street}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  )
}

export default App
