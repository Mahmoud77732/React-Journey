import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

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
*/

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
    console.log(selectedBtn);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic.toLowerCase()].title}</h3>
        <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic.toLowerCase()].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> 
            */}
            {CORE_CONCEPTS.map( 
              (conceptItem) => 
                <CoreConcept key={conceptItem.title} {...conceptItem} /> 
              )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => handleSelect('Components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect('JSX')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleSelect('Props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleSelect('State')}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
