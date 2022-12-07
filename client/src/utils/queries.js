import { gql } from '@apollo/client';

export const QUERY_ME = gql`
	query me {
		me {
			username
			email
			saveBooks {	
				description
				bookId
				image
				link
				title
				Author {
					name
				}
			}
		}
	}
`;
