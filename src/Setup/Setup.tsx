import { useQuery } from '@apollo/react-hooks'
import * as React from 'react'

import { Button, Title } from '@habx/ui-core'

import { projectQuery } from './Setup.query'
import { SetupContainer } from './Setup.style'

const Setup = () => {
  const projectResponse = useQuery(projectQuery)
  return (
    <SetupContainer>
      <Title type="article">{projectResponse.data?.project.name}</Title>
      <br />
      <Button>Valider</Button>
    </SetupContainer>
  )
}

export default Setup
