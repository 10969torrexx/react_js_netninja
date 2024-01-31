import './App.css';
import { useState } from 'react';
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
      <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>
      <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>
      {
        events.map((event, index) => (
          <div key={event.id}>
            <h2>{index} - {event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete Event</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
