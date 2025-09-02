import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import { LoadingProvider } from './context/LoadingContext'

export default function App() {
return (
<LoadingProvider>
<NavBar />
<div className="container">
<AppRoutes />
</div>
</LoadingProvider>
)
}