import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalState"
import Reading from "./pages/Reading"
import Finished from "./pages/Finished"
import WillRead from "./pages/WillRead"

// Will Read, Currently Reading, Finished --> Will See, Watch List, Watched

function App() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reading' element={<Reading />} />
          <Route path='/finished' element={<Finished />} />
          <Route path='/willRead' element={<WillRead />} />
        </Routes>
      </GlobalProvider>
    </>
  )
}

export default App
