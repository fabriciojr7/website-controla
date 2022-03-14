import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.controla.com.br/site/ws/ws_chave_boleto.php'
})

export default api