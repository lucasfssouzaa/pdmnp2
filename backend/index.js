import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())

const porta = process.env.PORT;
const chaveApi = process.env.API_KEY_OPENWEATHER

app.get('/previsoes', async (req, res) => {
  const cidade = req.query.cidade
  if (!cidade) {
    return res.status(400).json({ erro: 'Cidade é obrigatória' })
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cidade)}&units=metric&lang=pt_br&appid=${chaveApi}`
    const resposta = await axios.get(url)

    const previsoes = resposta.data.list.map(item => ({
      temperatura_minima: item.main.temp_min,
      temperatura_maxima: item.main.temp_max,
      umidade: item.main.humidity,
      icone: item.weather[0].icon,
      descricao: item.weather[0].description
    }))

    res.json(previsoes)
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao obter previsões' })
  }
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})
