import { DashboardWidgetContainer } from "@sanity/dashboard"
import {Card, Text} from '@sanity/ui'

export const myCustomTool = () => {
  return {
    title: 'Preview',
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: () => '🕵️‍♂️',
    component: (...props) => {
      console.log('props', props)
      return (
        <>
        {/* <Card padding={4}>
          <Text>My custom tool!</Text>
        </Card> */}
         <iframe title="preview" src="/api/preview" width="100%" height="100%" />
        </>

      )
    }
  }
}