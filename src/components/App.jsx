import { useState } from 'react'
import Form from './Form'
import Card from './Card';
import './styles/App.css'

function App() {
  const [mascotas,setMascotas]=useState([]);

  const addMascotas = (mascota)=>{
    setMascotas([...mascotas,mascota]);
  };
  
  
  
  return (
    <div className='App'>
      <h1>Registro de mascotas</h1>
      <Form onAddMascota={addMascotas}/>
      <Card mascotas={mascotas}/>
      
    </div>
  )
}

export default App
