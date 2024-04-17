import ComunityCard from "../ComunityCard/ComunityCard";
import "./Footer.css"

const Footer = () => {

    const socialNetworks = [
        {
            title: "Facebook",
           // username: "@CocoMU",
            routeImage: "./images/facebook_icon.png",
            altImage: "facebook-logo",
        },
        {
            title: "Discord",
           // username: "@CocoMU",
            routeImage: "./images/discord_icon.png",
            altImage: "discord-logo",
        },
        {
            title: "Whatsapp",
           // username: "@CocoMU",
            routeImage: "./images/whatsapp_icon.png",
            altImage: "whatsapp-logo",
        },
        {
            title: "Youtube",
            //username: "@CocoMU",
            routeImage: "./images/youtube_icon.png",
            altImage: "youtube-logo",
        }
    ]

    return (
        <footer className="comunity-container">
            <div className="comunity-left">
                <h3 className="comunity-title">Unete a la comunidad</h3>
                <span className="comunity-networks-span">Encuentranos en nuestras redes sociales</span>
            </div>
            <div className="comunity-right">
                {socialNetworks.map((network)=>{
                    return (<ComunityCard props={network}/>)
                })}
            </div>
        </footer>
    )
}

export default Footer;