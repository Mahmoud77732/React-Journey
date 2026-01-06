import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

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
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'Components'} onClick={() => handleSelect('Components')}>
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'JSX'} onClick={() => handleSelect('JSX')}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'Props'} onClick={() => handleSelect('Props')}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'State'} onClick={() => handleSelect('State')}>
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    );
}