import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([
    'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Lemon', 'Mango'
  ]);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    const filteredList = filteredItems.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredItems(filteredList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for fruits..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
