import React from 'react'
import {Button, Text} from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    render() {
        return (
            <>
                <Text>Please go this website to see the locations of the fires.</Text>
                <Button url={"https://google.org/crisismap/australia"}>Crisis Map</Button>
            </>
        )
    }
}
