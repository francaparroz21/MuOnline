import HomeCard from "../HomeCard/HomeCard";
import "./HomeCardList.css"

const HomeCardList = () => {

    const card_list = [
        { routeImage: "./images/card_signup.png", route: "./signup" },
        { routeImage: "/images/card_download.png", route: "./download" },
        { routeImage: "/images/card_ranking.png", route: "./ranking" }
    ]

    return (
        <div className="home-card-list">
            {card_list.map((card)=>{
                    return (<HomeCard props={card}/>)
                })}
        </div>
    )
}

export default HomeCardList;