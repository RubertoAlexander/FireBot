import React from 'react'
import { Text } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
  static contextType = RequestContext
  static async botonicInit({ input }) {
    return { input }
  }

  render() {
    return (
      <>
        <Text>Hi! 👋</Text>
        <Text>My name is Firebot, what can I do for you today? 💃</Text>
      </>
    )
  }
}