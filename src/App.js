import './App.css';
import { useState } from 'react';
import Title from './components/Title';

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
      <Title/>
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
    </div>
  );
}

export default App;
