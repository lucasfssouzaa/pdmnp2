import { useState } from 'react'
import BuscaCidade from './components/BuscaCidade'
import ListaPrevisoes from './components/ListaPrevisoes'

export default function App() {
  const [resultados, setResultados] = useState([])

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Previsão do Tempo</h1>
      <BuscaCidade onResultados={setResultados} />
      <ListaPrevisoes previsoes={resultados} />
    </div>
  )
}
