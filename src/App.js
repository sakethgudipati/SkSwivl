import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskForm from "./Components/TaskForm/index"
import HomeRoute from "./Components/HomeRoute/index"
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomeRoute} />
          <Route exact path="/tasks" Component={TaskForm} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
