import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

axios.get('http://localhost:3001/notes').then(response => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
})//
