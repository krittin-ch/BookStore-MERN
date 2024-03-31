import PropTypes from 'prop-types';

// components
import BookSingleCard from "./BookSingleCard";

function BookCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
            <BookSingleCard key={ book._id } book={ book } />
        ))}
    </div>
  )
}

BookCard.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publishYear: PropTypes.number.isRequired
        })
    ).isRequired
}

export default BookCard