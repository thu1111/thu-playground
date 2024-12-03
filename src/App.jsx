import { useState } from 'react'
import { puppyList } from './data';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [favPupId, setFavPupId] = useState(null);
  const favPup = puppies.find((puppy)=> puppy.id === favPupId);
  console.log("featured puppy", favPup);
  
  return (
    <div>
      <h1>Puppy List</h1>

      {favPupId &&  <div className='favPup' onClick={()=>setFavPupId(null)}>
                      <h4>Favorite Puppy is</h4>
                      <p>Name: {favPup.name}</p>
                      <p>Age: {favPup.age}</p>
                      <p>Emai: {favPup.email}</p>
                    </div>}
                    
      <div className="puppyList">
        {puppyList.map((puppy)=>{
          return  <p key={puppy.id} onClick={()=>setFavPupId(puppy.id)} className='puppies'>
                    {puppy.name}
                  </p>
        })}
      </div>
    </div>
  )
}

export default App
