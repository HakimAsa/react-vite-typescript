import ListGroup from './components/ListGroup';

function App() {
  const cities = ['Cotonou', 'Parakou', 'Djougou', 'Bohicon', 'Nikki'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={cities} heading='List of certain Benin Republic Cities' onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
