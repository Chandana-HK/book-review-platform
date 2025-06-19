import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookListPage from './pages/BookListPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Book Review Platform</h1>
        <nav>
          <Link to="/books">📚 View All Books</Link>
        </nav>

        <Routes>
          <Route path="/books" element={<BookListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
