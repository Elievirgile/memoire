import React , {useState, useEffect} from 'react'
import Laravel from '../img/Laravel.pdf'

function WatchVideo() {
  
  const [formation_id , setFormatinId] = useState(localStorage.getItem('formation_id'));

  return (
    <div>
       <object data={`http://localhost:8000/rapport/${formation_id}.pdf`} width='1500' height='1000'>
       
       </object>
    </div>
  )
}

export default WatchVideo