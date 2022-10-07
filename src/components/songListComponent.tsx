import React, {useEffect, useState} from 'react';

import SongwriterAPI from "../utils/SongwriterAPI";

function SongListComponent() {
    const [songListItems, setSongListItems] = useState<JSX.Element[]>()
    useEffect(() => {
        SongwriterAPI.getSongs()
            .then(songs => {
                setSongListItems(songs.map((song) => {
                    return <li key={song.id}>{song.title}</li>
                }));

            })
        console.log(1);
    }, [])

    return (
        <ul>
            {songListItems}
        </ul>
    );
}

export default SongListComponent;
