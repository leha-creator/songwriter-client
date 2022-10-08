import React, {useEffect, useState} from 'react';
import SongListComponent from "./components/songListComponent";
import SongComponent from "./components/songComponent";

function App() {
    const [actualSongId, setActualSongId] = useState<number | null>(null)

    useEffect( () => {
        console.log(actualSongId);
    })

    return (
        <div className="App">
            <SongListComponent setActualSongId={setActualSongId}></SongListComponent>
            {actualSongId != null ? <SongComponent id={actualSongId}></SongComponent> : <div>Песня не выбрана</div>}
        </div>
    );
}

export default App;
