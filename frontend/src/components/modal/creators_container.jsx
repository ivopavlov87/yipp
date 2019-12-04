import React from "react";
import "./creators.css";

class Social extends React.Component {

    render() {
        return (
            <div className="social-container">
                <div className="social-list">
                    <a className="social-name" href="https://www.anisurkhan.com" target="_blank">Anisur Khan</a>
                    <br />
                    <a href="https://www.linkedin.com/in/anisur-khan-88a00182/" className="social-linkedin" target="_blank"></a>
                    <br />
                    <a href="https://github.com/AnisurK24" className="social-github" target="_blank"></a>
                </div>
                <div className="social-list">
                    <a className="social-name" href="https://www.ivopavlov.com" target="_blank">Ivo Pavlov</a>
                    <br />
                    <a href="https://www.linkedin.com/in/ivopavlov" className="social-linkedin" target="_blank"></a>
                    <br />
                    <a href="https://github.com/ivopavlov87" className="social-github" target="_blank"></a>
                </div>
                <div className="social-list">
                    <a className="social-name" href="https://www.kylemoonwright.com/" target="_blank">Kyle Moon-Wright</a>
                    <br />
                    <a href="https://www.linkedin.com/in/kyle-moon-wright/" className="social-linkedin" target="_blank"></a>
                    <br />
                    <a href="https://github.com/kmoonwright" className="social-github" target="_blank"></a>
                </div>
                <div className="social-list">
                    <a className="social-name" href="https://" target="_blank">Long McFarlin</a>
                    <br />
                    <a href="https://www.linkedin.com/in/long-mcfarlin-7bb60994/" className="social-linkedin" target="_blank"></a>
                    <br />
                    <a href="https://github.com/uwgnol1612" className="social-github" target="_blank"></a>
                </div>
            </div>
        );
    }
}

export default Social;