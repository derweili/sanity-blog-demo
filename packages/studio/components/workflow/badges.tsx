import { DocumentBadgeComponent } from "sanity";

export const HelloWorldBadge : DocumentBadgeComponent = (props) => {
  return {
    label: 'Hello world',
		title: 'Hello I am a custom document badge',
    color: "success"
  }
} 