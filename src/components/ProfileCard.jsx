export default function ProfileCard({
    icon, 
    title,
    profileName,
    daily,
    weekly,
    monthly,
    setPeriod,
    period

}) {
    return(
        <div className="profile-container">
            <div className="profile-content">
            <img 
            src={icon}
            alt="Profile Icon"
            width={70}
            height={70}
            className="profile-icon"
            />
        
            <div className="profile-info">
            <p className="profile-title-text">{title}</p>
            <h1 className="profile-name-text">{profileName}</h1>

            </div>
 
            </div>
            <div className="profile-buttons">
            <button className={period === "daily" ? "active" : "button" } onClick={()=>setPeriod('daily')}>
                {daily}
            </button>
            <button className={period === "weekly" ? "active" : "button" } onClick={()=>setPeriod("weekly")}>
                {weekly}
            </button>
            <button className={period === "monthly" ? "active" : "button" } onClick={()=>setPeriod('monthly')}>
                {monthly}
            </button>
            </div>

        </div>

    )
}