import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './auth/AuthContext'
import { PrivateRoute } from './auth/PrivateRoute'
import { Categories } from './pages/Categories'
import { Dashboard } from './pages/Dashboard'
import LoginPage from './pages/Login'
import { Proxies } from './pages/Proxies'
import { Vendors } from './pages/Vendors'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/proxies" element={<Proxies />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/vendors" element={<Vendors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
