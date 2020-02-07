/*
    apollo configuration
    DO NOT EDIT
 */
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import SchemaLink from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'
import { loader } from 'graphql.macro'

import resolvers from './resolvers'

const typeDefs = loader('./schema.graphql')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
})
