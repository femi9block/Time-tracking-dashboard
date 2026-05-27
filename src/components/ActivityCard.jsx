
export default function ActivityCard({
    activity,
    current,
    bgIcon,
    previous,
    bgColor,
    period

}) {
    return(
        <div className={`activityCard-container ${bgColor}`}>
            <div className="activityCard-background">

                <span className="backgroundIcon">
                    <img 
                    src={bgIcon}
                    alt="activityCard Icon"
                    height={50}
                    width={50}/>

                </span>
            </div>
            <div className="activityData-Container">
                <div className="activityCard-heading">
                <p className="activity">{activity}</p>
                <span className="activity-more">
                    ...
                </span>
                </div>

                <div className="activityType">
                    <h2 className="currentTime-spent">{current}hrs</h2>
                    <p className="lastWeek-timeSpent">Last {period} - {previous}hrs</p>

                </div>
                </div>

            

                

        </div>
    )
}