/*
    GraphqQL resolvers
    DO NOT EDIT
 */

import { notify } from '@habx/ui-core'

const validateSetup = setup => {
  if (
    !setup.exposures.every(exposure =>
      PROJECT_PROPERTIES.exposures.find(e => e === exposure)
    )
  ) {
    notify("😱 Cette exposition n'existe pas sur ce projet !", {
      type: 'error',
    })
    return false
  }
  if (!PROJECT_PROPERTIES.typologies.find(t => t === setup.typology)) {
    notify("😱 Cette typologie n'existe pas sur ce projet !", {
      type: 'error',
    })
    return false
  }
  if (
    setup.budget < PROJECT_PROPERTIES.priceRange.min ||
    setup.budget > PROJECT_PROPERTIES.priceRange.max
  ) {
    notify("😱 Ce budget n'est pas valable sur le ce projet !", {
      type: 'error',
    })
    return false
  }
  if (
    setup.surface < PROJECT_PROPERTIES.surfaceRange.min ||
    setup.surface > PROJECT_PROPERTIES.surfaceRange.max
  ) {
    notify("😱 Cette surface n'est pas disponible sur ce projet !", {
      type: 'error',
    })
    return false
  }
  return true
}

const PROJECT_PROPERTIES = {
  priceRange: {
    min: 150_000,
    max: 800_000,
  },
  surfaceRange: {
    min: 25,
    max: 90,
  },
  exposures: ['north', 'south', 'east', 'west'],
  typologies: [1, 2, 3, 4, 5, 6],
}

export default {
  Query: {
    project: () => {
      return {
        id: 1,
        name: 'Fourqueux en Yvelines',
        properties: PROJECT_PROPERTIES,
      }
    },
  },
  Mutation: {
    upsertSetup: (_, { setup }) => {
      if (!validateSetup(setup)) {
        return false
      }
      notify('Setup inserted ! ✅')
      return true
    },
  },
}
