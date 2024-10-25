import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
<GoogleOAuthProvider clientId="479924025745-psjv0sipm5rmgj0pf1cojn851o3vm89d.apps.googleusercontent.com">
    <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
</QueryClientProvider>
  </StrictMode>,
)
