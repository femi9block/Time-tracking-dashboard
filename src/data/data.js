import workIcon from '../assets/images/icon-work.svg'
import studyIcon from '../assets/images/icon-study.svg'
import exerciseIcon from '../assets/images/icon-exercise.svg'
import playIcon from '../assets/images/icon-play.svg'
import selfCareIcon from '../assets/images/icon-self-care.svg'
import socialIcon from '../assets/images/icon-social.svg'
import ellipsis from '../assets/images/icon-ellipsis.svg'
  
const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          "current": 32,
          "previous": 36
        },
        monthly: {
          "current": 103,
          "previous": 128
        }
      },
      cardStyle:{
        bgColor: "coral",
        bgIcon: workIcon
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      },
      cardStyle: {
        bgColor:"skyBlue",
        bgIcon: playIcon
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      },
      cardStyle:{
        bgColor: "rose",
        bgIcon: studyIcon
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      },
      cardStyle:{
        bgColor: "emerald",
        bgIcon: exerciseIcon
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      },
      cardStyle:{
        bgColor: "violet",
        bgIcon: socialIcon
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      },
      cardStyle:{
        bgColor: "gold",
        bgIcon: selfCareIcon
      }
    }
  ]
  
  export default data

