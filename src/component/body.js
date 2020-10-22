import React from 'react';
import test from '../logo/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import etty from '../logo/etty-fidele-6UWqw25wfLI-unsplash.jpg';
import player from '../logo/video-player.svg';

function Body() {
    return (
        <div className="body relative body-container">
            <div className="body-content">
                <h1>
                    Afrilearn comes with amazing features like:
                </h1>
                <div className="body-content--features">
                    <div className="col col-1">
                        <h2 className="col-title">Unlimited courses & student community</h2>
                        <p className="col-des">lorem ipsum content lorem ipsum content lorem ipsum content.</p>
                    </div>
                    <div className="col col-2">
                        <h2 className="col-title">Optimised for web and mobile</h2>
                        <p className="col-des">lorem ipsum content lorem ipsum content lorem ipsum content.</p>
                    </div>
                    <div className="col col-3">
                        <h2 className="col-title">Unlimited life time access</h2>
                        <p className="col-des">lorem ipsum content lorem ipsum content lorem ipsum content.</p>
                    </div>
                </div>
            </div>
            <div className="body-content--more">
                <h1>
                    Your personalized learning journey
                </h1>
                <div className="more-breakdown flex">
                    <div className="more-breakdown__journey">
                        <div className="col">
                            <h1 className="col-number">1<span className="dot">.</span></h1>
                            <h3 className="col-title">Start your account</h3>
                            <p className="col-des">lorem ipsum content lorem ipsum content lorem ipsum content</p>
                        </div>
                        <div className="col">
                            <h1 className="col-number">2<span className="dot">.</span></h1>
                            <h3 className="col-title">Lifetime access</h3>
                            <p className="col-des">lorem ipsum content lorem ipsum content lorem ipsum content</p>
                        </div>
                    </div>
                    <div className="more-breakdown__testimonial">
                        <img src={test}/>
                    </div>
                </div>
            </div>
            <div className="div-content--testimony flex">
                <div className="testimony-image relative">
                    <img src={etty} className="testimony-pic"/>
                    <div className="relative circle-play">
                        <img src={player} className="player-icon absolute"/>
                        <div className="circle-player"></div>
                    </div>
                </div>
                <div className="testimony-content">
                    <h1>
                        "I love that they keep their courses simple, you can learn as many 
                        courses as you want!"
                    </h1>
                    <p className="testimony-name">Robin Ellet</p>
                    <p className="testimony-location">London</p>
                    <a href="#" className="button sec-button added-border">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Body;