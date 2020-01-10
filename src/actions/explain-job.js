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
                <Text>I can provide you with heaps of information about any ongoing fires in Australia.</Text>
                <Text>We are currently experiencing one of our biggest bushfire crises and your safety is most important! </Text>
                <Text>You can ask me questions about where the fires are and what you can do to be safe. 👍 </Text>
            </>
        )
    }
}