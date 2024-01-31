import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'mario\' birthday bash', id: 1},
    {title: 'browser\' live stream', id: 2},
    {title: 'race on moo moo farm', id: 3},
  ])

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      <Title title="prop value from root component" subtitle="this is the subtitle from root component"/>
      {
        showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
          </div>
        )
      }
      {
        !showEvents && (
          <div>
            <button onClick={() => setShowEvents(true)}>Show Events</button>
          </div>
        )
      }
      {
        showEvents && events.map((event, index) => (
          <div>
              <h2>{index} - {event.title}</h2>
              <button onClick={() => handleClick(event.id)}>delete event</button>
          </div>
        ))
      }
{/* 
      <Modal>
        <h2>This is the H2 tag</h2>
        <p>This is the p element</p>
      </Modal> */}
      <Modal>
        <h2>This is the H2 tag</h2>
        <p>Lorem</p>
        <a>find out more...</a>
      </Modal>
    </div>
  );
}

export default App;
