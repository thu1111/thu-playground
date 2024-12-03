import { useState } from 'react'
import Chase from './components/Chase';
import { puppyList } from './data';

const dogs = [
  { id: 1, name: "Logan", breed: "Italian Greyhound", age: 14 },
  { id: 2, name: "Chase", breed: "Italian Greyhound", age: 12 },
  { id: 3, name: "Lincoln", breed: "Mixed Rescue", age: 6 },
];

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [favPupId, setFavPupId] = useState(null);
  const favPup = puppies.find((puppy)=> puppy.id === favPupId);
  
  return (
    <div>
      <h1>Puppy List</h1>

      {favPupId &&  <div className='favPup'>
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
