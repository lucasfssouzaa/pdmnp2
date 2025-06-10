import { useState } from 'react'
import BuscaCidade from './components/BuscaCidade'

export default function App() {
  const [resultados, setResultados] = useState([])

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Previsão do Tempo</h1>
      <BuscaCidade onResultados={setResultados} />

      <div style={{ marginTop: '1.5rem' }}>
        {resultados.length === 0 && <p>Nenhuma previsão para mostrar</p>}
        {resultados.map((item, i) => (
          <div key={i} style={{
            border: '1px solid #ccc',
            borderRadius: 6,
            padding: '0.75rem',
            marginBottom: '0.75rem',
            display: 'flex',
            gap: '1rem'
          }}>
            <img
              src={`http://openweathermap.org/img/wn/${item.icone}@2x.png`}
              alt={item.descricao}
              style={{ width: 50, height: 50 }}
            />
            <div>
              <div><strong>Min:</strong> {item.temperatura_minima}°C</div>
              <div><strong>Max:</strong> {item.temperatura_maxima}°C</div>
              <div><strong>Umidade:</strong> {item.umidade}%</div>
              <div><strong>Descrição:</strong> {item.descricao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
