import React, {useState} from 'react';
import '../styles/components/header.css';

export function HeaderComponent() {
    const [language, setLanguage] = useState<string | null>("RU");

    return (
        <header className='header'>
            <div className='header__logo'>Songwriter</div>
            <div className='header__lang'>{language}</div>
        </header>
    );
}
