import React from 'react';
// import aws from '../../.env';
import ReactS3 from 'react-s3';



const config = {
    bucketName: 'hospihousing-studentfiles',
    dirName: 'images',
    region: 'eu-west-1',
    accessKeyId: "AKIA2SZQDYWF25CJPCEZ",
    secretAccessKey: "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"
    // accessKeyId: aws.accessKeyId,
    // secretAccessKey: aws.secretAccessKey
}

class Blabla extends React.Component {
    constructor() {
        super();
    }
    upload(e) {
        console.log(e.target.files[0]);
        ReactS3.uploadFile(e.target.files[0], config)
            .then((data) => {
                console.log(data.location);
            })
            .catch((err) => {
                console.log(err);
                // alert(err.message);
            })
    }



    render() {
        return (
            <section>
                <div>
                    <h3>Upload</h3>
                    <input type="file"
                        onChange={this.upload} />
                </div>
            </section>
        )
    }
}


export default Blabla;