import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import GridLayout from './components/GridLayout/GridLayout';
import Asection from './components/GridLayout/Asection';


function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <h1 style={{ paddingTop: '45px', textAlign: 'center' }}>Hello From Another Dimension</h1>
      <GridLayout></GridLayout>
      <h1 style={{ paddingTop: '45px', textAlign: 'center' }}>Common Quesions What Pepole Asks</h1>
      <Asection></Asection>
    </div>
  );
}

export default App;
