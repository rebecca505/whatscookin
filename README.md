# <bold> What is What's Cookin? </bold>

## Inspiration

We identified three main issues that inspired us to create this all-in-one dining hall tracker. First, navigating to multiple different websites, especially since Barnard and Columbia dining are separate, to find the menus for each dining hall is a tedious process. Because dining hall hours differ on weekdays and weekends, it is also confusing to see what dining are open at a given time. Additionally, the balance for meal swipes and points on SSOL is difficult to find.

## What it does

What's Cookin' is an all-in-one dining hall recommendation tool and meal swipes/points tracker. The main menu recommends dishes and the dining hall they are served at in real time based on dietary restrictions, favorite dishes, and favorite dining hall. Other components of the main menu include meal swipe and point balance and a list of currently open dining halls. The profile page is where the user can edit their preferences (favorite dishes, favorite dining halls, dietary restrictions), which the recommended dishes are based on.

## How we built it

- Figma -- interactive UI mockup
  - Decided on themes
  - Decided on effective flow
  - Formatted interface of each page
  - [link to figma design]
 
- Programmed in EJS to do web development, pulling in styles from Bootstrap. Code can be seen in Github Repo
     - Broke our program into smaller, reusable components (ex: a navigation bar that was constant throughout)
     - Built a clean UI with the implementation of multiple pages and a landing page with aesthetically pleasing access to What's Cookin's features
 
- Created algorithms in JavaScript to scrape various webpages, such as Columbia Dining. Used the inspect feature on Chrome to analyze the patterns of CSS behind each website, which we then fed in through an algorithm to get the appropriate data. 


## Challenges we ran into

- At the time of coding, many dining halls were closed, making it hard to test our scraping -- so we used the wayback machine
- Because of a need for a precise environment for our Node.js app to work properly, some of our computers couldn't run everything properly due to storage limitations. This taught us how to divide and conquer and lean on the support of our teammates 

Overall, we communicated with each other, learned on the fly, and thought outside of the box to overcome these challenges.

## Accomplishments that we're proud of
- We were able to use Bootstrap to create our first web application -- tie JS with HTML/CSS effectively
- Effectively scrape on Columbia's Dining Website and Barnard's Dine on Campus Website to assess which dining halls are open in real time


## What we learned
We learned how to create a web application using Node.js, and enhance our web development (HTML/CSS) skills with tools such as EJS and Bootstrap. In this process, we learned how to manage packages and environments with GitHub. 

Moreover, we learned about the logistics of web scraping and how to use Axios API and Cheerio to help us scrape in JavaScript. We then learned how to use Puppeteer to scrape websites more dynamically. 

## What's next for What's Cookin
- Connect through SSOL to directly access remaining number of meal swipes/points
- Use LLM to provide a broader range of food recommendations
- Display upcoming dining events
- Add a dining buddy feature

# <bold>Environment Set Up</bold>
brew install node <br>
npm install ejs <br>
npm i puppeteer <br>
