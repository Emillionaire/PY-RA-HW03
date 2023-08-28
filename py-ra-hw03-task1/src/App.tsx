import './App.css'
import Stars from './components/Stars';

function App() {
  return (
    <>
      Запрос 1 звезды:
      <Stars count={1}/>
      Запрос 3 звезды:
      <Stars count={3}/>
      Запрос 4 звезды:
      <Stars count={4}/>
      Запрос 6 звезд:
      <Stars count={6}/>
      Запрос 'a' звезд:
      <Stars count='a'/>
    </>
  )
}

export default App
