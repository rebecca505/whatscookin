# <bold> Introducing... What's Cookin? </bold>

## What it does

What's Cookin' is an all-in-one dining hall recommendation tool and meal plan tracker. The main menu recommends dishes and the dining hall they are served at in real time based on dietary restrictions, favorite dishes, and favorite dining hall. Other components of the main menu include meal swipe and point balance and a list of currently open dining halls. The profile page is where the user can edit their preferences (favorite dishes, favorite dining halls, dietary restrictions), which the recommended dishes are based on.

## Inspiration

We identified three main issues that inspired us to create this all-in-one campus dining tracker. First, due to the distinct nature of each dining hall's website and menu, it is difficult for students to know all of the options available to them on campus, and which dining halls would best suit their dietary preferences and health needs. Secondly, the separation between Barnard and Columbia dining interfaces amplifies this problem, requiring students to jump through hoops simply to know what they can eat and when. Moreover, there is currently no easily accessible way for students to track their swipes and dining dollars, with Barnard students being unable to even see how many points they have left in the semester. If these features were centralized and personalized, the campus dining experience would be elevated.

## How we built it

Figma -- interactive UI mockup
- Decided on themes
- Decided on effective flow
- Formatted interface of each page
- [link to figma design]

Programmed in EJS to do web development, pulling in styles from Bootstrap. - Code can be seen in this Github Repo
- Broke our program into smaller, reusable components (ex: a navigation bar that was constant throughout).
- Built a clean UI with the implementation of multiple pages and a landing page with aesthetically pleasing access to What's Cookin's features.

Created algorithms in JavaScript to scrape various webpages, such as Columbia Dining.

Used the inspect feature on Chrome to analyze the patterns of CSS behind each website, which we then fed in through an algorithm to get the appropriate data.


## Challenges we ran into

At the time of coding, many dining halls were closed, making it hard to test our scraping. To combat this, we used the wayback machine to derive older menus from the various dining halls to test our algorithm. Because of a need for a precise environment for our Node.js app to work properly, some of our computers couldn't run everything properly due to storage limitations. This taught us how to divide and conquer and lean on the support of our teammates 

Overall, we communicated with each other, learned on the fly, and thought outside of the box to overcome these challenges.

## Accomplishments that we're proud of
We were able to use Bootstrap to create our first web application, tying JavaScript with HTML/CSS effectively

With the help of Puppeteer, we effectively scraped Columbia's Dining Website and Barnard's Dine on Campus Website to assess which dining halls are open in real time

By accessing and manipulating local storage, we were able to save user data across page transitions -- emblematic of how a user's data will be saved and linked to their account.


## What we learned
We learned how to create a web application using Node.js, and enhance our web development (HTML/CSS) skills with tools such as EJS and Bootstrap. In this process, we learned how to manage packages and environments with GitHub. We also learned about local storage.

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
