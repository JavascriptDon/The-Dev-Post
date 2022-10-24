---
title: Setup your own Mock RESTful API fast with JSON Server
date: "2022-09-15T23:46:37.121Z"
description: "In this article, we'll use JSON Server, a node module that enables you to quickly develop an example REST API in 30 seconds."
---

In this article, we'll use JSON Server, a **Node Module** that enables you to quickly develop an example REST API in 30 seconds.

Refer to this website [here](https://nodejs.org/en/) to learn how to install Node.JS if you haven't already.

## Getting started

Start our new project by creating it in [visual studio code](https://visualstudio.microsoft.com/) with the file structure inside of your backend folder.

```
Mock API
 |- db.json
 |- server.js
 |- package.json
 |- package-lock.json
 |- node_modules
```

You can now add the following command below to install json-server with output on my machine.

```
// Install the JSON Server
npm install json-server
```

We must set the database as the router, construct the server, utilise the default middlewares for `server.js` port, and then listen. Running the start script will restore our previous functionality, but we now have much more flexibility.

```
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Set default middlewares + default router
server.use(middlewares);
server.use(router);

// listen to port
server.listen(port, () => {
    console.log(`JSON Server is running on ${port}`)
});

```

Create a database with some data for your `db.json` file.

```
{
    "quotes":[
        { "quote": "Kindness is the only service that will stand the storm of life and not wash out.", "author": "Abraham Lincoln"},
        { "quote": "Long Before being nerdy was cool, there was Leonard Nimoy", "author": "Barack Obama"},
        { "quote": "99% of failures come from people who make excuses.", "author": "George Washington"},
        { "quote": "Whenever you do a thing, act as if all the world were watching.", "author": "Thomas Jefferson"},
        { "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", "author": "John Quincy Adams"},
        { "quote": "The advancement and diffusion of knowledge is the only guardian of true liberty.", "author": "James Madison"},
        { "quote": "If tyranny and oppression come to this land it will be in the guise of fighting a foreign enemy.", "author": "James Madison"},
        { "quote": "A little flattery will support a man through great fatigue", "author": "James Monroe"},
        { "quote": "Try and fail, but don’t fail to try.", "author": "John Quincy Adams"},
        { "quote": "Any man worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly and without reservation that he is in error.", "author": "Andrew Jackson "},
        { "quote": "It is easier to do a job right than to explain why you didn't.", "author": "Martin Van Buren"},
        { "quote": "There is nothing more corrupting, nothing more destructive of the noblest and finest feelings of our nature, than the exercise of unlimited power.", "author": "William Henry Harrison"},
        { "quote": "It is not strange… to mistake change for progress", "author": "Millard Fillmore"},
        { "quote": "You don’t know what you can miss before you try.", "author": "Franklin Pierce"},
        { "quote": "Leave nothing for tomorrow which can be done today.", "author": "Abraham Lincoln"},
        { "quote": "I mean to make myself a man, and if I succeed in that, I shall succeed in everything else.", "author": "James Garfield"},
        { "quote": "Great lives never go out; they go on.", "author": "Benjamin Harrison"},
        { "quote": "It is hard to fail, but it is worse never to have tried to succeed.", "author": "Theodore Roosevelt"},
        { "quote": "Be patient and calm; no one can catch a fish with anger.", "author": "Herbert Hoover"},
        { "quote": "The only thing we have to fear is fear itself.", "author": "Franklin D. Roosevelt"},
        { "quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Dwight D. Eisenhower"},
        { "quote": "It's amazing what you can accomplish if you do not care who gets the credit.", "author": "Harry S. Truman"},
        { "quote": "Forgive your enemies, but never forget their names.", "author": "John F. Kennedy"},
        { "quote": "Testing oneself is best when done alone.", "author": "Jimmy Carter"},
        { "quote": "Efforts and courage are not enough without purpose and direction.", "author": "John F. Kennedy"},
        { "quote": "Live simply, love generously, care deeply, speak kindly, leave the rest to God.", "author": "Ronald Reagan"},
        { "quote": "I have opinions of my own, strong opinions, but I don't always agree with them.", "author": "George H.W. Bush"},
        { "quote": "We all do better when we work together. Our differences do matter, but our common humanity matters more.", "author": "Bill Clinton"},
        { "quote": "A dictatorship would be a heck of a lot easier, there's no question about it.", "author": "George W. Bush"},
        { "quote": "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress", "author": "Barack Obama"},
        { "quote": "When somebody challenges you, fight back. Be brutal, be tough.", "author": "Donald J Trump"},
        { "quote": "If I don't run for president, we'll all be OK.", "author": "Joe Biden"},
        { "quote": "Change will not come if we wait for some other person, or if we wait for some other time.", "author": "Barack Obama"}
    ]
}
```

## Run JSON Server

Open JSON Server, then launch your localhost database.

```
npx json-server --watch db.json
```

Requests can now be sent to `http://localhost:3000/quotes` and will return :

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ywteyhtuf9grn285wrt0.png" alt="mock-api" width="780" height="500"/>

## Heroku Deployment | 3 Step Deployment

1. Create an account on [heroku](https://heroku.com).

2. Install the Heroku CLI on your [computer](https://devcenter.heroku.com/articles/heroku-cli)

3. Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:

```
heroku login
```

Then start a remote Heroku project, which is similar to starting a GitHub git repository. With a random name, a project will be created on Heroku as a result. You must provide your own name, such as "Heroku create project-name," if you want to name your programme.

```
heroku create my-cool-project
```

Push your app to Heroku:

```
git push heroku master
```

Visit your newly created app by opening it via [heroku](https://famous-quotes-project.herokuapp.com/quotes):

```
heroku open
```

For debugging if something went wrong:

```
heroku logs --tail
```

[Check It Out! 🔥](https://famous-quotes-project.herokuapp.com/quotes)

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8rome1nu9gxasjguo7q3.png" alt="json-server" width="780" height="580" />

## Conclusion

Thank you for reading, and let's connect!

Feel free to subscribe to my [email newsletter](https://serene-ridge-36936.herokuapp.com/) and connect on [Twitter](https://twitter.com/legs_taken).
