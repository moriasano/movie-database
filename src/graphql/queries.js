/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovies = /* GraphQL */ `
  query GetMovies($id: ID!) {
    getMovies(id: $id) {
      id
      name
      director
      genre
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        director
        genre
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
