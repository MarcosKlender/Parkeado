import { Button } from './components/shared/Button/Button';
import { Parking } from './components/shared/Parking/Parking';
import { Slot } from './components/shared/Slot/Slot';
import './App.css'

function App() {
  return (
    <>
      <h2>Botones</h2>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>

      <h2>Parqueadero</h2>
      <Parking
        name='Central Plaza Parking'
        address='742 Evergreen Terrace, Springfield'
        availableSlots={20}
      />

      <h2>Plazas</h2>
      <Slot number={1} isAvailable={true} />
      <Slot number={2} isAvailable={false} />
      <Slot number={3} isAvailable={true} />
      <Slot number={4} isAvailable={false} />
    </>
  )
}

export default App