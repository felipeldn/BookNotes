import React from 'react'
import '../App.css'

export const Home = () => (
    <div>
        <h2 className='heading-text'>Welcome to Book Notes!</h2>
        <div className='welcome-links'>
        <h5>Not sure where to begin?</h5>
        <br/>
        <a className='main-buttons' href='/search'>Search for Books here</a>
        <br/><br/><br/>
        <h5>Ready to record a reading experience?</h5>
        <br/>
        <a className='main-buttons' href='/books'>Add to your Book log</a>    
        </div>
    </div>
)