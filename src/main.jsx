import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToastContainer/>
        <App/>
    </StrictMode>,
)