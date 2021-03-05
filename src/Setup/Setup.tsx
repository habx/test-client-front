import { useQuery } from '@apollo/client'
import * as React from 'react'

import { Button, Title } from '@habx/ui-core'

import { projectQuery } from './Setup.query'
import { SetupContainer } from './Setup.style'
import { project } from './types/project'

const Setup = () => {
  const projectResponse = useQuery<project>(projectQuery)

  return (
    <SetupContainer>
      <Title type="header">{projectResponse.data?.project?.name}</Title>
      <br />
      <Button>Valider</Button>
    </SetupContainer>
  )
}

export default Setup
