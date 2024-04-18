import React, {useState, useRef, useEffect} from "react";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, getBlob, list, listAll } from "firebase/storage";
import {
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import {useTranslation} from "react-i18next";


const AudioPlayer = () => {

    const storage = getStorage();

    // const {t, i18n} = useTranslation();

    try {
        useEffect(() => {
            listAll(audioListRef).then((response) => {
                console.log(response);
                response.items.forEach((item) => {
                    // console.log(item)
                    console.log(item.name)
                    getDownloadURL(item).then((url) => {
                        console.log(url)
                        setAudios((prev) => [...prev, {urlPath: url, fileTitle: item.name}])
                    })
                })
            }).catch((error) => {
                console.log(error);
            })
        }, [])
    } catch (e) {
        console.log(e)
    }
    const[show, submitShow] = useState(true)

    return (
        <div>
            <h2>Audio Player</h2>
            <List>
                {audios.map((audioItem) => {
                    return <ListItem key={audioItem.fileTitle}><ListItemText disableTypography={true}>{audioItem.fileTitle}
                        <audio src={audioItem.urlPath} controls></audio></ListItemText>
                    </ListItem>
                })}
            </List>
        </div>
    );
};

export default AudioPlayer;