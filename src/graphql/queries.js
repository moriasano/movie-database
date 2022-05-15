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
      year
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        year
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        director
        genre
        rating
        year
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
