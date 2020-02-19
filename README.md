

<p align="center" style="margin: 0 auto">
  <img height="80" src="https://res.cloudinary.com/habx/image/upload/logos/habx-framed.png" />
</p>

# Front-end technical test 👨‍💻

The goal of this test is to recreate a housing setup like we have at
[habx](https://www.habx.com/fr/).

You can see an example [here](https://www.habx-dev.fr/prj/iframe?url=https%3A%2F%2Fwww.habx.com%2Fmatch%2Fhabx%2Fprojects%2Fdemo-fr%2Fsetup%2F0%3F)

<p align="center" style="margin: 0 20%">
  <img height="200" src="https://res.cloudinary.com/habx/image/upload/tech/front-test/setup.png" />
</p>

This repository is the template of the test, you are asked to complete
it to fill all the requirements.


## Requirements

### Description

The component should be a form where 4 informations are asked:
* **Budget** (€)
* **Surface** (m²)
* **Typology** *one option possible*
* **Exposure** *multiple options possible*

The form should have a minimum of *validation* and be *based on project
data*.

User inputs have to be saved with the `upsertSetup` mutation with all
required values.

That's it ! ⛳️

### Tech

We ask you to use [react](https://github.com/facebook/react) with
[apollo-client](https://github.com/apollographql/react-apollo) to make
your GraphQL api calls. 👮‍♂️ 

### Nice to have

Pick at least one among the following 

* use [typescript](https://github.com/microsoft/TypeScript) in strict
  mode with `apollo-tooling` 🤓
* do some animations with tools you like 💃
* test the application: you can use `jest` or even `puppeteer` if you
  want 🤹‍♀️

#### Recommended libraries

Here are some libraries we are using daily, but you can use whatever you want ! 😉

* [@habx/ui-core](https://github.com/habx/ui-core) our UI components
  library ✨
* [styled-components](https://github.com/styled-components/styled-components) 💅
* [final-form](https://github.com/final-form/react-final-form) 🎛

You could start by editing the `Setup` component. You are free to imagine the UI/UX. 👨‍🎨


## How to start the test

Fork the repo and clone it, then:

```shell
  npm install
  npm run start
```

with yarn
```shell
  yarn
  yarn start
```

When you're done you can just send us the repository link 👨‍🏫

## API

The api is mocked client side and is described bellow

### Graphql API
#### Project query
```graphql
  query {
    project {
      id
      name
      properties {
        priceRange
        surfaceRange
        exposures
        typologies
      }
    }
  }
```

#### Setup mutation
```graphql
  mutation($setup: SetupInput!) {
    upsertSetup(setup: $setup)
  }
```

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
