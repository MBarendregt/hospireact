import React from 'react';
// import aws from '../../.env';
import ReactS3 from 'react-s3';



const config = {
    bucketName: 'hospihousing-studentfiles',
    dirName: 'images',
    region: 'eu-west-1',
    accessKeyId: "AKIA2SZQDYWF3WNF5KMY",
    secretAccessKey: "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"
    // accessKeyId: aws.accessKeyId,
    // secretAccessKey: aws.secretAccessKey

}

class S3uploads extends React.Component {


    uploadFile(e) {
        console.log(e.target.files[0]);
        ReactS3.uploadFile(e.target.files[0], config)
            .then((data) => {
                console.log(data.location);
            })
            .catch((err) => {
                alert(err);
            })
    }

    render() {
        return (
            <div>
                <h3>Upload</h3>
                <input type="file"
                    onChange={this.uploadFile} />
            </div>
        )
    }
}


export default S3uploads;