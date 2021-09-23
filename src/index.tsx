import './index.module.css'
import { worker } from './mocks/browser'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import UserProvider from './context/UserProvider'
import QuestionProvider from './context/QuestionProvider'

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <UserProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </UserProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  )
})

reportWebVitals()
