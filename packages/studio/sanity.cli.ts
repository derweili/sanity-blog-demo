import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qyygg2kr',
    dataset: 'production'
  },
  graphql: [
    {
      playground: true,
      tag: 'experiment',
      // workspace: 'staging',
      // id: 'schema-experiment',
    },
  ]
})
