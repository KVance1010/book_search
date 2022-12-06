import { gql } from '@apollo/client';

export const QUERY_ME = gql`
	query me {
		me {
			_id
			username
			email
			saveBooks {
				_id
				description
				bookId
				image
				link
				title
				Author {
					_id
					name
				}
			}
		}
	}
`;
