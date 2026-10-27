import Header from './components/Header';
import Entry from './components/Entry';
import data from './resources/data.js';

function App() {
  const entries = data.map(entry => (
    <Entry
      {...entry}
    />
  ));
  return (
    <main>
      <Header/>
      <main className="container">
        {entries}
      </main>
    </main>
  );
}

export default App;
