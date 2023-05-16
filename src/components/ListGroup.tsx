import { useState } from 'react';

function ListGroup() {
  const cities = ['Cotonou', 'Parakou', 'Djougou', 'Bohicon', 'Nikki'];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (cities.length === 0) {
    return <p>No city found</p>;
  }
  return (
    <>
      <h1>City of Benin</h1>
      <ul className='list-group'>
        {cities.map((city, index) => (
          <li key={city} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => setSelectedIndex(index)}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
