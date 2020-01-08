import React from 'react'
import { Text } from '@botonic/react'
import { RequestContext } from '@botonic/react'
import getDistance from 'geolib/es/getDistance';

const fireLocations = [
    {lat: -37.0491119, long: 145.9573896},
    {lat: -36.9861296, long: 147.2673626},
    {lat: -37.3517694, long: 147.5290855},
    {lat: -37.2383802, long: 148.844171},
    {lat: -36.0929461, long: 147.1619736},
    {lat: -35.9469816, long: 147.8611158},
    {lat: -35.6828146, long: 148.0427962},
    {lat: -36.0073702, long: 148.6318722},
    {lat: -37.323187, long: 149.6667035},
    {lat: -36.5166649, long: 149.4824904}
    ];

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            long: null,
            fireDist: null
        }

        this.getPosition().then( () => {
            console.log("here");


        });
    }

    static contextType = RequestContext
    static async botonicInit({ input }) {
        return { input }
    }

    getPosition = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }),
            err => console.log(err)
        );
        await console.log(this.state.lat, this.state.long);
        await this.setState({fireDist: this.getClosestDistance()});
    }

    /*
        Traverses array of coordinates and returns the closest distance to a fire for the user
     */
    getClosestDistance = () => {
        let i = 1;
        let closestDistance = fireLocations[0];
        while (i < fireLocations.length) {

            console.log(fireLocations[i]);

            let measuredDistance = getDistance(
                {latitude: this.state.lat, longitude: this.state.long},
                {latitude: fireLocations[i].lat, longitude: fireLocations[i].long});

            if (measuredDistance < closestDistance) {
                closestDistance = measuredDistance;
            }

            i++;
        }

        return closestDistance;
    }

    render() {
            /*this.getPosition().then( () => {
                console.log("here");
                this.setState({fireDist: this.getClosestDistance()});
                console.log("out")
                console.log(this.state.fireDist);
        });*/
        return (
            <>

                <Text>To see if there are fires near you, let me get your location first...</Text>
                <Text>You are at {this.state.lat + ", " + this.state.long}</Text>
                <Text>The closest fire to you is {this.state.fireDist} km away.</Text>

            </>
        )
    }
}