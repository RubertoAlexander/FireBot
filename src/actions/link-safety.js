import React from 'react'
import {Text, Video, Document, Element, Button} from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    render() {
        return (
            <>
            <Text>Please see the following information and follow its guidelines to be safe.</Text>
                <Text> We have a video and a survival plan for you to look through. 📖 </Text>
                <div style={{marginLeft: "10%"}}>
                    <Element>
                        <iframe width="200" height="125" src="https://www.youtube.com/embed/o2YgHWnw2Yo" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    </Element>
                </div>
                <Button url={"https://www.rfs.nsw.gov.au/__data/assets/pdf_file/0003/36597/GetReadyforaBushFire.pdf"}>Bushfire Survival Plan</Button>
            </>
        )
    }
}
