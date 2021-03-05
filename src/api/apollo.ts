/*
    apollo configuration
    DO NOT EDIT
 */
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import { makeExecutableSchema } from '@graphql-tools/schema'
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
