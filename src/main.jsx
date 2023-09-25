import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import searchImages from './api.js'

// searchImages();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
