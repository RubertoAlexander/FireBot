import React from 'react'
import { Text, Reply } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext
    static async botonicInit({ input }) {
        return { input }
    }

    render() {
        return (
            <>
                <Text>To see if there are fires near, can you please tell me your location?
                    <Reply path="get-location?city=Melbourne">Melbourne</Reply>
                    <Reply path="get-location?city=Sydney">Sydney</Reply>
                </Text>
            </>
        )
    }
}