
export default function ActivityCard({
    activity,
    current,
    backgroundIcon,
    previous

}) {
    return(
        <div className="activityCard-container">
            <div className="activityCard-background">
                <span className="backgroundIcon">
                    <img 
                    src={backgroundIcon}
                    alt="activityCard Icon"
                    height={50}
                    width={50}/>

                </span>

            </div>
            <div className="activityData-Container">
                <div className="activityCard-title">
                <p className="activity">{activity}</p>
                <span className="activity-more">
                    ...
                </span>
                </div>

                <div className="activityType">

                    <h2 className="currentTime-spent">{current}</h2>
                    <p className="lastWeek-timeSpent">Last Week -{previous}</p>
                </div>

                
            </div>

        </div>
    )
}