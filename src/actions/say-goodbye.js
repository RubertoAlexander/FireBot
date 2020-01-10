import React from 'react'
import { Text } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    render() {
        return (
            <>
                <Text>Goodbye! 👋</Text>
                <Text>Just let me know if you need anything else!</Text>
            </>
        )
    }
}
