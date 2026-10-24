import { useState } from 'react'
import './App.css'

function App() {
const [xp, setXp] = useState(0);

  function ganharXP(){
    setXp(xp + 10)
    console.log(xp)
  }

  return (
    <div className="card">
      <h1>Meu perfil</h1>
      <h2>Levi</h2>
      <p>Desenvolvedor Junior</p>

      <h3>Minhas informações</h3>
      <p>Jogo favorito: Dying light</p>
      <p>Linguagem favorita: C</p>

      <p>idade: 17</p>

      <p>XP: {xp}</p>
      <button onClick={ganharXP}>Ganhar XP</button>
    </div>
  )
}

export default App