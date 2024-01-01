import React from 'react'
import ReactDOM from 'react-dom/client'
/* CSS */
import 'foundation-sites/dist/css/foundation.min.css';
import "./assets/accordion.css";
import "./assets/styles.css";
import App from './components/App.jsx';
/* React Router */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
