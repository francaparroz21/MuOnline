import "./Events.css"

const Events = () => {

    return (
        <div className="events-container">
            <h2 className="events-title">🌟 Eventos</h2>
            <ul className="events-list">
                <li className="event-item">
                    <span className="event-item-title">Blood castle</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li>
                <li className="event-item">
                    <span className="event-item-title">Chaos castle</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li><li className="event-item">
                    <span className="event-item-title">Devil square</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li><li className="event-item">
                    <span className="event-item-title">Invasión de Dorados</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li><li className="event-item">
                    <span className="event-item-title">Invasión de Red dragon</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li><li className="event-item">
                    <span className="event-item-title">Invasion White Wizard</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li><li className="event-item">
                    <span className="event-item-title">Invasion Skeleton</span>
                    <span className="event-item-count">🕓Inicia en: 00:00:00</span>
                </li>
            </ul>
        </div>
    )
}

export default Events;