import React from 'react';
import {
	Jumbotron,
	Container,
	CardColumns,
	Card,
	Button,
} from 'react-bootstrap';
import { DELETE_BOOK } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';

const SavedBooks = () => {
	const { loading, data } = useQuery(QUERY_ME, {fetchPolicy: "no-cache"});
	const savedBooks = data?.me.savedBooks || [];

	const [deleteBook] = useMutation(DELETE_BOOK);
	const handleDeleteBook = async (bookId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;
		if (!token) {
			return false;
		}

		try {
			await deleteBook({
				variables: { bookId },
			});
			removeBookId(bookId);
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) {
		return <h2>LOADING...</h2>;
	}

	return (
		<>
			<Jumbotron fluid className="text-light bg-dark">
				<Container>
					<h1>Viewing saved books!</h1>
				</Container>
			</Jumbotron>
			<Container>
				<h2>
					{savedBooks.length
						? `Viewing ${savedBooks.length} saved ${
								savedBooks.length === 1 ? 'book' : 'books'
						  }:`
						: 'You have no saved books!'}
				</h2>
				<CardColumns>
					{savedBooks.map((book) => {
						return (
							<Card key={book.bookId} border="dark">
								{book.image ? (
									<Card.Img
										src={book.image}
										alt={`The cover for ${book.title}`}
										variant="top"
									/>
								) : null}
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<p className="small">Authors: {book.authors}</p>
									<Card.Text>{book.description}</Card.Text>
									<Button
										className="btn-block btn-danger"
										onClick={() => handleDeleteBook(book.bookId)}
									>
										Delete this Book!
									</Button>
								</Card.Body>
							</Card>
						);
					})}
				</CardColumns>
			</Container>
		</>
	);
};

export default SavedBooks;
