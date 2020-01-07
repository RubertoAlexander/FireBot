import React from 'react'
import { Text } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            long: null
        }
    }

    static contextType = RequestContext
    static async botonicInit({ input }) {
        return { input }
    }

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.lat, this.state.long)
    }

    render() {
        return (
            <>
                <Text>To see if there are fires near you, let me get your location first...</Text>
                {this.position}
                <Text>You are at {this.state.lat + ", " + this.state.long}</Text>
            </>
        )
    }
}