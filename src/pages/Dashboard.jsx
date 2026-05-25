import ProfileCard from '../components/ProfileCard'
import data from '../data/data.js'
import jeremyImage from '../assets/images/image-jeremy.png'
import { useState } from 'react';
import ActivityCard from '../components/ActivityCard';


export default function Dashboard() {
    const icon = jeremyImage 
    const profileName = "Jeremy Robson"
    const title = "Report for"
    const daily = "Daily"
    const weekly = "Weekly"
    const monthly = "Monthly" 
    const [period, setPeriod] = useState('daily');
  
    
    return(
        <div className='dashboard'>
            <ProfileCard
            icon={icon}
            profileName = {profileName}
            title={title}
            daily={daily}
            weekly={weekly}
            monthly={monthly}
            period={period}
            setPeriod = {setPeriod}
             />
             <div className='grid-container'>
             {data.map((item) => (
                 <ActivityCard 
                 key={item.title}
                 activity = {item.title}
                 current={item.timeframes[period].current}
                 previous={item.timeframes[period].previous}
                 backgroundIcon = {item.cardStyle.icon}
                 period ={period}
                 
                 />
                ))}

             </div>
                 
             

        </div>
          
    )
}