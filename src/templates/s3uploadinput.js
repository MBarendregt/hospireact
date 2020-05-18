import React from 'react';
// import aws from '../../.env';
import ReactS3 from 'react-s3';

async function getData(url = '') {
    const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://hospihousing.nl'
            }
        });

    console.log(response)
    return await response.text();
}



class S3uploads extends React.Component {

    uploadFile(e) {
        e.persist()
        console.log("uploading..")
        getData('https://8guqkxdl2f.execute-api.eu-west-1.amazonaws.com/prod/getkeys')
            .then((data) => {
                var data2 = JSON.parse(JSON.parse(data))
                console.log(data2)
                console.log(e)
                const config = {
                    bucketName: 'hospihousing-studentfiles',
                    dirName: 'images',
                    region: 'eu-west-1',
                    accessKeyId: data2.access,
                    secretAccessKey: data2.keys
                }
                ReactS3.uploadFile(e.target.files[0], config)
                    .then((data) => {
                        console.log(data.location);
                    })
                    .catch((err) => {
                        console.log(err);
                        // alert(err.message);
                    })

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