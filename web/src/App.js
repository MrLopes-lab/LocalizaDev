import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/devForm';
import DevItem from './components/devItem';

function App() {
  const [devs, setDevs] = useState([]);
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs();
  }, []);

  async function handAddDev(data) {
    const response = await api.post('/devs', data)

    console.log(response.data)

    setDevs([...devs, response.data])
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}          
        </ul>
      </main> 
    </div>
  );
}

export default App;
