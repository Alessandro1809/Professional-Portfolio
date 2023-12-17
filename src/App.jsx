import { HashRouter,Route,Routes } from "react-router-dom"
import Onepage from "./layouth/Onepage"
import PrincipalPage from "./pages/PrincipalPage"
import Galery from "./pages/Galery"
function App() {

  return (
   <HashRouter>
      <Routes>
          <Route path="/" element={<Onepage/>}>
            <Route index element={<PrincipalPage/>}/>
            <Route path='gallery' element={<Galery/>}/>
          </Route>
      </Routes>
   </HashRouter>
  )
}

export default App
