import { DocumentActionProps } from "sanity"

export function HelloWorldAction(props : DocumentActionProps) { 
  return {
    label: 'Hello world',
    onHandle: () => {
      // Here you can perform your actions
      window.alert('👋 Hello from custom action')
    }    
  } 
}