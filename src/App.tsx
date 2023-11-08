import './App.css'
import Column from './components/Column'
import { Status } from './enums/Status'

function App() {

  return (
    <div className='App'>
      <Column state={Status.PLANNED}/>
      <Column state={Status.ONGOING}/>
      <Column state={Status.DONE}/>

    </div>
  )
}

export default App
