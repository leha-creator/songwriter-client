import React, { useEffect, useState } from 'react';

import SongwriterAPI from "../utils/SongwriterAPI";
import {Song} from "../models/Song";


function songComponent({id} : {id : number}) {
    const [song, setSong] = useState(new Song);

    useEffect(() => {
        SongwriterAPI.getSong(id)
            .then(response => {
                setSong(response);
            })
    }, [])

    return (
        <div>
            {song.title}
        </div>
    );
}

export default songComponent;
