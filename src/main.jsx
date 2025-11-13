import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App saludo= 'Hola' mensaje='Muchas gracias a todos, soy un Prop'/>
    <App saludo= 'Bonjour' mensaje='Merci beaucoup a tous, je suis a Prop'/>   --> ESTE ES UN EJEMPLO DEL USO DE PROPS. */}
    <App saludo= 'Bonjour' mensaje='Merci beaucoup a tous, je suis a Prop'/>
  </StrictMode>,
)
