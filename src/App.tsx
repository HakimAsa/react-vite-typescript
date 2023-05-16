import ListGroup from './components/ListGroup';

function App() {
  const cities = ['Cotonou', 'Parakou', 'Djougou', 'Bohicon', 'Nikki'];
  return (
    <div>
      <ListGroup items={cities} heading='List of certain Benin Republic Cities' />
    </div>
  );
}

export default App;
