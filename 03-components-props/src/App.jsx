import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

/*
- App() without useState: it run only once

- const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  = selectedTopic is a variable that holds the current state value
  = setSelectedTopic is a function to update the value of selectedTopic
  = useState() initializes the state.

- {!selectedTopic ? <p>Please select a topic</p> : null}
  = instead of: "? : null"
  = use: "&&"
  = {!selectedTopic && <p>Please select a topic</p>}

  - if you don't need a redundant element in the DOM: 
      = instead of using <div>...</div>
      = use: <>...</>
- Custom container must start with a capital letter
*/

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
