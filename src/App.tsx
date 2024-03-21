import { BrowserRouter as Router } from 'react-router-dom'; 
import RouterConfig from "./routes/Router"

function App() {
  return (
    <div className="font-Jost">
      <Router>
        <RouterConfig />
      </Router>
    </div>
  )
}

export default App
