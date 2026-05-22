export default function ProfileCard({
    icon, 
    title,
    profileName,
    daily,
    weekly,
    monthly,
    onClick
}) {
    return(
        <div className="profile-container">
            <div className="profile-content">
                <span>
            <img 
            src={icon}
            alt="Profile Icon"
            width={70}
            height={70}
            className="profile-icon"/>
                </span>

            <p>{title}</p>
            <h1>{profileName}</h1>

            </div>
            <div className="profile-buttons">
            <button className="daily-button" onClick={onClick}>
                {daily}
            </button>
            <button className="weekly-button" onClick={onClick}>
                {weekly}
            </button>
            <button className="monthly-button" onClick={onClick}>
                {monthly}
            </button>
            </div>

        </div>

    )
}