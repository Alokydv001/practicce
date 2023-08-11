import React, { useState } from 'react';

const Accordion = () => {
  const accordionData = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <h1>Accordion Example</h1>
      {accordionData.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleAccordion(index)}>
            {item.title}
          </h3>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
