import './App.css'
import Button from './components/atoms/Button/Button'

function App() {
  
  const handleClick = () => {
    alert('Button clicked!');
  }

  return (
    <>
     <Button type="button" onClick={handleClick}
    className="h-14
      ml-20
      mt-4
      px-4
      py-4
      w-72
      rounded-xl
      bg-blue-600
      text-lg
      font-semibold
      text-white
      shadow-md
      transition-all
      duration-300
      hover:bg-blue-700
      hover:shadow-lg
      focus:outline-none
      focus:ring-4
      focus:ring-blue-200">
      
      Remote Button
    </Button>

    </>
  )
}

export default App
