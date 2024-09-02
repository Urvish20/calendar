import './App.css'
import Overlay from './components/Overlay'
import Tryme from './components/Tryme'

function App() {


  return (
    <>
    <div className='flex justify-around mt-10 bg-[#414E55] py-[90px]'>
      <Tryme/>
      <Overlay/>
      </div>
    </>
  )
}

export default App
