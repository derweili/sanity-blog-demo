import { ObjectInputProps, defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas'
import Logo from './components/studio/Logo'
import Navbar from './components/studio/Navbar'
import { dashboardTool, projectInfoWidget, projectUsersWidget, sanityTutorialsWidget } from "@sanity/dashboard";
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { HelloWorldAction } from './components/workflow/actions'
import { HelloWorldBadge } from './components/workflow/badges'
import { myCustomTool } from './components/studio/tools'
import { defaultDocumentNode } from './components/preview/defaultDocumentNode'
import { workflow } from 'sanity-plugin-workflow'
import { myStructure } from './deskStructure'
import { Progress } from './components/fields/Progress'

export default defineConfig({
  name: 'default',
  title: 'sanity-tutorial-blog',

  projectId: 'qyygg2kr',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        documentListWidget({
          showCreateButton: true,
          limit: 5,
          types: ['movie'],
        }),
        projectUsersWidget({ layout: { width: 'large' } }),
      ]
    }),
    deskTool(
      {
        defaultDocumentNode,
        structure: myStructure,
        title: 'Content',
      }
    ),
    visionTool(),
    workflow({
      // Required, list of document type names
      // schemaTypes: ['article', 'product'],
      schemaTypes: ['movie'],
      // Optional, see below
      // states: [],
    }),
    //googleMapsInput(),
  ],
  tools: [myCustomTool() as any],
  document: {
    actions: [
      HelloWorldAction
    ],
    badges: [
      HelloWorldBadge
    ]
  },
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: Navbar,
    }
  },
  form: {
    components: {
      input: (props) => {
        if (
          props.id === 'root' &&
          props.schemaType.type?.name === 'document' &&
          props.schemaType.name === 'article'
        ) {
          return Progress({ ...props as ObjectInputProps, stringFields: ['title', 'slug'] })
        }

        return props.renderDefault(props)
      },
    }

  }
})
