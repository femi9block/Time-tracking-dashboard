import ProfileCard from '../components/ProfileCard'
import data from '../data/data.json'
import jeremyImage from '../assets/images/image-jeremy.png'
import { useState } from 'react';
export default function Dashboard() {
    const icon = jeremyImage
    const profileName = "Jeremy Robson"
    const title = "Report for"
    const daily = "Daily"
    const weekly = "Weekly"
    const monthly = "Monthly"  
    const [active, setActive] = useState(null); 
    return(
        <ProfileCard
        icon={icon}
        profileName = {profileName}
        title={title}
        daily={daily}
        weekly={weekly}
        monthly={monthly}
         />
          
    )
}