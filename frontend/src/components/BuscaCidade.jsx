import { useState, useEffect} from 'react'
import axios from 'axios'

export default function BuscaCidade({ onResultados }) {
  const [cidade, setCidade] = useState('São Paulo')

  useEffect(() => {
    if (cidade.length < 3) {
      onResultados([])
      return
    }

    const timer = setTimeout(() => {
    axios
      .get(`http://localhost:3001/previsoes?cidade=${encodeURIComponent(cidade)}`)
      .then(res => onResultados(res.data))
      .catch(() => onResultados([]))
  }, 2000)

  return () => clearTimeout(timer)
  }, [cidade])

  return (
    <input
      type="text"
      value={cidade}
      onChange={e => setCidade(e.target.value)}
      placeholder="Digite o nome da cidade"
      style={{ padding: '0.5rem', fontSize: '1rem', width: '100%' }}
    />
  )
}
