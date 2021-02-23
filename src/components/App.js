import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App" dataset-id="main">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
