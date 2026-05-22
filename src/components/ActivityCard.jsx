export default function ActivityCard({
    backgroundIcon,
    activity,

}) {
    return(
        <div className="activityCard-container">
            <div className="activityCard-background">
                <span>
                    <img 
                    src={backgroundIcon}/>

                </span>

            </div>
            <div>
                <div>
                <p>{activity}</p>
                <span>
                    ...
                </span>

                </div>
                
            </div>

        </div>
    )
}