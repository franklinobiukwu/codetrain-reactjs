export default function Card({status, img, rate, reviewCount, country, title, price}){
    return(
        <div className="card--wrapper">
            <div className="card--status">{status}</div>
            <div className="card--image"><img src={`./images/${img}`} alt="swimmer"/></div>
            <div className="card--content">
                <div className="card--rank">
                    <div className="card--star">
                        <img src="./images/star.png" alt="star" />
                    </div>
                    <span className="card--score">{rate}</span>
                    <span className="card--score--fade"> ({reviewCount})・{country}</span>
                </div>
                <p>{title}</p>
                <div className="card--price">
                    <h3>From ${price}</h3>
                    <span>/ person</span>
                </div>
            </div>
        </div>
    )
}
