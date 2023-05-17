// import ListGroup from './components/ListGroup';

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';

function App() {
  // const cities = ['Cotonou', 'Parakou', 'Djougou', 'Bohicon', 'Nikki'];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* <ListGroup items={cities} heading='List of certain Benin Republic Cities' onSelectItem={handleSelectItem} /> */}
      {show && <Alert onClose={() => setShow(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setShow(true)}>
        Show Alert
      </Button>
      {/* like button example */}
      <Like onClick={() => console.log('clicked')} />
    </div>
  );
}

export default App;
