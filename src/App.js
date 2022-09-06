import './App.css';
import DisplayFilmLinks from './containers/DisplayLinksBox';
function App() {
  return (
    <>
        <div className="display-container">
        <h2>Upcoming film releases for uk</h2>
        <DisplayFilmLinks/>
        </div>
    </>
  );
}

export default App;
