import React, {useState} from 'react';
import {SongListComponent} from "./songListComponent";
import {SongComponent} from './songComponent';
import {HeaderComponent} from "./HeaderComponent";
import '../styles/components/app.css';
import '../styles/components/main.css';


export function App() {
    const [actualSongId, setActualSongId] = useState<number | null>(null);

    return (
        <div className='app'>
            <HeaderComponent></HeaderComponent>
            <main className='main'>
                <SongListComponent setActualSongId={setActualSongId}></SongListComponent>
                {actualSongId != null ? <SongComponent id={actualSongId}></SongComponent> : <div>Песня не выбрана</div>}
            </main>
        </div>
    );
}
