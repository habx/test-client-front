# Habx front-end test

The goal of this test is to recreate a housing setup like we have at
[habx](https://www.habx.com/fr/).

You can see examples on our
[old setup](https://www.habx.com/setup/involvements/champs-joliot/fondamentals)
and on our
[brand new product match](https://www.habx-dev.fr/prj/iframe?url=https%3A%2F%2Fwww.habx.com%2Fmatch%2Fhabx%2Fprojects%2Fdemo-fr%2Fsetup%2F0%3F)

<p align="center" style="margin: 0 20%">
  <img height="200" src="https://res.cloudinary.com/habx/image/upload/tech/front-test/setup.png" />
</p>

This repository is the template of the test, you are asked to complete
it to fill all the requirements.

## Requirements

### Product

The component should be a form where 4 informations are asked:
* **Budget** (€)
* **Surface** (m²)
* **Typology** *one option possible*
* **Exposure** *multiple options possible*

The form should have a minimum of validation and be based on project
data.

### Tech
You are required to use [react](https://github.com/facebook/react) with
[apollo-client](https://github.com/apollographql/react-apollo) to make
your GraphQL api calls. It is appreciated that you use
[typescript](https://github.com/microsoft/TypeScript)

You can generate types based on your GraphQL requests by running `npm
run build:types`

#### Recommended libraries
* [@habx/ui-core](https://github.com/habx/ui-core) our UI components
  library
* [styled-components](https://github.com/styled-components/styled-components)
* [final-form](https://github.com/final-form/react-final-form)

You could start by editing the `Setup` component. You are free to imagine the UI/UX.


## How to run the client
```shell
    npm install
    npm run start
```

with yarn
```shell
    yarn
    yarn start
```

### API

The api is mocked client side and has the following
[GraphqQL](https://graphql.org/) schema.

### Graphql schema
```graphql
    
    type Range {
      min: Int
      max: Int
    }
    type ProjectProperties {
      priceRange: Range
      surfaceRange: Range
      exposures: [String]
      typologies: [Int]
    }
    
    type Project {
      id: ID
      name: String
      properties: ProjectProperties
    }
    
    type Query {
      project: Project
    }
    
    input SetupInput {
      budget: Int!
      surface: Int!
      exposures: [String]!
      typology: Int!
    }
    
    type Mutation {
      upsertSetup(setup: SetupInput!): Boolean
    }
    
    schema {
      query: Query
      mutation: Mutation
    }
      
```


If you have any question, don't hesitate to ask our team 🤘

Good luck ! 🤗
