    import classnames from "https://cdn.skypack.dev/classnames";
    import isMobile from "https://cdn.skypack.dev/ismobilejs";
    import React from "react";
    import { logo } from "../../assets/images";


    function contactMe() {
    const buildUrl = (message) => {
        const system = isMobile().phone ? 'api' : 'web';
        const number = '8668054205';
        const url = `https://${system}.whatsapp.com/send?phone=+972${number}&text=${message}`;

        return url;
    };

    const msg = encodeURI('Hello! I would like to connect.');
    const href = buildUrl(msg);

    window.open(href);
    }

    const Chat = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const wrapperClassnames = classnames("chat-wrapper", { open: isVisible });
    const badgeClassnames = classnames("badge", { open: isVisible });
    const icon1Classnames = classnames("icon1", { open: isVisible });
    const icon2Classnames = classnames("icon2", { open: isVisible });
    const mnButnClassnames = classnames("main-button", { open: isVisible });
    
    const toggle = () => {
        setIsVisible(!isVisible)
    }

    return (
    
    <>
        <div className={wrapperClassnames}>
            <div className="header">
            <div className="content-wrapper">
                <div className="img-wrapper">
                    <img className="person-image" src={logo}/>
                </div>
                Krishva Designs
            </div>
            </div>
            <div class="center">
            <div className="message">
                <div className="title">
                Krishva Designs
                </div>
                <div className="message-content">
                Hi there 👋 <br/><br/>

                What are you up to?
                </div>
            </div>
            </div>
            <div className="footer-wts">
            <div className="wts-button" onClick={contactMe}>
                <img src="https://firebasestorage.googleapis.com/v0/b/codepen-13ec9.appspot.com/o/WhatsApp%20Logo.svg?alt=media&token=4a8f0a19-78ce-4456-99f1-a325ad398fb0"/>
                Start Chat
            </div>
            </div>
        </div>

        <button className={mnButnClassnames} onClick={toggle}>
            <div className={badgeClassnames}><span>0</span></div>
            <img className={icon1Classnames} src="https://firebasestorage.googleapis.com/v0/b/codepen-13ec9.appspot.com/o/WhatsApp%20Logo.svg?alt=media&token=4a8f0a19-78ce-4456-99f1-a325ad398fb0"/>
            <img className={icon2Classnames} src="https://firebasestorage.googleapis.com/v0/b/codepen-13ec9.appspot.com/o/close-white.svg?alt=media&token=c036208a-7c9b-49c2-8ea5-a21a0bae2d13"/>
        </button>
        </>
    );
    };


    export default Chat;