import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookListPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then((response) => {
        console.log('✅ Books fetched:', response.data);
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Error fetching books:', err);
        setError('Failed to load books. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookListPage;
