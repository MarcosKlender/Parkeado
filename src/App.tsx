import { Button } from './components/shared/Button/Button';
import { Parking } from './components/shared/Parking/Parking';
import './App.css'

function App() {
  return (
    <>
      <h1>Botones</h1>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>

      <h1>Parqueadero</h1>
      <Parking
        name='Central Plaza Parking'
        address='742 Evergreen Terrace, Springfield'
        available_slots={20}
      />
      <Parking
        name='Central Plaza Parking'
        address='742 Evergreen Terrace, Springfield'
        available_slots={30}
      />
      <Parking
        name='Central Plaza Parking'
        address='742 Evergreen Terrace, Springfield'
        available_slots={40}
      />
    </>
  )
}

export default App