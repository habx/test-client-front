

<p align="center" style="margin: 0 auto">
  <img height="80" src="https://res.cloudinary.com/habx/image/upload/logos/habx-framed.png" />
</p>

# Front-end technical test 👨‍💻

The goal of this test is to recreate a housing setup like we have at
[habx](https://www.habx.com/fr/). It should take you less than 2 hours but feel free to take more time if you still have something to show us!


<p align="center" style="margin: 0 20%">
  <img height="200" src="https://res.cloudinary.com/habx/image/upload/tech/front-test/setup.png" />
</p>

This repository is the template of the test, you are asked to complete
it to fill all the requirements.

## How to start the test

Fork the repo and clone it, then:

```shell
  npm ci
  npm start
```

When you're done you can just send us the repository link 👨‍🏫

## Requirements

### Description

The component should be a form with 4 fields:
* **Budget** (price in euros)
* **Surface** (area in square meters)
* **Typology** (nb of rooms) *one option possible* 
* **Exposure** (north, south, east, west) *multiple options possible* 

The form should have a minimum of *validation* and be *based on project
properties* that should be fetched from the api.

User inputs have to be saved with the `upsertSetup` mutation with all
required values.

That's it ! ⛳️

### Tech

We ask you to use [React](https://github.com/facebook/react) with [apollo-client](https://github.com/apollographql/react-apollo) to make
your GraphQL API calls. 👮‍♂️ 

### Nice to have

Pick at least one among the following 

* use [Typescript](https://github.com/microsoft/TypeScript) in strict mode (you can generate graphql types by running `npm run build:types`) 🤓 
* do some animations with tools you like 💃
* test the application: you can use `jest` or even `cypress` if you
  want 🤹‍♀️

#### Recommended libraries

Here are some libraries we use daily, but you can use whatever you want ! 😉

* [@habx/ui-core](https://github.com/habx/ui-core) our UI components
  library ✨
* [styled-components](https://github.com/styled-components/styled-components) 💅
* [final-form](https://github.com/final-form/react-final-form) 🎛

You could start by editing the `Setup` component. You are free to imagine the UI/UX. 👨‍🎨

## Feedbacks
Any thoughts about our development environment ? (create-react-app/graphql...)
What tools are you using daily ?


## API

The api is mocked client side and is described bellow

### Graphql API

[Graphql schema](./src/api/schema.graphql)

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



If you have any question, don't hesitate to ask our team 🤘

Good luck ! 🤗
