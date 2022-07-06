import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import GridLayout from './components/GridLayout/GridLayout';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <h1 style={{ paddingTop: '45px', textAlign: 'center' }}>Hello From Another Dimension</h1>
      <GridLayout></GridLayout>
    </div>
  );
}

export default App;
