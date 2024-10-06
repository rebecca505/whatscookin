# <bold> What is What's Cookin? </bold>

## Inspiration



## What it does



## How we built it

- figma -- interactive UI mockup
  - decided on themes
  - decided on effective flow
  - [link to figma design]
 
- Programmed in EJS to do web development, pulling in styles from Bootstrap. Code can be seen in Github Repo
     - Broke our program into smaller, reusable components (ex: a navigation bar that was constant throughout)
     - built a clean UI with the implementation of multiple pages and a landing page with aesthetically pleasing access to What's Cookin's features
 
- Created algorithms in JavaScript to scrape various webpages, such as Columbia Dining. Used the inspect feature on Chrome to analyze the patterns of CSS behind each website, which we then fed in through an algorithm to get the appropriate data. 

We first created an engaging UI mockup on Figma. We used various components and illustrations to show the layout and functionality of our final web app. You can find our Figma design here. After agreeing on our general layout and functions, we created a React-based website using the latest Next.js framework. We programmed in JavaScript, HTML, and CSS and pulled in data from .JSON files. All of our code can be seen on this GitHub repository. We used a combination of several different libraries to build a clean UI including MaterialUI and NextUI. We broke our program up into smaller, reusable components such as index.js (this was our landing/sign-up page), dashboard.js (this was the main dashboard where all classes are shown), and CourseButton.js (the single component representing a class). 

To integrate our AI-powered recommendation engine, we used the Cohere LLM and some prompt engineering. We passed in the classes that the user has taken along with the other class elective options to a prompt that asks the LLM to identify keywords in the classes taken and recommend classes from the remaining classes that are similar to the classes taken. This allows users to get personalized suggestions based on their interests.

## Challenges we ran into

- at the time of coding, many dining halls were closed, making it hard to test our scraping -- so we used the wayback machine
- because of a need for a precise environment for our Node.js app to work properly, some of our computers couldn't run everything properly due to storage limitations. This taught us how to divide and conquer and lean on the support of our teammates 

Overall, these challenges allowed us to grow, think outside of the box [idk say something smart here]

## Accomplishments that we're proud of
- we were able to use Bootstrap to create our first web application -- tie JS with HTML/CSS effectively
- Effectively scrape on Columbia's Dining Website and Barnard's Dine on Campus Website to assess which dining halls are open in real time


## What we learned
We learned how to create a web application using Node.js, and enhance our web development (HTML/CSS) skills with tools such as EJS and Bootstrap. In this process, we learned about how to manage packages and environments with GitHub. 

Moreover, we learned about the logistics of web-scraping and how to use Axios API to help us scrape in JavaScript. We then learned how to use Puppeteer to scrape websites more dynamically. 

## What's next for What's Cookin
[take from slides]

# <bold>Environment Set Up</bold>
brew install node
npm install ejs
npm i puppeteer
