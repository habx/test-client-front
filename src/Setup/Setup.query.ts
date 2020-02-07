import gql from 'graphql-tag'

export const projectQuery = gql`
  query project {
    project {
      id
      name
    }
  }
`
