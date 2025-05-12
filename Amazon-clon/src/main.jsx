import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
 
   
    <App />
     </Stateprovider>
  </StrictMode>,
)
