import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import { Provider } from 'react-redux'
// import store from './store/index.jsx'

const queryClient = new QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
    <ReactQueryDevtools initialIsOpen={false} position='right'/>
    </QueryClientProvider>
  </React.StrictMode>
)
