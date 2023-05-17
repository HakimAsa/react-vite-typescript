import { useState } from 'react';

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h6>{heading}</h6>
      {items.length === 0 && <p>No city found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
