import React from 'react'
import Photo from '../img/sidebar_photo.png'

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar d-flex col-12 col-md-4 flex-column">
            <figure>
                <img src={Photo} alt="not found" />
                <figcaption>
                    <strong>Breaking Bad</strong> is an American neo-Western crime drama television series created and produced by Vince Gilligan. It was set and filmed in Albuquerque, New Mexico, and tells the story of <strong>Walter White (Bryan Cranston)</strong>, an underemployed and depressed high school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime, by producing and distributing crystallized methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld.
                </figcaption>
            </figure>
        </div>
    )
}

export default Sidebar