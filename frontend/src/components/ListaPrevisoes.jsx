import { Card } from 'primereact/card'
import { Image } from 'primereact/image'

export default function ListaPrevisoes({ previsoes }) {
  if (!previsoes || previsoes.length === 0) {
    return <p>Nenhuma previsão para mostrar</p>
  }

  return (
    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {previsoes.map((item, i) => (
        <Card key={i} title={item.descricao}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Image
              src={`http://openweathermap.org/img/wn/${item.icone}@2x.png`}
              alt={item.descricao}
              width="60"
            />
            <div>
              <p><strong>Min:</strong> {item.temperatura_minima}°C</p>
              <p><strong>Max:</strong> {item.temperatura_maxima}°C</p>
              <p><strong>Umidade:</strong> {item.umidade}%</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
