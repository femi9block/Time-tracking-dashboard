# Frontend Mentor - Time tracking dashboard solution

This is my solution to the Time Tracking Dashboard challenge on Frontend Mentor (https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).
The challenge focuses on building an interactive dashboard interface with responsive layouts and dynamic data updates using modern frontend technologies.

Frontend Mentor challenges provide practical opportunities to improve frontend development skills by building realistic projects from professional UI designs.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

### Desktop View
![Desktop view](./screenshots/time-tracker-dashboard-desktop.png)

### Mobile View
![Light View](./screenshots/time-tracker-dashboard-mobile.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- React
- Vite
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

One major concept I learned was dynamic property access using square bracket notation. Instead of writing multiple conditional statements for Daily, Weekly, and Monthly data, I used dynamic object access to render the selected timeframe efficiently.

```js
 {data.map((item) => (
                 <ActivityCard 
                 key={item.title}
                 activity = {item.title}
                 current={item.timeframes[period].current}
                 previous={item.timeframes[period].previous}
                 bgIcon = {item.cardStyle.bgIcon}
                 bgColor={item.cardStyle.bgColor}
                 period ={period}
                 
                 />
                ))}

             </div>
```
I also improved my understanding of:

- Reusable React components
- Mapping through arrays of objects
- State-driven UI updates using useState
- Passing data through props
- CSS positioning (relative and absolute)
- Grid layouts and properties such as grid-row: span
- Creating layered card layouts with overlapping elements

One particularly interesting challenge was building the stacked card design while maintaining proper spacing and responsiveness. 


### Continued development

Going forward, I would like to continue improving in the following areas:

- Advanced responsive design techniques
- Component reusability and architecture
- CSS positioning and layout systems
- State management patterns in React
- Accessibility best practices
- Cleaner and more scalable CSS organization


### Useful resources

- Frontend Mentor - For providing the challenge design and requirements
- React Documentation - Helpful for understanding component structure and state management
- MDN Web Docs - Useful reference for CSS and JavaScript concepts
ChatGPT - Assisted with debugging, layout explanations, and development guidance 

### AI Collaboration

During this project, I used ChatGPT as a learning and debugging assistant throughout the development process.

How I Used AI
- Debugging layout and positioning issues
- Understanding React props and state management
- Learning dynamic property access
- Improving CSS Grid and Flexbox layouts
- Troubleshooting component structure problems
- Improving project documentation and commit messages

What Worked Well
AI assistance was particularly helpful in:

- Explaining difficult CSS positioning behavior
- Understanding reusable component structures
- Simplifying complex layout issues
- Providing alternative approaches to solving UI problems

### Key Takeaway

Rather than copying solutions directly, I used AI primarily as a collaborative learning tool to better understand concepts and improve my problem-solving process.


## Author

- github - https://github.com/femi9block
- Frontend Mentor - (https://www.frontendmentor.io/profile/femi9block)
- Twitter - (https://www.twitter.com/johnifawoye)


## Acknowledgments
I thank God for the grace and strength to complete this project. The process came with several learning curves and moments of challenge, but it also became a valuable opportunity for growth and improvement in frontend development.

I am also grateful to the Frontend Mentor community and learning resources that continue to make practical frontend development more accessible. 

