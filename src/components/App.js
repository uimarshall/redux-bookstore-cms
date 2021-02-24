import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App" dataset-id="main">
      <div className="main-bg bg-dark-grey">
        <div className="container center">
          <BooksList />
          <BooksForm />

        </div>

      </div>

    </div>
  );
}

export default App;
