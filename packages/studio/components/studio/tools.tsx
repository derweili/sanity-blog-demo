import { DashboardWidgetContainer } from "@sanity/dashboard"
import {Card, Text} from '@sanity/ui'

export const myCustomTool = () => {
  return {
    title: 'My Custom Tool',
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardWidgetContainer,
    component: (props) => (
      <Card padding={4}>
        <Text>My custom tool!</Text>
      </Card>
    ),
  }
}