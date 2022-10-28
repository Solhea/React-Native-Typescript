import {DocumentNode, gql} from '@apollo/client';

export const GET_ALL_CHARACTERS: DocumentNode = gql`
  query GetAllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
