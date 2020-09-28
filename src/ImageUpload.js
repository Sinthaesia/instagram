import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import firebase from 'firebase';
import { storage, db } from './firebase';
import './ImageUpload.scss';

function ImageUpload({username}) {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        // get the file you selected first
        if (e.target.files[0]) {
            // set the image and state to the first selected img
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // access storage on Firebase, create new images folder, store img + filename inside, 
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // set progress number from 1-100
                setProgress(progress);
            },
            (error) => {
                // Error function incase something goes wrong
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside of db
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };

    return (
      <div className="imageupload">
        <progress className="imageupload__progress" value={progress} max="100" />
        <input className="imageupload__caption" type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={caption} />
        <input className="imageupload__file" type="file" onChange={handleChange} />
        <Button className="imageupload__button" onClick={handleUpload}>
            Upload
        </Button>
      </div>
    )
}

export default ImageUpload
