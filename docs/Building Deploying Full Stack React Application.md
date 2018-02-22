# Welcome

## What you should know

###  Source

[Building Deploying Full Stack React Application](https://www.lynda.com/React-js-tutorials/Building-Deploying-Full-Stack-React-Application/)

### APIs

GraphQL Backend - [Graph.cool](https://www.graph.cool)

Usesr Authentication - [Auth0](https://auth0.com)

### Style Libraries

There are a lot of popular UI libraries that have been adapted for React. We're going to be using one called [Material UI](http://www.material-ui.com), which is based on Google's Material design specifications. There's also an adaptation of Twitter Bootstrap called [React Bootstrap](). I've seen others use [Elemental UI](), [Grommet](), and [Semantic UI]() to name a few. 



### Hosting

[Heroku]()

it now allows us to use the `create-react-app` buildpack for Heroku, which is publicly available [here](). 



### References

Create React App

Facebook's React Relay - [Relay](https://facebook.github.io/relay/)

Verify JSON Web Token - [ JWT.io](https://jwt.io)

JSON Web Token eBook - [JWT eBook](https://auth0.com/e-books/jwt-handbook?utm_source=jwtio&utm_medium=sc&utm_campaign=rotating_banner)

Auth0 Lock Library - [Docs](https://auth0.com/docs/libraries/lock/v10)

wire framing tools - **Adobe XD** for my wireframes, but I've also used **UXPin**, **Marvel App**, and **Balsamiq**.

complite es6 to standard javascript - **Babel**, **Webpack**, or **Grunt** 

# 1. Planning

## Design overview of the app

I came up with an idea for a site where users could log in and play simple games like tic tac toe against a mystery opponent who may or may not be a machine pretending to be a human. 

Our mindset for this course is getting to MVP, minimum viable product. That means we need to keep our eyes on the prize and pare way unnecessary complexity from our application. We need to watch out for feature creep. While we're planning our app, we're going to make sure our focus is on the application's core functionality and we're going to be wary of potential complexity that might make our application unnecessarily difficult to build. 

I want my users to be able to have an **authenticated login**, I want them to be able to **play against a simple bot**, I want them to be able to **guess if that opponent is human**, and I want to **store all this information** in a database. 

I also know that there's some ideas that I should save for later. For instance, even though I want authenticated login, I probably should save Facebook integration for another time. I also know that I need to save playing against a live person. Right now, writing a bot is going to be relatively simple. Getting our application to connect to a server that allows us to have player versus player could be a lot more difficult. I'm also going to save this leaderboard idea for later. I think having users interact with one another just like playing, could be a little bit too complex for our minimum viable product. Finally, I'm definitely going to wait on using a real machine learning API.



The first user story that I imagine is that of logging in. First the user can choose to create a new account or login. Next the user enters their username and password and presses login or signup. And finally, the user is navigated to the site's homepage. Let's take a look at what we want that to be like in practice. So here I am on my site. I press log in or sign up. I can create a new email, and great, I've been brought to the homepage. 

Let's check out another user story. The next user story I want to document is playing tic tac toe. First the user chooses to start a new game, then the user is connected with an opponent, next the user plays through a game of tic tac toe, and finally, when the game is over, the user gets to guess whether or not the opponent was a human or a robot. Let's imagine what that would look like. I start my game, I get to play against an opponent, and after I win or lose, I get to guess was my opponent human or robot. 

Finally, the last user story I want to document is viewing and editing one's profile. I imagine that first the user may navigate to their profile page from the menu, that the profile page displays the user's information, and a record of their last games, and that the user may edit their personal information. On my site, I want to be able to go to my profile page and see a record of my games. 

So these three user stories, logging in, playing tic tac toe, and viewing and editing one's profiles, are the user stories that are going to guide our development. We'll take these as a base for the way we want our users experience with the application to go. 

The next document we're going to create is our wireframes. Wireframes are visual, sometimes interactive representations of an application, which often focus less on the application's specific graphic design elements and instead emphasize the layout, features, functionality, and broader user experience. 

Let me show you an example of one wireframe I created for our homepage. Here you can see I don't focus too much on color or the specific texture of individual buttons, but instead focus on what the layout and general functionality of each of the tools are going to be. Here I gave another wireframe, imagine how I want my pull-out drawer to look, and then here also is a wireframe of how I thought our profile page could look. 

As you can see in my wireframe, I don't get into too much detail about what goes in the game records, I just put a box and say this is where the game records will go. 

If you're not a graphic designer, don't worry. That's not what wireframing's about. And you also don't need to be afraid to use a pen and paper. There are also a number of other tools available online, many of them free. I used **Adobe XD** for my wireframes, but I've also used **UXPin**, **Marvel App**, and **Balsamiq**. Go online and check out what works best for you. Now we have our user stories and wireframes to guide our development as we move forward. Remember, it's okay to change things. We don't need to use these as a strict rulebook. Instead, they should be our guiding documents. 

## Generating a starter project

Because we typically write React with additional JSX, or ES syntax, that aren't yet supported by all browsers, we need to compile our code with a tool like **Babel**, **Webpack**, or **Grunt** before most browsers can read it. 

Thankfully, a group of developers recognized all the hassle and confusion that were involved with configuring a React app from scratch. And so they came up with a command line tool, called fittingly, **Create React App.**

Create React App allows us to generate new, unopinionated React applications, with no build configurations. This means we won't be locked into any libraries we may not want to use. Furthermore, the tool has lots of community support, and there are many other tutorials that can show you how to modify the app to make use of other libraries, if you decide that you want to implement additional frameworks, such as Regex, or Bootstrap. 

Since we have Create React App installed globally with:

```bash

```

we can generate our project from the command line, with one command. To do that, I'm going to navigate to the directory where I'd like to save my app. I like to keep all my projects in a folder called code. 

@ code

```bash

```

When it says \"Happy hacking!\", I know that I've completed successfully. 

We can start it up with one simple command, `yarn start`.



Looking at the app we can see that we have this directory called public. This is where the index.html file, the one that's actually being served to our client, and also which is holding all of the bundled JavaScript code that makes up our application, is created. 

On line 16 between the title brackets, is where the title of our application is listed. Let's change that now, to TicTacTuring. 

We're going to get rid of the favicon that came with Create React App, and put in our own. I have it here called `logo.png`, and I'm going to make a duplicate of this, and just for simplicity sake, I'm going to rename it `favicon.ico`. And I'll drag it over here into our public folder, and now I have it here in our public directory. You can actually just use a png file as your favicon.

Inside the `src` directory, is the rest of our application. We could go through this and look at `App.css`, `App.js`, this is where the app is running from, and `App.test`. But actually what we're going to do right now, is go ahead and delete all of this. So I'm going to select all of these, except for `index.js`, and I'm just going to get rid of them. 

For our styling, we're going to be using something called styled components. And we're actually not going to be doing any testing during this course. Test-driven development is great, but we don't have time. Remember, we're trying to get to MVP. 

Let's open up now, our `index.js file`.  We don't have an `index.css` file, so we can get rid of line 4. And we don't have an `App.js` file, so we can get rid of that as well. 

Now stylistically, I like to do some things a little bit different, and I don't like to use semicolons the way they have them here in Create React App. So I'm just going to get rid of them on lines 1, line 2, and at the end of line 7. 

This actually won't affect the app, but I like to keep my styling consistent throughout. 

Next, we see here on `ReactDOM.render`, on line 5, we're bringing in `App.js`. Well we don't have any `App.js` anymore, so let's just make a placeholder. 

We'll create a pair of `div`s, and then we'll create an `h1` tag, and we'll just say "Hello world!", to test this out. 

I'm going to press apple-s to save our file, and we see that in the terminal, that Create React App updates it immediately. And then we can open in the browser, and we see all of our old application is gone, and our new one is here. Now that we know that our app is running, and we've gotten rid of unnecessary files, we can move on to creating our git repository.

 

## Creating a Git repository

Any time I start on a project I make sure to set up my version control right away. In this course, we're going to be using Git in the free remote version control management site, GitHub. Other options would be **Bitbucket**, and I know that some people like SVN and **Mercurial**. In my project directory I'm going to initialize my Git repository with the command `git init`. I can see here in my project tree that a `.git` directory has been created. Now I'm going to add my project with the command `git add .` and the period signifying everything in this directory, and then I'm going to make my first commit `git commit -m`, and I'm just going to give it the message "first commit". 

Next I need to go and make my remote repository so I can add that. I'm going to go onto GitHub, go to my profile and <u>create a new repository</u>. We'll name this tictacturing-instructional. Then we'll give it a short description. 

Now GitHub is going to give me a bunch of instructions on how I can create my repository but I actually know I just need this one command here. This is `git remote add origin`. 

Origin signifies the name of the repository I want to create, and this URL is the location of it. So, I can copy and paste this, go back to Atom and put it into the terminal and press enter. Now, when I check on the remotes that exist for my Git repository with the `git remote -v`, v for verbose. This gives me a print out of all my existing `remotes`. 

Good, I see the one that I wanted now exists. Finally, we're going to push to my new repository with the command `git push origin` signifying the one on GitHUb and the name of the branch I'm on, "master". And when I see that everything succeeded I know that my project is successfully backed up online. 

## Preparing for relay

As I mentioned earlier, we're going to be using Facebook's Relay library to handle the bulK of our application's data fetching needs. Relay is a really awesome framework that pairs well with React, and allows us to ensure that our views are correctly and efficiently retrieving new information, updating existing information, and handling new user requests. 

For Relay to run properly, our app needs to have access to our API's Relay schema. The Relay schema is a document which get generated by our API, and then informs our application about the kinds of models, data types, queries, and mutations that will be available to our application. 

We could create our own Relay enabled API with node, but it's going to be a whole lost faster to use **graph.cool**'s Relay API creation tools. 

If you don't have an account with graph.cool, go ahead and create one now. 

Here I am inside my console at graph.cool. I'm going to go to the sidebar, and I'm going to go to all projects. I'm going to press the plus button to **create a new project**. I have an opportunity here to name my project, and I'm going to name it TicTacTurng. 

Graph.cool automatically generates a couple of models for me, file and user. We'll be using the user model in this course, and we'll also be creating our own. 

If you want to poke around, check out the playground. This is an awesome opportunity to see what sort of queries and mutations are available to you inside the GraphQL schema. 

**Queries** are the requests we're going to be making to receive data where we get to specify what we want and how we want it formatted. 

**Mutations** are what we call whenever we make a change to the data, and in a mutation we can also ask how we want our response to the data to be formatted. 

Now, I'm going to go down to this tab here at the bottom called **endpoint**. I can find the API URLs that graph.cool has automatically generated for me. Here I can see that they've created a simple one. This is where you can make normal GraphQL requests. We're actually going to be using the **Relay API**. 

So, I'm going to make sure to select this. This URL right here, if I enter it into my browser, will actually bring me to a similar playground like I was using before, and it shows me what queries and mutations are available. 

This is the same URL we're going to be posting into our project that will allow our project to fetch the schema that automatically gets created by graph.cool. 

Now that we have the URL for our Relay API, we're going to start back where we left off here in the `index.js` file, and in our terminal. The first thing we're going to do is configure our application so that it can accept our new Relay URL. To do that, we're going to yarn run eject. 

```bash 
yarn eject
```



Eject is a command that's made available by create-react-app, which essentially moves us from being a create React app default configured project to our own special configurable project. 

Now that the eject is finished, I can see that I have a few new files here in my directory. I have the config file which specifies how I want webpack to work, and how it wants my testing to work, which I've already removed, and it also shows some of the scripts that are running behind the scenes. 

This is the start script, the build script, the test script. Next, let's add a Babel plugin to our dev dependencies which will automatically take care of our Relay schema fetching needs. 

```bash
yarn add -D babel-plugin-react-relay 
```



Now that babel plugin react relay is installed, we need to make a few changes to our webpack configuration to have it accept that. We're going to go into `webpackconfig.dev.js`. 



For those of you not familiar with webpack, it's the module bundler we're going to be using. It helps us transform our ES, our Babel script, into regular javascript, and also does some neat things behind the scenes. 

@ webpackconfig.dev.js

This is the file that's in charge of doing the module bundling here on our local computer when we're in our dev environment. I know that it has a line in it that's going to mess up the fetching of our Relay schema if we don't change it. 

I'm going to search, and I'm going to look for `cache`, and I see here where it says `cache-directory: true`. I'm just going to change this to `false`. 

If we don't change this, React is going to cache our Relay schema, and this is going to cause problems if we try and change the schema later. I'll save this, and close it. 







Next, we're going to go into our `package.json`, and we're going to change some of our Babel configuration. We'll scroll down to here to line 83 where we're handling our Babel configuration. Right now, we've got the preset react-app. We're also going to make sure we declare the plugin we just installed. 



```json
  "babel": {
    "plugins": [
      "react-relay"
    ],
    "presets": [
      "react-app"
    ]
  },
```





The final step to get things working will be to declare an environment variable in our start and build commands. This is where we make use of that API URL graph.cool generated for us. 

We're going to add an environment variable here, and also in our build commands. The name of our variable will be GRAPHQL_ENDPOINT, and we'll set it equal to the URL we copy and pasted earlier. 

We'll do the same during build, and now this means when we run the start or build command, GRAPHQL_ENDPOINT will be initialized as a variable at the start of our process. 





```json
"scripts": {
  "start": "GRAPHQL_ENDPOINT="YOUR_URL" node scripts/start.js",
  "build": "GRAPHQL_ENDPOINT="YOUR_URL" node scripts/build.js",
  "test": "node scripts/test.js --env=jsdom"
},
```



We can start our application now `yarn start`, and see that webpack is automatically fetching our Relay schema for us. We see in our console that it says GRAPHQL_ENDPOINT, and lists the URL that we had, and we also can see that our site is starting up as usual with no errors. 



Lastly @ `src`

```bash
mkdir config
```



I'm then going to create a new file, and I'm going to call it `endpoints.js`, and I'm going to create and export a variable called relayApi, and I'm going to paste in my URL. 



```javascript
export const relayApi = 'YOUR_URL';
```



This way I'll have this endpoint available to me inside of the rest of my project in case I need to use it in another call. 

## Setting up React Router

We wanted to have a **profile view** and a **game view**. Our application like many single page applications, is going to rely on routing, or the ability to read changes in the URL and use that information to inform the application about which views and data should be rendered to the page. 

Since we're building a single page application, we need to utilize a client-side routing library to help our application manage and consume information, stored in the browser's URL. For this we're going to use a popular library called React Router. 

React Router allows us to make use of URL information in our application all while writing very React-like code. Now we're going to install React Router. 

**React Router recently updated to version 4, we need to make sure we use version 3 because version 4 is no longer compatible with one of the other libraries we're going to use** 

Using Yarn, we would go Yarn add react-router, and then we specify the version after an `@` sign, the version we want is `3.0.2`, and then we can press enter.

```bash
yarn add react-router@~3.0.2
```



And now when we check our `package.json`, and look at our dependencies, we can see that we have the correct version of React Router installed. 

Next, we're going to begin by importing router and browser history from React Router, which we just installed. 

@ index.js

```javascript
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
```





We'll delete this placeholder, and we'll put in the router component, and close it on the next line. Router accepts a few different props. 

The first is `history`. For that we're going to be using browser history which we imported on line three. Browser history will allow our application to access our browser's history information, which means we can use nice, pretty URLs and we can use the back and forward buttons. (React Router provides us with other history options, like cache history, but I think this one is the most useful.) 

Next, we're going to pass the prop `routes` and we're going to give as an argument to routes the component which we'll also call routes but with it capitalized which signifies that this is a route component. 



```jsx
ReactDOM.render(
  <Router
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
    routes={Routes}
  />,
  document.getElementById('root')
)
```



Now this (`Routes`) doesn't exist yet, we haven't created it, but we're going to import it optimistically up here cause we're going to make it in just a second.

```jsx
import Routes from './routes'
```

 

Here `Routes` is the name of the component that I'm going to create that's going to hold my routes. This `./routes` signifies the directory that's going to hold that, and`index.js` will be the actual file that has the routes.  



Alright, now let's go ahead and make this routes component. Now here in my file tree, I'm going to create the folder routes.

```bash
mkdir routes
```



And I'm going to create a new file index.js.

@ routes

```bash
touch index.js
```



> You may have noticed that sometimes when I create a folder, I'll give the file its own name and sometimes I'll just name it `index.js`. If you're curious why I'm doing that, in JavaScript if you name a file `index.js`, that means you can refer to it actually just by its directory name. So now from now on, when I want to access the content of `index.js`, I can just say `./route`. 



I'm going to start by creating my routes. First I'm going to import React from react, I'll need this whenever I'm making components, and then I'm going to bring in two more pieces of functionality from react-router, I'm going to bring in Route and IndexRoute. 



@ ./routes/index.js

```jsx
import React from 'react'
import {Route, IndexRoute} from 'react-router'
```



I'll show you how these work in a second. 



Now I am going to declare a function that's going to return our routes, the const `createRoutes` is a variable that we'll be able to call later when we want to create these routes. 

 The first thing I'm going to do is create a root route that will hold all the other routes beneath it. To indicate that this is my root route, I'm going to put in the `path='/'`. 

Next I'm going to say that this is going to point towards a component.  (So, whenever I have a route, I can specify a path and I can specify a component. The component is the piece of JavaScript that will be told to run when we're at that route. )

I'm going to optimistically say `component={Template}`. This is the component that's going to run every time I'm beneath my root route path. 

Now we haven't created this component yet and we're going to make it in a second but I'm just going to refer to it now. 





```jsx
const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
    </Route>
  )
}
```





At the bottom of this file, I'm going to create the component named routes which you remember I imported in my `src/index.js` file.

 and I'm going to set routes equal to the component that gets returned by my create routes function. Let's see how that looks. Const, routes, equals create routes. So this routes is what I'm importing in my other file and create routes I'm invoking what I just made a few seconds ago. 

```jsx
const Routes = createRoutes()
```





Finally, at the end, I'm going to export default routes. 

```jsx
export default Routes
```



If you're not familiar how export works, `export default` means that this is the central module that's being exported from this file. So when you import this file elsewhere this default is what gets imported.  Your can also import other parts of the code that are not the default export `{Somecode, Somecode}`

Now if I tried to run my program right now it wouldn't work, and that's because I'm using a component `Template` which I haven't actually made yet. 

Make a new folder here in `src`. 

```bash
mkdir containers
```

In containers, I'm going to create the file that I just referenced, `template.js`. 

```bash
touch template.js
```

Here we need to make the react component that's going to render whenever we're on our root route. 

We'll start by importing 'react' and I'm also going to bring in 'component' because this is going to be a react component. Now we're going to initialize template, by saying `class template extends component`. We're going to use the render function, this is where we say what's going to be rendered to the dom. And we're going to begin to list our components beneath `return()`. 

We'll start by making a div and then we'll say we want a header and we'll put a title here too. This is the h1 and the header that's going to appear on all of my pages. So we'll put TicTacTuring there, and then we'll use the main tag and this is where we're going to hold the rest of our site, so this is where each of the individual pages will go. 

And that's why we're going to write` {this.props.children}`, because all of our child routes, all of the routes beneath our root route will go in here. 



```jsx
import React, {Component} from 'react'

class Template extends Component {

  render() {
    return (
        <div>
          <NavDrawer
           
          />
          <Header>
             TicTacTuring
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
    )
  }
}
```



Finally, at the end, I'm going to export template. 

```jsx
export default Template
```



> Remember, if you create something and you want to use it somewhere else, you have to remember to export it. 

Okay, let's go back to routes. 

@ `routes/index.js`

```jsx
import Template from '../containers/Template'
```



Now template should be available to create routes, routes should get created with this configuration, and when we go back to index in our source, we should be able to connect these routes. 

Let's start up our application and see how it works. 

We get an error. Okay and this is just warning us that we're using index route but it's not defined yet. That's okay, this isn't going to stop our application, this is just making sure that I don't import things that I don't need, but we're going to use that in a little bit so we don't need to worry about this now. 

Let's open up our web browser and see how things look. Awesome. When I inspect my elements, I see that I have the stuff that I created.





## Creating children routes

In the last video we created our root route, this one that holds the template. 

Now we need to make some of our children routes. I'm going to begin by using index route. Index route doesn't need to take a path because it assumes that it's going to be at the index or main route of its parent route. 

It does need to know what component it should render. We're going to say home, we haven't made this yet, but that's the component we're going to create. 

Next we'll make a normal route that will accept the path. We'll say profile. When we put into our browser url `/profile` this is where we'll be taken. And the component that will render, we'll specify as profile. 

```jsx
const createRoutes = () => {
    return (
        <Route
          path='/'
          component={Template}
          queries={ViewerQueries}
          auth={auth}
        >
          <IndexRoute
            component={Home}
          />
          <Route
            path='/profile'
            component={Profile}
            />
        </Route>
    )
}
```



As you can see here, they don't exist. We're getting an error. We can import them. 

```jsx
import TicTacToe from '../containers/Home';
import Profile from '../containers/Profile';
```



I'm still going to get an error because again these modules are not found because they don't exist, but that's okay, let's make them now. 



To make this a little faster, I'm going to open up template, I'm just going to use the duplicate function. Twice, once for Home and once for Profile.

Change all the instances of Template to Home.  This is not going to have a header or a main, this is actually going to go where the this, props, children is, so I'll delete all this. And just to indicate where I am as I test this, here on line eight I'll say h2, home, all right. Now I have my home component created.

```jsx
import React, {Component} from 'react'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home!</h2>
      </div>
    )
  }
}

export default Home
```



And for Profile:

```jsx
import React, {Component} from 'react'

class Profile extends Component {

  render() {
    return (
      <div>
        <h2>Profile!</h2>
      </div>
    )
  }
}

export default Profile
```



I'm not getting any errors which makes me think that my website is up and running. Let's check it out in the browser. And look, when I'm here on my route url, I have home showing. Let's test to see that profile shows up when I visit the profile url, there it is. 







## Implementing Material-UI

When we're trying to develop quickly, sometimes it's beneficial to make use of a UI styling library. A UI library is essentially a collection of components that we can plug into our application pre-build. Some of the benefits of this are that it saves development time, it allows us to focus on functionality, it often provides us responsiveness out of the box. That means a lot of these elements that we're getting from the UI library will automatically work both on mobile and on desktop versions. It gives us some common language to work with. You'll see later I'm going to talk about primary buttons, secondary buttons, floating action buttons, flat buttons. 

There are a lot of popular UI libraries that have been adapted for React. We're going to be using one called [Material UI](http://www.material-ui.com), which is based on Google's Material design specifications. There's also an adaptation of Twitter Bootstrap called [React Bootstrap](). I've seen others use [Elemental UI](), [Grommet](), and [Semantic UI]() to name a few. 

Let's go back to our files and start implementing Material-UI. 

```bash
yarn add material-ui
```

and this is telling my yarn package manager to add Material-UI to my dependencies. 

The next thing I need to add to my dependencies is a plugin called React-tap-event-plugin. This is just a dependency of Material-UI that's going to improve the user experience for some mobile events. Sometimes when you're on a mobile device, the tap events can seem sluggish if you don't have this plugin. 

```bash
yarn add react-tap-event-plugin
```



Great, our two dependencies installed successfully. Now let's import them into our Template file. Material-UI asks us to use a component named MuiThemeProvider. 

@ Template

```jsx
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
```



Now that we have this component, MuiThemeProvider, and the function injectTapEventPlugin imported into our file, we're going to run the TapEventPlugin just right here at the top, and then we're going to insert on line 11 the MuiThemeProvider, just as a wrapper for our entire application. 

```jsx
injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            Tic Tac Turing
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
```







Now this isn't going to change anything about the way our application looks right now. *It's just going to give us access to the Mui theme, the Material-UI theme, throughout the application*. 



I want to make sure that it's actually doing what it's supposed to do, that is, give me access to some of these cool Material-UI components. I'm going to navigate over here to the list of Material-UI components, and I'm just going to find one that I think might be useful just to test it out. 

We'll try a raised button. On the Material-UI website, you can find some good documentation about how each of these components work. OK, here's the directions about how to use a raised button. I'm going to copy and paste this. I'm going to navigate back to my template. I'm going to import it here on line four, and then I'm just going to put it in my header.





```jsx
class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTuring</h1>
            <RaisedButton
              label={'Test Button'}
              primary={true}
              onTouchTap={()=>{console.log('hello')}}
            />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}
```





I'll give it the prompt `onTouchTap` so we can see that it's actually clicking. I'll use an arrow function to tell it to just `console.log("hello")`.

All right, so now we see in our console that our application's restarting, adding our new updates. When we go back to the browser, we should be able to click on our raised button and see in the console "Hello". 

`onTouchTap` is the prompt that we pass to RaisedButton, which is going to give it functionality. So this is what's going to allow it to say, "hello", every time we click it. 

RaisedButton also wants to make sure that it has a label, that is, what's going to be written inside of the button. We'll pass that too. We'll say Test Button. This is the text that should appear inside our button. 

Now, when I visit the Material-UI specifications, I see that a lot of times it asks for a primary or secondary specification. That's going to control the color that are set in our themes. 

Let's try passing the primary to it, so that we can see it turn blue. 

Let's go to the browser and see if that's what happens.

 

## Deploying to Heroku

Heroku is a popular web service which allows us to deploy our site just by pushing our code up to a Heroku repository. 

If you're not familiar with Heroku, I encourage you to **create an account** and poke around a bit on the site. You should also make sure you have the **Heroku CLI tool** installed globally on your local machine. 

One of the neat things about us using `create-react-app` to build our starter project was that it now allows us to use the `create-react-app` buildpack for Heroku, which is publicly available [here](). 

A buildpack is essentially a piece of code that is going to tell Heroku how to compile, configure, and start the code that we deploy to our Heroku repository so that the code on Heroku runs like the code that we're running in our local dev environment. 

Before we can deploy from the command line however, we need to make sure we're logged-in. I'm going to navigate to my command line. We're going to type in the command `heroku login`. 

I'll put in my email. And my password. I have two-factor setup, so I'm going to enter that in now. 

And great. Now that we're logged into Heroku, we're going to create our app. 

The way we do that is we say `heroku create Your-App-Name` . 

A note here about Heroku app names and the Heroku CLI. **Heroku app names must be globally unique**, which means that your Heroku app must have a different name than everyone else's Heroku app. 

And then we're going to **give the URL of the buildpack** that we want to use. Let's navigate back to `mars/create-react-app buildpack`. And when I scroll down, I find right here the URL of the buildpack that we want. By entering this into our command, we're telling Heroku use this buildpack when you assemble my app. 

Alright, let's press enter. Cool. So we see now that our tic tac turing instructional app has been created on Heroku. 

The next thing we're going to do, is we're going to **set our graph QL endpoint variable to work on Heroku** as well. 

The way we do that is we say `heroku config set`, and then we just copy and paste the name of the variable and what we want it to be set to. 

Like so,

```bash
heroku config set GRAPHQL_ENDPOINT="Your-url" --appname
```



From now on, all we need to do to deploy is `git add` to add all of our files to our git repository. Commit them. We'll add the message our first Heroku commit. And then we just push them up to Heroku master. 

So, as you remember, when we're pushing to git hub, we pushed origin master. This case, we're going to push to Heroku master, Heroku being the name of the remote repository, master the name of the branch. 

Sometimes it takes a little while for us to upload our files to Heroku and then for Heroku to assemble them into a site. So, you might sit for a second while it works. 

Now that all that's finished, I should be able to look at my site up on Heroku by entering in the command `heroku open`.  This opens up a new tab in my browser, and I can see, look, here's my site. 



Now, there is one catch. When I do something like enter in slash profile, one of the routes that I should have available to me, I get this error. 404 not found ngenix. This is being caused by a problem with the way we're doing our routing. 

Essentially, the server and our routing library are fighting each other to interpret the URL. Thankfully, this isn't too difficult of a bug to fix. We just need to create a file called `static.json` in our route directory and paste in some information. 

```json
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```



I'm going to specify a few configuration options. Amongst them, is this one that says clean URLs false. I'm not going to go into what all of these parts do. You're only going to have to do it once, but if you're interested about where I found this, you can go to the `mars/create-react-app-buildpack` git hub page, where they give you some specifications, like how to provide HTTPS, or if you want a proxy to another server. 

I'll save this, and now I'll go through the process of deploying this to Heroku once again, just to make sure everything works. 



# 2. Deployment Environments

## Planning our development process

Alright, so we've made some great progress on our site. We've given our application instructions about how to get our APIs relay schema, we've implemented routing, a UI library, and finally set up a deployment process that allows us to get our code out to a production environment. 

Now the fun part, building the components that will make up the bulk of our application. 

Before we dive into the code, though, we should take a second to do a bit of planning. We should reflect back on our wireframe and think about what parts of the page should be made into independent components, and, more importantly, what parts of the page should be containers. 

We should also think which components will need to have access to remote data, which components will need to manage their own state, and finally, which components will want to have some kind of styling. 

We can imagine putting most of the parts of our app into three categories, **containers**, **components**, and **presentational** components. Now, these aren't hard or fast rules. Not every component will fall cleanly within container or component or presentational, but we have some guidelines to think about where each of them might go, and this will help us organize our application, and especially our file directory. 

Our **containers** will be connected to the store and they'll pass data to their children. In our case, that means they'll be connected to relay, and they'll have access to mutations, and they'll be specifying the queries that we're going to want to propagate down to our other components. 

Our actual **components**, well, they'll manage their own state. They probably won't be connected to the store, and they'll pass props down to presentational components. 

Finally, we have our presentational components. These will not manage state, they'll be stateless. And they will just change their styling based on props that are passed to them by their parents. 

As we put together our site in general, our workflow will go like this. 

- First, we'll plan out the components needed for a given container. 
- Then, we'll build out the components. 
- Then we'll create presentational components. 
- And then, finally, we'll hook the containers into our data store and write any mutations those containers might need to take. 






## Building a nav drawer



The first change I'm going to do, is I'm going to go into my template.js file, which I already have open, and I'm going to add this hypothetical Nav Drawer that I've yet to create. Now when I think about this component, Nav Drawer, I don't think that it's going to need access to any of our data. So that means we don't need to make it a container. It can just be a component. Let's create a folder called components. And then I'm going to make a file, we'll call it `NavDrawer.js`. I'm not going to go in there yet. 

First I'm going to import it, here in template.js on line five. Import, Nav Drawer from components/NavDrawer. 

```javascript
import NavDrawer from '../components/NavDrawer'
```



I'm going to scroll down to line 15 where I have my header and this raised button. I'm going to delete these because we're going to get rid of them. Also, here on line four, I'm going to delete where it says import raised button, because we're not going to use this anymore. Now here on line 14, I can just say Nav Drawer and close my brackets to indicate that I want to implement this here. 

```jsx
class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}
```



Okay, let's go into our Nav Drawer file and get to work creating it. First thing I'm going to do is import React and Component from React. Then, I'm going to get to work creating my new component. As you remember, the syntax for creating a new component is class Nav Drawer extends component. So I'm naming my component and saying that it's an extension of that class component. Then I'm invoking my render function and telling it to return the following components. Now I've spent a bit of time on the material-ui website, and I know the different components that I want to bring in from it. So I'm going to start doing that now. 

I'm going to import Drawer from material-ui/Drawer, and MenuItem and I'm going to bring in a divider. Just adds a nice bit of separating space. I bring this in from material-ui/divider. I'm also going to bring in a button, because I think I'm going to want a button that's going to toggle my drawer open and closed. This one's called floating action button and it's those nice round buttons. I import it from material-ui/floatingactionbutton. And then I'm also going to bring in an icon from material-ui's collection of icons. This one, in particular, is called menu, fittingly. And is the commonly used hamburger icon. 

Now, if you're saying, where are you getting these URLs, how are you knowing where to import this from? This is just from going through the documents, and seeing where material-ui asks you to import each of these individual components. We are going to be referring to this website once in a while, to know what sort of props need to be passed to each of these. 

Alright, let's start putting these onto the dom. First, let's add our floating action button. Then we're going to create, as a child for our floating action button, that menu icon. 





Beneath floating action button we'll create our drawer, and we'll add our menu items. Close the brackets. And I know that the menu item takes a prop called primary text. I think we'll name these Play. That will be our homepage, our root route, we're we play Tic Tac Turing. Now I'll copy and paste this so that we can add in our other route. We'll call this one Profile. We'll press save now and we'll add our two menu items, and we're still getting one warning. It looks like we haven't used our divider. 

Okay, we'll add that too just so we get some nice spacing. Now we're getting rid of all of our warnings. Let's check to see what our site looks like. 



```jsx
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
    state = {
      open: false
    }

    toggle = () => {
      this.setState((prevState, props) => {
        return {
          open: !prevState.open
        }
      })
    }

    render() {
      return (
        <div>
          <FloatingActionButton
            onTouchTap={this.toggle}
          >
            <Menu/>
          </FloatingActionButton>
          <Drawer
            open={this.state.open}
          >
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundColor: 'salmon'
              }}
            >
              LoginContainer
            </div>
            <Divider/>
            <MenuItem
              primaryText={'Play'}
            />
            <MenuItem
              primaryText={'Profile'}
            />
          </Drawer>
        </div>
      )
    }
}

export default NavDrawer

```



Cool, so we have our drawer, we have our two menu items. But it looks like the drawer is blocking our button and when I click on the buttons, nothing happens, and it looks like the drawer is stuck open. I can't open or close it. In the next video, we'll add that functionality. 





## Nav drawer functionality

Our nav drawer exists, but now we want to add some functionality. We want it to be able to open and close. 

Before I get to that though, I'm just going to quickly add in this log-in container, so I'm just going to make a quick filler div that will remind me it's supposed to go there.



I'm going to give it some inline styles just so I see it on the page. We'll say, height: 200px, width: 100%. That means it will fill its entire parent container, and then we'll give it a background color so that we remember it's there. I like salmon. And we'll just write in here LoginContainer. 

```jsx
<div
  style={{
    height: '200px',
    width: '100%',
    backgroundColor: 'salmon'
  }}
>
  LoginContainer
</div>
<Divider/>
```







We still have the problem that our component doesn't open or close. So when we visit Material-UI's website and look at the drawer, we see that we can pass an open prop to it, and this is the variable that Material-UI's drawer will look at to know whether it should be opened or closed. 

I'll pass the prop open, and then here after open, I'm going to set this to a part of state, so we'll say this.state.open. 

At the top of our component, I'm going to initialize the open part of state, so I'll say state =, and we'll say open, and we'll say true. 

Now I'm also saying that the open prop of drawer will be equal to the this.state.open. 

What this all amounts to is that I'm specifying at the beginning when my app is created, I want the drawer component to be open. Open is true. 

Let's make sure that that's still happening. When I refresh the page, I see that it is. 

If I want to check really quick to see if this is working, I could say false, and now when I visit my page, I should see that the drawer is closed. 

Now I visit my site, and I see that the drawer is closed. I think I want it to begin open, so I'll say true, but I still want the ability to toggle this by an open and closed, so here on line 13, I'm going to create a toggle function. We'll call this toggle, and I'll use the arrow functions to create a function. Then here within toggle, I'm just going to use this.setState to change open to true or false. 

Now you maybe have often seen this.setState written like this, open equals this.state.open, and this might work, but in the newest version of React, this isn't the best way to handle this. We're going to use a syntax that gives us access to previous state and or props. 

Let me show you how that works. We're going to initialize an arrow function, and we're going to enter in previous state, and props as arguments. We're going to call the arrow function, and in it, we're going to tell it what sort of new state to return. Now that we have access to previous state, we can say open should be set to the opposite of the Boolean prevState.open. So we want to say, if open was true, now make it false. If open was false, now make it true. Great, we'll save that, and now we need to pass this function as a prop to our button so that we can see when it actually works. Let's go to our floating action button here on line 24. We'll press enter, and on line 25, we'll say onTouchTap, so we're saying when you touch tap the floating action button, we're going to call this.toggle. We see in our console that our app updated. Let's test it to see if it works. Whoops, we're still covering up the toggle button. So let's set this to false, so that we can test things. All right, now when we press our button, it should open up the drawer. Great, it works. 

```jsx
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
    state = {
      open: false
    }

    toggle = () => {
      this.setState((prevState, props) => {
        return {
          open: !prevState.open
        }
      })
    }

    render() {
      return (
        <div>
          <FloatingActionButton
            onTouchTap={this.toggle}
          >
            <Menu/>
          </FloatingActionButton>
          <Drawer
            open={this.state.open}
          >
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundColor: 'salmon'
              }}
            >
              LoginContainer
            </div>
            <Divider/>
            <MenuItem
              primaryText={'Play'}
            />
            <MenuItem
              primaryText={'Profile'}
            />
          </Drawer>
        </div>
      )
    }
}

export default NavDrawer

```





Now we have a drawer that opens and closes, and we've got the elements inside of our drawer along with a button, but they don't yet link out to the different views the way I want them to. In the next video, we'll do that. "

## Nav drawer links

Okay, now our NavDrawer has some functionality. It can open and close, but these links that we had here in the drawer, they don't do anything and I think I'd like it for when I click on them, for them to also open or close the NavDrawer. 

So, @ NavDrawer.js, I'm going to import a component from router that I want to use. This is called link. 

```jsx
import {Link} from 'react-router'
```

Link is a prebuilt component that will make it easier for me to do internal links within my site. 

On line 44, I'm going to wrap my menu item with the link component. 

```jsx
<Link
  to={'/'}
>
  <MenuItem
    onTouchTap={this.toggle}
    primaryText={'Play'}
  />
</Link>
<Link
  to={'/profile'}
>
  <MenuItem
    onTouchTap={this.toggle}
    primaryText={'Profile'}
  />
</Link>
```







Now, to make these links functional, I need to specify a prop, which is going to tell it which URL to navigate to. Since play is on my root wrap, I'm actually just going to say slash and then here on line 52 for my profile menu item, I'm just going to pass at the prop to slash profile because that is the name of the route that I specified in my route index file. 





Alright, now I see in console that my app is updated. So, when I go to my site in the web browser, I expect for, once I open this and once I click on either one of these menu items, we should be redirected to the specified route. Let's click on profile and see what happens. Cool. I see that profile is now in my URL and if I click on play, I'm brought back to the original root route. 



There's one more piece of functionality I want to add to these buttons.



Right now, I don't have a way to close this drawer. So, I'm going to go back to my NavDrawer and on menu item, I'm going to add touch tap and I'm going to pass in the function I created earlier. It was toggle. This.toggle. So, this means that every time I press on my menu items, it's going to toggle open or close my drawer. Then, I'm going to do the same here on line 56. 

And this is going to allow me to toggle open the drawer when I click on the profile menu item. 



Let's check to make sure this works. Great. So, now my menu items are redirecting our URL and they're also closing the drawer when we click on them. 



I'm going to make one last tweak and here up at line 12, I'm going to start my NavDrawer as open true. So, this way, when I open up the app, my drawer is automatically going to be open. Alright, let's check things out. Great. It starts open. 

These close and navigate. Now, I still definitely have some styling problems. I don't like that my home is beneath my drawer and there's something strange going on with these play and profile menu items. They have a purple line beneath them. I'm not quite sure why that's doing that. In the next video, we're going to learn how we can style each of our components, so that everything looks the way we want. 

```jsx
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import {Link} from 'react-router'


class NavDrawer extends Component {
    state = {
      open: false
    }

    toggle = () => {
      this.setState((prevState, props) => {
        return {
          open: !prevState.open
        }
      })
    }

    render() {
      return (
        <div>
          <FloatingActionButton
            onTouchTap={this.toggle}
          >
            <Menu/>
          </FloatingActionButton>
          <Drawer
            open={this.state.open}
          >
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundColor: 'salmon'
              }}
            >
              LoginContainer
            </div>
            <Divider/>
            <Link
              to={'/'}
            >
              <MenuItem
                onTouchTap={this.toggle}
                primaryText={'Play'}
              />
            </Link>
            <Link
              to={'/profile'}
            >
              <MenuItem
                onTouchTap={this.toggle}
                primaryText={'Profile'}
              />
            </Link>
          </Drawer>
        </div>
      )
    }
}

export default NavDrawer

```







## Presentational components

In this video, we're going to be making use of the library styled components to add a bit of style to our components. The first thing we're going to do is shut down our server and use yarn add styled-components to bring in this library. 



Now that styled-components has been added to our dependencies, we can access this in a new file. Let's think about the file we want to create though. 

So, I had a problem on my webpage. I don't like that my FloatingActionButton actually isn't floating, it's beneath the Drawer. We can change that by deleting this here on line 26 through 30, actually I'm going to cut it with Up+L+X and I'm going to import a new component I've yet to create. We'll call this NavToggleButton and we'll close it and I want to make sure that I still pass my toggle prop to it and then as I think about this more, I think the styling is going to want to know the width of the Drawer, so right now, I'm not specifying a width of the Drawer, but that is an option that's available to me. 

So, I'm going to say the NavToggleButton needs to know about the width of the Drawer, which I'll initialize in state and I think the Drawer's going to need that too. 

```jsx
<NavToggleButton
  toggle={this.toggle}
  width={this.state.width}
/>
```





So, now that I've passed width as a prop to both this yet to be created NavToggleButton and the Drawer, I should make sure I go up and initialize it at the top on line 13, beneath state. This is in pixels, so we can just say 250. 



```jsx
state = {
  open: true,
  width: 250
}
```





The next thing we're going to do is import this soon to be created from the place where we're going to create it. Since this is going to be a style component, it's not going to have state, it's just purely going to work off the props that it's given. We're going to create a new directory in a second called styled, and we'll name this NavDrawer. 

Now, you'll notice here actually that I'm going to wrap NavToggleButton in brackets. That means it's one of several components I'm going to export from this file that I'm going to create called NavDrawer. I'm going to create this file, NavDrawer underneath the directory style as a place where I can hold all of the style components that I'll make use of here in the actual component NavDrawer. 

```jsx
import {NavToggleButton} from '../styled/NavDrawer'
```





Let's create the directory now in our file tree. Under source, I'm going to create a new directory called style and then beneath style, I'm going to make this file that I specified called NavDrawer.js. I'm also going to start up my server now, so that as I make these changes, I can see them reflected on the page. OK, I'm getting an error here and it says that the module is not found, styled/NavDrawer. 

This is occurring for two reasons. One, we forgot to add the two periods at the beginning, so we weren't looking in the right directory. We're also still going to get a warning, because now we've taken out FloatingActionButton and menu, but they're not actually being utilized on this page. So to save us some time, we can actually just cut and paste from line five and six, the FloatingActionButton and the menu icon, and move them over to our NavDrawer, 'cause we're going to be making use of them here. 

Up at the very top on line one, I'm going to make sure I bring in React and then I also want to bring in this new styled-components library, that we installed earlier and I'm going to bring it in as styled. 

@ styled/NavDrawer

```jsx
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
```







Now let's create this component that I called NavToggleButton, remembering to export it, export const NavToggleButton equals, I'll use the arrow function and I'll tell it to return the FloatingActionButton, that we imported on line three and the menu icon, that we imported on line four. When I set up my console, I see that I'm getting a warning that style is defined, but never used. That's OK, I just haven't used it yet. Let's make sure that my newly-created NavToggleButton is being rendered to the page. When I look over here in the Elements, I can see that yes, my NavToggleButton is being created, it's just being covered up by my Drawer. Alright, now let's create our first styled component. Let's think about what we want. Well, we want our FloatingActionButton to be floating the width of the Drawer, over to the right, so that it's not covered up. 

```jsx
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

export const NavToggleButton = () => {
	return (

		<FloatingActionButton>
			<Menu/>
		</FloatingActionButton>
	)
}
```





## Using styled-components



In our last video, we added styled components to our list of dependencies, and we also created this nav toggle button in our style directory. Then we brought it in on our nav drawer. Now, we're going to make sure the nav toggle button stays to the right of the drawer by adding an actual styled component. 



The way I create a styled component is by first creating a variable and naming it, I'm going to call this one stay visible, and then I set it equal to styled div, and then begin a template literal. 

```jsx
const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`
```





So let's break down what just happened here. When I said styled, I'm calling upon the styled components library, and when I said div, I was indicating which type of html element I wanted styled to create. These two tick marks here indicate that I'm about to begin a template literal. A template literal is a special kind of strain that allows me to insert JavaScript into it. We'll show you how we do that. Inside this template literal, I get to write normal CSS, that's the cool part about styled components. 

Since I want this element, stay visible, to wrap my floating action button, and keep it to the right of my drawer, I'm going to set it to position, absolute, and then I'm going to give it a margin left, and I'm going to pause here, I know that I want my margin left to be the width of the drawer, unless the drawer's collapsed, in which case I want it to be zero. 



So I'm probably going to need to use some JavaScript there, I'm going to pause for just a second and we're going to get back to that. I know I'm also going to want to add transition CSS to this element, because I know that I want the stay visible div that's wrapping the floating action button to move in a nice even way, along with the drawer as it opens and closes. 

We'll say margin, that's the aspect of the CSS that we want to transition, and I'm going to say .2s, which means point two seconds, that's how long I want the transition to last. Okay, now here in margin left, I get to do this cool thing where I use the bling, and the brackets to say, alright, now it's time to start writing code. Since stay visible is actually a component, I can pass it props. Now within this bracket, I'm going to make a ternary operator. If you're not familiar with the ternary operator, know that ternary means three, and it essentially allows us to evaluate a true or false statement, and then choose between one or two options, so the three stands for the three different parts of the ternary operator, the first part, a Boolean, which will evaluate the second part, what we want to do if the Boolean is true, and the third part, what we want to do if the Boolean is false. In this case, we're going to look at the props open, which we'll be passing along to stay visible, this will tell us whether or not the drawer is open. And then we use the question mark to say, alright, if props is open, if it's true, then we're going to use another template literal to say, make the margin left equal to props.width pixel, so we're going to pass along the width of the drawer and we're going to set that equal to the margin left, if our drawer is open. That's what we do if props set open is true. If props set open is false, well, we're just going to say none, we don't want any margin left. 



So now that we've come up with this expression to evaluate what to do with margin left, we need to make sure one, that we're adding margin left to our nav toggle button, and then two, that we're passing it along the props that it needs. Let's go down to line 14. Here we're going to input stay visible, and then we're going to close the brackets, and then I'm going to copy and paste floating action button and menu, here onto line 15. Now stay visible wraps floating action button and menu. 



I can't forget to do one more thing, stay visible is looking at these props, I need to make sure that I pass these props to stay visible, so in my expert const nav toggle button here on line 12, I'm going to make sure that it has access to props, and then on stay visible, I'm going to insert here on line 15, the ellipses and then props. 

This is an easy way to instead of retyping each individual props, so for instance, if I wanted to make sure that stay visible had access to open and width, I could say, open equals props.open, and width equals props.width. This would be one way to make sure that stay visible has access to these props, but if I want to write this in a more concise way, I can simply put in, ellipses props, and that accomplishes the same thing. Now I'm going to save my file, and I'm going to watch to make sure that everything loads correctly. 



Cool, here I see my nav toggle button, floating to the right of my drawer, and when I press it, huh, the nav toggle button is to the right of the drawer the way we want, but when I click it, it's not actually toggling. Now I remember that in nav drawer, here beneath nav toggle button, I didn't pass these props to floating action button. I need to make sure floating action button has access to the toggle function. This is a simple solution. Here on line 18, we're going to make use of the on Touchtap-event listener, so when users touch on the floating action button, we want something to happen, and then we're going to make use of the toggle function. I see that my app just updated, let's test to make sure things are working okay. 





```jsx
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`

export const NavToggleButton = (props) => {
	return (
		<StayVisible
			{...props}
		>
			<FloatingActionButton
				onTouchTap={props.toggle}
			>
				<Menu/>
			</FloatingActionButton>
		</StayVisible>
	)
}
```





Great. Now my toggle button floats to the right of the drawer, and opens and closes it as I intended. 

## Styling for mobile

In our last video, we modified our nav toggle button so that it would float to the right of our drawer, but we still have this problem. Our main component is kind of jammed here over to the left, and we don't have a header for our site anymore. We took that out. So let's add those, too. We also, if we look online, can see that things aren't really mobile friendly. 



Luckily, material UI makes things mobile friendly, but again, because things are jammed over here they wouldn't look great if we used this on a mobile device, so we're going to do that, too. 

Let's navigate back over to Atom. We can close NavDrawer styled, and we can close NavDrawer components. We're not going to be using those in this section. Let's open up now Template.js in containers and think about where we're going to be adding our new styled components. 



We're going to be getting rid of main, and then we're going to be adding a header to the top. I'm going to optimistically add those now. I'm just going to put them here and then we're going to make them in a second. 



So this is going to be the header. Notice I'm using a capital H so that it knows that this is a React component and not the traditional HTML header element. I'm also going to get rid of, here on Line 16, our traditional main and make a new main, capitalized. 

Alright, we'll probably get an error here because they don't exist, so we need to make sure we import them at the top. On Line 5 I'll say import {Header, Main} from, we're going to make a new file under styled called Template. 

Notice here the naming convention I'm using. When I'm putting styled components in Template I'm making a styled file called Template, and when I'm putting styled components in NavDrawer I'm putting a styled file called NavDrawer. 

This can be a little confusing at first when you see all these files with the same name, but actually it'll help you later keep track of where different styled components are going. 

So here I'm going to write styled, it'll be in a styled directory, and then I'm going to say Template. I can save this. Now that I've imported these at the top, I'm remembering one thing about Header. 

Instead of making it a closed bracket like this, I think for simplicity sake I want to make it an open bracket that closes beneath it, and we'll just write TicTacTuring here inside of it. 

Now, let's go ahead and make the file beneath styled that'll hold all of our styled Template components. I'm going to go to my file tree, and under styled I'm going to say Template.js, and now here is where I get to create Header and Main. 

First, I'm going to import React from 'react'. Now, on Line 2 I'm going to import styled from 'styled-components'. And the way I create a styled component is I'm going to initialize a variable remembering to export it. I'm going to call it Header, because that's what I plan on importing in my Template container. 

And then I'm going to set it equal to styled.header, so I'm making use of a styled library, and I'm saying I want this header to be a header element. Notice the lowercase h here and the uppercase H there. 

Then I'm going to begin a template literal. Now here beneath Header I can just write normal CSS. Since I want my Header to be floating in the middle of the page, I can say text-align: center. And since this is the header I want this it be a slightly larger text, so I'll say font-size: 2em. And then I want my header to have the same font styling as the rest of my page. I know that material UI uses the font-family Roboto, and then I'm going to give directions about a backup font. We'll say sans-serif. 







Next, I need to make sure that I create the Main component, but instead of making this a styled component, I'm going to make it a simple stateless component. I'll show you what that means. We use the arrow function, and we tell this to return a styled component that we'll create in just a second called Container, and then within it we'll say this is where your children should go. 



Here on Line 10 we're going to pass props in through our arrow function to make sure we have access to them, and now we should make the Container that we specify here on Line 12 and 14. This time, we're going to use a normal, styled component. We'll say export const Container, and we'll just say that this is a styled div. We'll begin our template literal. And to make sure that our container is floating in the middle of the page we'll say display: flex, and then we're going to specify the direction that we want the content in our flex container to go. So we'll say flex-direction: column. Now we can say how we want the items to be aligned. We can specify the margin. We want it to be auto so that they'll be centered automatically. And we can specify the width of our Container. We'll say 80%. And we'll also give this a minimum height of 80vh, which means 80% of the viewer height, so 80% of the screen. Alright, let's save things and see how they look. Now, when I visit my site I see that I have my main div, it's centered, and I have my header, the text is in the middle of the page. Awesome, cool. So now we have our Container centered in the middle, but I know this width of 80% won't look the way I want on a mobile device. We want to make things responsive. I'm going to show you how we can add a piece of utility to our site that will allow us to add mobile responsiveness to our styling quickly. I'm going to add a new directory under src, and I'm going to call this utils. And in utils I'm going to make a new file called media. This is where I'm going to specify how I want my media styles. Now I'm going to import {css} from 'styled-components', import {css} from 'styled-components' allows us to make use of media queries. Then I'm going to create and export a variable called media, I'm going to make it an object, and I'm going to say handheld. This is where I'm going to specify what defines a handheld viewer. I'm going to use the destruction assignment to take the arguments that are provided through CSS, this is what I'm importing from styled-components, and then I'm going to begin a CSS media query. And I'm going to say, if the viewer width is smaller than 800, so if the max-width is 800, then we're going to use our handheld CSS. I'm going to inject some code, and I'm going to pass in those arguments. Alright, now that we have this object, in our Template styled folder I can import this at the top on Line 3. I'll do two periods to get me back to my root directory. I'll say utils, and then I'll say media, and then in my Container styled component to give it access to the media.handheld I'll just say ${media.handheld, begin a template literal, end it, and now, all the styling that I write here on Line 19 and below will be applied only when we're using a handheld device. So I'm going to say, I want the width to be 100%, not 80%. So I'm saying when we're using a handheld device, overwrite this width of 80% and instead use width 100%. I can save this. Go to my browser. Things look normal. I still have the 80% width when I'm here on my browser using the desktop version, but if I use my Inspector tool to switch us over to a mobile device and then inspect the element, I can see now that is has a width of 100%. Great, now we've got a responsive component. 





@ Template.js

```jsx
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <Header>
            TicTacTuring
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template

```



and @ styled/Template.js

```jsx
import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'

export const Header = styled.header`
	text-align: center;
	font-size: 2em;
	font-family: 'Roboto', sans-serif;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: 80%;
	min-height: 80vh;
	${media.handheld`
		width: 100%;
	`}
`

export const Main = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
}

```









# 3. App Functionality

## Canvas setup

Now that we have our template style, and we've got our Nav drawer, we can start to make the functionality of our site in the Tic Tac Toe game. And I'm going to open up a few files that I have right now, just to rename them to something that I think makes a bit more sense. Instead of Home, let's call this TicTacToe, so I'll change the name on line three, and on line 14, and then I need to make sure I also change this in my routes to TicTacToe on line four, and then again on line 14. And then I need to make sure in my File Tree I also change the actual name of the file. This may seem like a small thing but as I move forward, it's important that my files be named after what they actually are. And so even though before this was the Home route, I think I want to make sure that we think of this in our programming as the TicTacToe route. 



Now that I have my TicTacToe component, instead of just jumping in and coding, I'm going to start to plan the different parts that I'm going to want in here. I know that I'm going to want to initialize state. I know I'm probably going to want to make use of the component WillMount lifecycle function, 

if you're not familiar with this, in React we can component WillMount and this will say, every time my component is created, every time it will be mounted to the dom, do the stuff that's in these brackets. So, when my component mounts. 

And then I need to think about what else I need to have in my component. I know I'm probably going to want a function move, for when users make a move. 



I know I probably will want a function for when the AI makes a move. So I'll make this here. 



And these are sort of just placeholders, so that I remember to write these later. I also am going to want a function that will administer the Turing Test to my user once they finish with the game. 



And I'm going to want a function that allows me to record the game when I'm finished. Then finally here, beneath the Render function, there's a number of items I'm going to need to make sure are being rendered to my dom. 

First, I'm going to want to make sure, I'm going to wrap these in brackets so that they don't actually work. This is how you comment something out when you're using a JSX file. 

We'll say this is the Board component and then we'll also say that we're going to want a Squares component. So the Board component will be in charge of building the board and the Squares will be in charge of making each of the individual squares. 



Alright, I think I have things sketched out. 



But I know that I'm going to want some cool graphical interactions for my game. I'm not going to want this just to be simple divs with text Xs and text Os. I want to be able to make sure I have lines and rectangles, so I'm going to make use of a Canvas Library. 

There are a couple of good **Canvas Libraries** available in React. One simple one is called **React Konva**. I'm going to add that to my dependencies now. I'm going to shut down my server, and I'm going to say yarn add react konva. And then I know that Konva is also a dependency of React Konva, so this is the original library and then this is the React version of the library. 



Now that I have Konva added to my dependencies, I can import it up here. I'm not just going to import Konva, I'm actually going to take in some of the components that it gives me. The only one I need right now is called Stage. 

Stage is the base level of the Canvas you're going to be generating with React Konva. It's the only one we need in this file. 

And then here, in line 33, I'm going to add Stage to my render function, and I know that my board and squares will each go with inside of it. 



Now the last thing that I'll do in this video is come up with some of the numbers that I know that I'm going to need to calculate the size of my React Canvas, the size of the squares, and I'm going to specify those in state and component WillMount. 

For instance, I know that Stage here in line 33, needs to have a width and a height prop pass to it. It wants these in pixels. So I need to calculate that up here in component WillMount. 

When I think about the CSS that I used earlier to style my main component, I made it 80 percent of the width of the viewer. We're going to create two variables: Height and Width. Let's first start with height. I'll type in, let height equal window. innerHeight. 

So, when I say window.innerHeight, I'm accessing the browser's window capabilities, and I'm looking at the inner height, so the size of the person's browser, vertically. 

Then I'm going to do the same thing with width. I'm going to access the innerWidth of our user's browser. Since I know that a Tic Tac Toe board is square, I don't actually need height and width, I just need one size variable, and since I want to make sure that the whole board fits on the screen, I'm going to use the smaller one. 

To do that, I'm going to use another ternary operator. I'm going to say if height is less than width, so I evaluate this statement, if height is less than width is true then, set size equal to height times .8 otherwise set size equal to width times .8. 

To summarize what we just did here, I'm saying set this variable size to the smaller of height or width and then multiply it times .8. 

I'm going to create a variable called Rows, because I know that my board's going to want to know how many rows and columns there are. Again, since my Tic Tac Toe board is square, since the number of rows and columns is going to be the same, I can just use one variable. I'm going to set rows equal to a state variable of rows, which I'll specify also up here. We'll say rows three. So that means we want to have three rows and three columns. 

Next, I want to create a variable called unit, and I'm going to make this equal to size divided by rows. 

So I made a mistake here, there. I imagine this unit is going to be useful. 

This is going to be the size of each of one of the squares. So we can think of this in terms of our board, it's basically built out of little blocks that are each one unit big. The way that we find the width or height of one of those units is, we take our size, which we calculated using the browser's inner height or inner width, and we divided by the number of rows. 



Finally, I'm going to take these variables that I created, and I'm going to add them to State. This will happen when my component mats, and we'll say: this.setState we'll say size, rows, and units. This means that when my components mount we're going to have size, rows, and units added as variables to State. 



Real quickly, I just want to draw attention to a piece of syntax I'm using. This is called the Object Initializer Shorthand. So when I use setState, State is of course an object. You might have expected me to do something like this: Size will be size, rows will be rows, and units will be units. But because of EOS 6, we actually have this cool way, it's much more concise, where we can just say set size equal to size. We know that size is going to be the key and the value that size hold is going to be the property and the same for rows and units, 



@ containers/TicTacToe.js

```jsx
import React, {Component} from 'react'
import {Stage} from 'react-konva'

class TicTacToe extends Component {

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      unit
    })
  }

  move = () => {
    //placeholder
  }

  makeAiMove = () => {
    //placeholder
  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {
      size
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          {/* <Board/>*/}
          {/*<Squares/>*/}
        </Stage>
      </div>
    )
  }
}

export default TicTacToe

```











## Building boards



Now that we have the stage part of our canvas rendering and we've calculated some of the values we're going to need to make the board, let's go ahead and make the board. I'm going to scroll down to the board and I'm going to uncomment it. 

@ containers/TicTacToe.js

...



And then at the top I'm going to optimistically import it from the file I'm about to create. We'll import board from, we'll say that we're going to make this in style because when I think about this, I don't think that board needs to have any access to state. So it doesn't need to be a full on component, and it definitely doesn't need to be connected to data, so it doesn't need to be a container. So we'll go in styled and we'll make a file called tic tac toe, continuing with the naming convention we've been using. 





I'll save this, and then in my file tree to the left, I'm going to make a new file called tic tac toe.js, and now in here I can start to make my board. 

@ styled/TicTacToe.js

...



I need to remember on line one to import react from react, and then I need to make use of two more konva components. When I think about my board, I want to imagine it as a layer. So, konva gives us access to a component called layer. This is going to let us group together different elements on our canvas. I also am going to want to use line. When I think about what a board is made up of, it's made up of the lines. So we import these from react konva. 





Next, I'm going to create my board component. As we said earlier, I don't need this board to be a full on React component that has access to state, so I don't need to do the extends class component syntax. I can just make this with a simple arrow function. Now I'm going to show you another bit of cool syntax here. I'm going to specify the different parts of props that I'm going to be using in board here within the arrow function. This is another way to use the object destructing assignment. 

So I know I'm going to want to know about unit. That's what I specified in my tic tac toe container, and I know I'm going to want to know the size of the board in general. Finally, I'm going to want to know how many rows there are. 

I'm going to continue with my arrow function. I begin my brackets. And then I'm going to return the component that's wrapped in a layer, and inside of this is going to be a grid. Now I haven't made this grid, but that's what we're going to do now. 



Here back on line five, I'll initialize that grid variable that I reference on line eight, with just an empty array. Now I also know some of the props that each of these lines are going to want to have. I know that a line needs to have a color, and the way we specify the color of a line in konva is with the variable stroke. I can just use CSS color names here and I'll say gray. Then, I also know that each of my strokes will want to stroke with, we'll say 10. 





Now I need to start generating each of the lines that will go in my grid. So when I plan out this board component, I imagine having this array of lines each with the coordinates about where they should go. I could just hard code each of these, but I think it would be better if I devise this dynamically from the units, size, and rows. 



I've come up with a for loop that's going to calculate these for me. **You maybe can find another way to do this. I encourage you to give it a shot. It's a fun bit of problem solving.** 



I'm going to create a for loop and then I'm going to initialize an I variable which will be my index. I'm going to do this by saying I equals one. For the next argument in my for loop, I'm going to say run this for loop as long as I is less than the number of rows. And then I'm going to increment I by one each time my for loop runs. 



Let's take a step back and think about the way our lines for our board are being constructed. On a tic tac toe board, we have a total of four lines, two horizontal, and two vertical. Now, in my for loop, I'm starting at one, and I'm saying run this as many times as there are rows. 

But since I'm starting at one instead of zero, it's actually only going to run twice. Now, in the body of my for loop, I'm going to tell it first make a vertical line, and then make a horizontal line. 

Then in the next time, again, make another vertical line, and again make a horizontal line. Once we run twice, we'll end up with our goal of four lines. 

If that was a little bit confusing, let's just finish with the body of our for loop, and you'll see how it works. 



I'm going to say position equals our unit times I. This is where I'm going to get the starting and ending point for each of my lines, and then I'm going to generate my two lines and push them into the array. 

Here on line 10, I'm going to say grid.push. That means, I'm taking this empty array grid, and I'm using the push method to add a line to the grid array. First we're going to start with one of our vertical lines. 

So we'll add a line component and we'll close it. And I know that a line component asks for the points. These are the beginning and end points for the line. We'll say points equals, and I know it's an array of points. The first one will be position, which we can imagine as the X position, and then the Y position. 

So this will be one unit to the right, and it will be at the very top. This is where the vertical line begins, and then its end point will be one unit to the right, and it will be size down. So, it's going to start at the very top at zero, and it'll be one unit to the right, and then it's going to go all the way down to the bottom. 

Next, we just want to add in our stroke. So we're passing in the gray value that we created up here to make sure our line is gray, and our stroke width. 

And then, whenever we're adding React components to an array, we want to make sure we specify a key value, a key property. In our case, this actually isn't going to have any functionality. It's just something that React wants us to have. So we'll say I the index that we're at plus v. This is sort of arbitrary. It's just a part of the specifications of React. 

So now that we've created our first vertical line, we need to create our first horizontal line. Again, we're going to use grid.push, push being a method of an array, pushing into our grid up here on line five. And then on line 19, to save us some time, I'm just going to copy and paste this line, because for the most part it's going to be the same. It's going to have the same stroke, the same stroke width. 

For the key we'll just say it's the way H instead. Every component needs to have a unique key, so we want to make sure it has a different letter here. Again, the key doesn't really matter in this situation. We just need to make sure we have it. 

And now we need to modify the points, because right now this is set to draw a vertical line, and we want to make sure this is the horizontal line. So when I think about the way we need to do that, that means we need to set this initial X variable to zero, and this variable to position. So, the first X variable is all the way to the left, and it's one unit down, and then the next X variable is size, so that's all the way across, and it's one unit down, and now that I've generated my vertical line and my horizontal line in my for loop, since this is running twice, it'll give us the total four lines that we need to generate our board. 



Now things make a little bit more sense down here on line 29 where we see that we're inserting our grid. Grid is actually an array of components, and those components will be rendered between layer. 



Let's save things, restart our server, and see how it works. I'll shut things down with Control C, and then I'll start it up again with Yarn Start. After I start things up, I see that I'm getting a small error in the console. It says that module is not found. We need to make sure we export our constant board, and I know it's our culprit again. We forgot to add the second period. So, we were looking in the wrong directory. Let's change that, and that should solve our problems. Our server restarts, and we see that we're not getting any errors. Let's check out the browser to make sure things are working there. But when we look at the page, we don't see any lines. That's just because we forgot to pass our props to board. So when I look at the page here, I know that in tic tac toe styled our board is expecting to have unit and size and rows passed to it. But when I am in tic tac toe containers, we didn't pass any of those to it. So let's do that now. On 59 we're going to make sure we passed unit equals unit, and we're going to make sure that we're adding this as a variable. On line 51, as a destructuring argument to this.state, and we also want to use rows, so we're going to make sure we add this here too. Then, under board, I have unit, and we'll say rows equals rows, and size equals size. Let's save things. Now I want to go back to our browser. We should see our lines rendering as we expected. And look, there they are. "

@ styled/TicTacToe.js

```jsx
import React from 'react'
import {Layer, Line} from 'react-konva'

export const Board = ({unit, size, rows}) => {
	let grid = []
	let stroke = 'grey'
	let strokeWidth = 10
	for (let i = 1; i < rows; i++) {
		let position = unit * i
		grid.push(
			<Line
				points={[position, 0, position, size]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'v'}
			/>
		)
		grid.push(
			<Line
				points={[0, position, size, position]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'h'}
			/>
		)
	}
	return (
		<Layer>
			{grid}
		</Layer>
	)
}

```





## Creating squares

In our last video, we created the board and brought it in to our TicTacToe container. This is going to give us the lines that will make up our board. Now we're going to create each of the individual squares, and make sure they have that functionality so that when you click on them, the move is conveyed to our game logic. 



The first thing we're going to do is go up to componentWillMount and create a State variable that I know we're going to need to generate our squares. 



I looked at the react-konva document and I know we're going to want to use a special Konva element called rect. Rect stands for rectangle, and it's going to ask for a coordinate of the top left angle of the rectangle. 

That means we need to assemble an array of coordinates that we can give to our squares component so that it knows where to build each of the rectangles. We're going to initialize this in componentWillMount. 

We're going to start by creating an empty array called coordinates here on line 24. Next, we're going to create a for loop here on line 25 that's going to fill this coordinates array with all the necessary numbers it needs. 

We'll start by making our for loop and initializing a variable called y. We'll set it equal to zero. This is going to be for the y coordinate in our four loop. And we're going to tell our four loop to run as long as y is less than the number of rows. And each time it runs, it should increment y by one. 

We'll open a code block. And then inside of this we're actually going to make another for loop, this time to calculate our x values. I'm going to explain what all these for loops do in a second, but let's just start by initializing the second one. 

We're going to have x run as long as it's less than the number of rows, and we're going to increment x each time. 

Let's think for a second about what's happening here. I know that we have nine squares in a TicTacToe board, and I know that we have three rows. If we want to end up with nine pairs of coordinates, we need to make sure we run our for loop nine times. Since we have three rows, our first one, the y one, is going to run three times. And within each of those individual y loops, the x one is also going to run three times. This is going to leave us with nine sets of coordinates. 

Now, we're going to use coordinates that push, so we're using the push method on the array of coordinates that we initialized up here. And we're going to send in another array that's going to be x*unit and y*unit. 



Finally, here at the bottom, we're going to add coordinates to State. So we're saying when our componentWillMount, calculate our coordinates and add them to State. 





Now let's go down to our render function. I know I want to bring in a lot of the other variables that we initialized in State, because I know that we're going to need to give our Squares component access to them. 

So we'll definitely get coordinates, and then we'll also bring in those other variables that we initialized. gameState, win. 

Remember, I intend for win to be an array of variables that indicates where the win took place. So this would be an array of three variables, for instance, the first square, the second square, and the third square. It shows us where the win happened. 

Then gameOver, which will be a Boolean about whether or not the game is over. yourTurn, another Boolean that will tell us whether or not it's our turn. And ownMark, which will indicate what mark we will be playing with as a player. 

Now I'm going to go down here, to Squares. This component that I commented out before. And I'm going to uncomment out Squares. 

I'm also going to make sure to pass it all the props that I think it will need. I can say unit={unit}, coordinates={coordinates}, gameState={gameState}, and move... Here with move, I'm not going to set this to an element of State, because move isn't an element of State. Move is a function that I specified earlier, up above. So to pass it to Squares, I need to say this.move. 

Let's quickly check on what I mean by this.move. Here on line 39, is where I defined move. That's what I'm passing to Squares. Let's say every time move gets called, it's going to console.log('Move made'), and then it's also going to indicate the marker, and the index. We'll give these as arguments. And this means whenever you call move, it expects marker and index to be given to it, and in the console log, it's going to state those out. 



```jsx


@ containers/TicTacToe.js

    import React, {Component} from 'react'
    import {Stage} from 'react-konva'
    import {Board, Squares} from '../styled/TicTacToe'
    
    class TicTacToe extends Component {
    
      state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        winner: false,
        win: false
      }
    
      componentWillMount() {
        let height = window.innerHeight
        let width = window.innerWidth
        let size = (height < width) ? height * .8 : width * .8
        let rows = this.state.rows
        let unit = size / rows
        let coordinates = []
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < rows; x++) {
            coordinates.push([x*unit, y*unit])
          }
        }
    
        this.setState({
          size,
          rows,
          unit,
          coordinates
        })
      }
    
      move = (marker, index) => {
        console.log('Move made', marker, index)
        //placeholder
      }
    
      makeAiMove = () => {
        //placeholder
      }
    
      turingTest = () => {
    
      }
    
      recordGame = () => {
    
      }
    
      render() {
        let {
          size,
          unit,
          rows,
          coordinates,
          gameState,
          win,
          gameOver,
          yourTurn,
          ownMark
        } = this.state
        return (
          <div>
            <Stage
              width={size}
              height={size}
            >
              <Board
                unit={unit}
                rows={rows}
                size={size}
              />
              <Squares
                unit={unit}
                coordinates={coordinates}
                gameState={gameState}
                win={win}
                gameOver={gameOver}
                yourTurn={yourTurn}
                ownMark={ownMark}
                move={this.move}
              />
            </Stage>
          </div>
        )
      }
    }
    
    export default TicTacToe
   
```



Now, when I save my file, I see that I'm getting an error here. And that's just because I uncommented out Squares on line 79, even though I haven't yet made it. Let's scroll up to the very top. And say we're going to import it from Style. TicTacToe on line 3. Squares. 





Now, when I change to my TicTacToe styled file, 

@ styled/TicTacToe.js

I can begin to create my squares component the same way I made my Board component. I'll scroll down to the bottom. And on line 34, I'll export the new Squares component. Again, since Squares is not going to need access to State, I don't to say extends class component, I can just use this with a simple arrow function. Then I'll tell it to return a layer element, which is going to wrap my Square component. And here, I'm going to make use of the Konva text component, which I spoke about earlier. Now here on line 34, in my arrow function, I'm going to specify those props that I'm going to call on. The ones that I added to Squares here on line 79 through 88. So I need unit, coordinates, gameState, win, gameOver, yourTurn, ownMark, and move. Let's add those here in between a pair of brackets. Now in the body of my Squares component, I'm going to come up with some of the logic that will decide what to put for each of these Squares. Thankfully, I did a lot of the heavy lifting already when I calculated my coordinates. We've gotten a lot of good code down already, and in the next video, we're going to make the functionality that will go here in Squares. "

@ styled/TicTacToe.js

```jsx
import React from 'react'
import {Layer, Line} from 'react-konva'

export const Board = ({unit, size, rows}) => {
	let grid = []
	let stroke = 'grey'
	let strokeWidth = 10
	for (let i = 1; i < rows; i++) {
		let position = unit * i
		grid.push(
			<Line
				points={[position, 0, position, size]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'v'}
			/>
		)
		grid.push(
			<Line
				points={[0, position, size, position]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'h'}
			/>
		)
	}
	return (
		<Layer>
			{grid}
		</Layer>
	)
}

export const Squares = ({
	unit,
	coordinates,
	gameState,
	win,
	gameOver,
	yourTurn,
	ownMark,
	move
}) => {

	return (
		<Layer>
			<Text

			/>
		</Layer>
	)
}

```





## Square functionality

I'm going to initialize another variable, called squares with a lowercase, and I'm going to set this equal to coordinates .map. 



.map is a method that's available to arrays. It's going to look at the current contents of coordinates and then return a new array, based on the parameters that we give to it. It accepts an arrow function as an argument, and that arrow function can accept another two arguments, position and index. We'll finish that arrow function with a pair of brackets. This is where we're going to specify what we want to be created in this new array that .map will return. I know that I want each of the individual squares that's going to go into the squares array to have access to the move function that we declared up here on 42 and we originally created in our Tic-Tac-Toe containers. 



I'm going to say let makeMove equal move. Then, I also want to make sure each of the squares that I built has access to the mark that should go in it. 



Remember from several videos ago, I said I'm going to be storing all of the game's information in an array called gameState. This means that while I'm building my board, I can find the mark for each individual square at that specific index in the gameState array. 



Next, I'm going to initialize a variable that's going to tell each of my squares what color to be, or, rather, what color the mark in that square should be. This is a prop that I'm going to pass to the text component that we got from con-va. It wants to know the fill. We're just going to use the CSS color black. 



Then, I need to think about a little bit of the game logic. I want to make sure that when someone wins, their marks turn a different color. I need to be looking to see if this win property holds a value, and if it does, I want to change all the squares that have that same array index a different color. 

We're going to do that by saying if there is a win, and the win that includes index, so I'm saying, if there's a win, so if the win array exists, and when we use the includes method on the win array, and we find index, so if the current square is also listed in the win array, then we want to set the fill to light green. 

We're saying here we want to make sure any squares that are part of the win index turn light green, instead of their usual black. 





Additionally, we want to make sure that our players can't cheat. When you click on a square and it's your turn, we want to make sure that your move gets made, but we also want to make sure if it's not your turn, you shouldn't be able to make a move. 

In this if statement that we're about to write, we're going to overwrite this make move that we specified on line 45, with a different function, so that users can't move if it's not their turn. The logic we'll use to implement that is we'll say if the game is over, you shouldn't be able to move, or if it's not your turn, you should be able to move, or if the square that you're clicking on has your same mark, or has any mark, you shouldn't be able to move there. We're saying, if the game's over, you shouldn't be able to move. If it's not your turn, you shouldn't be able to move, and if the square you're clicking on has a mark, if someone's already moved there, you shouldn't be able to move there. 



We're going to change makeMove. We're going to overwrite the variable that we declared on line 45 with a function that just console logs, "nope", just so if they're looking in the console, they'll say, "Oop, I can't do that." 



Finally, remember we're inside of our .map function here, that's being called on coordinates and that is turning an array for squares. Going to return a text component. This is the con-va text component that we need to bring in. 



Before we do go any further with this, let's scroll up to the top and make sure we're importing this. We brought in layer; we brought in line. Lets also add text. 



Now we scroll down, and I realize now, I don't like the way we set this up before. We're actually not going to put text here in between the layer. We're going to delete 63, and instead, we're going to put a pair of brackets, and we're going to say we're going to put that array of squares, that we were creating up here on line 44. Now here on 55 is where we're going to be using our text component. 



Now that we've created all of these different properties to add to the text component, let's begin by adding them to it. Remember, we need to have a key, because any time we have an array of components, each of those components need to have access to a key prop. This is just something that React asks of us. 



We also want to know the index of each of those squares. This is also going to be set to index. Next, each of these texts wants to know an X and Y coordinate. These are the coordinates that we generated in component, well, map, in Tic-Tac-Toe containers. They're available to us as position zero and position one. The X coordinate is available to us as position zero, and the Y coordinate is available to us as position one. 

If that's a little bit confusing, let me show you where we're getting that. Up here, we're running our .map function on coordinates. Remember, coordinates is an array of nine arrays, each of those arrays making up the coordinates is an X and Y coordinate. Now, in our arrow function here, we specified each of those individual arrays that are a part of coordinate, we're going to refer to them as position. 

Now, when I say X is position zero and Y is position one, I'm saying X should be set to the first element in the array that is referred to by position, and in Y, I'm saying it should be the second. 



Next, we want our font size, this is a prop that Text asks for, to be one unit big, and we want the width of each of these text box to be one unit big. We want the text that's going to go in each of these text fields to be our mark, so in this case, it's going to be either an X or an O. We want the fill to be our fill color, which as you remember on line 47, we said is black, but which may be light green, if we've won. 

Next, we want to use the font family of Helvetica. Text also gives us the option to align our text, and we're going to align each of the marks to the center of their box. 



The last prop we're going to pass to text is an onClick prop. We're going to say every time you click on one of these squares, I want to look at the event, I'm using an arrow function here, and then I'm opening up a code bracket, and I'm going to say, I'm going to look at the event, and I'm going to say that the index is equal to the event.target.index. 

When you click on an element in React, you're given this event object. In the event object, when you look at the target property, you can access some of the information that was attached as props to the target. We want to get the information that's stored here in index; that's what we're referring to.

 We'll say, let index equal event.target.index. Now, we're going to use that function, makeMove, that we declared earlier. If you remember, in Tic-Tac-Toe.js containers, we created our move function, and it wants an index and the mark that's being used. In this case, we're going to say index and ownMark, so we're going to pass along our own mark and the index of the square that's being clicked on. 

Let's save this and see how our component functions now. We've given each square information, and we're telling it to pass along our own mark when we click on them. This means when we click on each of the squares, I should expect to see a console log that's going to tell me the index of the square that was clicked on and the mark that was used when it was clicked on it. 

I should also see the squares changing (mumbles). We'll navigate to our page, where we'll refresh things. We'll close the drawer here on the left, and we'll try clicking on one of our squares. Alright, awesome. I'm seeing in the console that a move was made, and the index was zero, and the mark was X; that's my own mark. Let's try it again on a different square. One. Alright, so now we're getting the next element, and we're getting X. I can try this on all the different ones, and I see that it's working correctly. 

I see here though that my marks aren't showing up in the actual squares when I click on them. That's because I haven't actually made a change to stay. When I go back to my move function here, on line 39, I see that I'm not actually doing anything with this information, so I shouldn't expect anything about my game state to change. We'll start building more of our game functionality in the coming videos.

@ styled/TicTacToe.js

```jsx
import React from 'react'
import {Layer, Line, Text} from 'react-konva'

export const Board = ({unit, size, rows}) => {
	let grid = []
	let stroke = 'grey'
	let strokeWidth = 10
	for (let i = 1; i < rows; i++) {
		let position = unit * i
		grid.push(
			<Line
				points={[position, 0, position, size]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'v'}
			/>
		)
		grid.push(
			<Line
				points={[0, position, size, position]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'h'}
			/>
		)
	}
	return (
		<Layer>
			{grid}
		</Layer>
	)
}

export const Squares = ({
	unit,
	coordinates,
	gameState,
	win,
	gameOver,
	yourTurn,
	ownMark,
	move
}) => {
	let squares = coordinates.map( (position, index) => {
			let makeMove = move
			let mark = gameState[index]
			let fill = 'black'
			if (win && win.includes(index)) {
				fill = 'lightgreen'
			}
			if (gameOver || !yourTurn || mark) {
				makeMove = () => console.log('nope!')
			}
			return (
				<Text
					key={index}
					index={index}
					x={position[0]}
					y={position[1]}
					fontSize={unit}
					width={unit}
					text={mark}
					fill={fill}
					fontFamily={'Helvetica'}
					align={'center'}
					onClick={(event)=>{
						let index = event.target.index
						makeMove(index, ownMark)
					}}
				/>
			)
	})

	return (
		<Layer>
			{squares}
		</Layer>
	)
}

```







## Building AI

In the last video, we created all of our squares and we set it up so that every time we clicked on them we could see the index of the square that we clicked on. Before we can actually make our game start to work and to make a fake AI that will play against us, we need to make a few sort of helper functions. 

We need to have some bits of information that I know we're going to need to make our game's rules function. So one thing that I know we need to do is we need to be able to check whether or not someone's won. 

I'm going to come up with an array that tells us all of the winning combinations in a game of Tic-Tac-Toe. I want this array of all the possible winning combinations to be available throughout my Tic-Tac-Toe component, so I'm going to create it inside a constructor function. 

At the top here, on line seven, I'm going to say constructor. I'm going to pass it props. I'm going to say super and also pass it props. And then, I'm going to say this.combos, I'm initializing a function on this.combos and this is going to list all of the different combos that could result in a win. 

So, let's just start listing all of the ones that are in a Tic-Tac-Toe game. We can win horizontally across the top. We can win horizontally across the middle. Across the bottom. And you'll notice that I'm hard coding these, if you can think of a way to dynamically generate them, that would be awesome. 



Now that I have my list of winning combinations, I can make a new function called win checker. I'm going to need to be able to check whether or not someone's won after every move so I can say whether or not the game should be over. We'll call this win checker and we'll have it take in, as an argument, the current game state. So then win checker will look at the game state and then it will tell us whether or not someone has won. 

We'll let combos equal this.combos that will just make it a little bit shorter for us to refer to combos inside this function. We want win checker to return the winning combination if there is one. So we'll say return combos that find, I'm now using the find method which is available to arrays, and what this is going to do is it's going to say I'm looking at the combos array and if at any time my certain specifications are met then I'll return the array element that met those specifications. 

So, we're going to pass an arrow function and that arrow function's going to have one argument combo referring to the individual combo that we're looking at within the larger combos array. And we're going to use the object destructuring assignment on each of those winning values to create three new variables, A, B, and C, from this combo object. And then finally, we're going to tell find that you found a winning combo win, that's what that return is indicating, it means look at this Boolean, if it's true, you found a winning combo. 

And we're going to decide that it's a winning combo if game state A equals game state B and game state A equals game state C and game state A is not false. 

Alright, so what are we saying here? We're basically saying, if A, B, and C are the same thing and none of them are false, then we found a win. 

Now we have our win checker function. That means that we're going to be able to easily check whether or not someone's won the game. 



We're also going to make a quick utility function that I know is going to come in useful and we're going to call this random. There are a lot of instances in an application where we'll find that we need to make a random number. It's useful to have one of these available in your project. A lot of times people will put these in their utilities file, but since this is the only case where we're going to use it, I'm just going to make it inside of our component. This is a random function that I found online and you can use similar ones. A lot of people will argue about the best way to generate a random number, but I found this one to be effective for our uses. I'm going to say that my random function asks for a minimum value and maximum value and then I'm going to make sure that my minimum value is a round number with math.ceil and I'm going to make sure that my maximum value is a round number with math.floor and then my random function is going to return math.floor of math.random, math.random creates a random number for us but that is a decimal number and we're going to multiply that by max divided by min and we're going to add our min, and we put this parenthesis in the wrong place, it should be right there, great. Now we have a random function that we can call from within our component. 





The last part we're going to do before we finish up all the functionality of our square, is we're going to figure out a way for our AI to generate a move. It would be neat to make our AI to be smart, to have it try and win, or even to use an API outside that would help us come up with intelligent decisions, but that seems like a lot of work for right now and remember, we're just trying to get to MVP. So to rough this out, we're just going to have our AI take an open square and move there at random. 

To make sure that our AI makes a sensible move, it needs to have access to game state, so we'll pass that as an argument. Then we're going to initialize a variable called other mark and we're going to set this equal to this.state.otherMark if you remember, at the top, we specified our mark, our own mark as X and other mark as O. 

We want to make sure that our AI knows to use its mark not our mark. Next we're going to initialize a variable called open squares and set it equal to an empty array. Our AI needs to know now which squares are open so that it doesn't accidentally try and move in a place that isn't available to it. Next, we're going to look to the game state with for each, for each is a method that's available on arrays that calls a given function on each element in the array and we're going to say for each square in the game state and its index run this function, if the squares false, so if no one has moved into that square, if it's empty we're going to say openSquare.push that index so into those open squares array that we created add the index of that open square so that we know that that is an available move, 



finally we're going to make a variable called AI move that's going to take our open squares and then simply take a random one from that array of possible moves. Here I am using the random function that I created earlier and I'm saying go from the beginning to however many options there are available in open squares. I see here that we just made a small error in our naming, this should be open squares, this should be open squares, right here on line 63, we need to make sure this also says open squares. Let's save things. Oh, see we're getting two more warnings here. One for AI move and one for other mark and that's because we're generating this AI move but then we're not actually making use of it, so we need to add one more line here at the bottom where we say this.move and it goes to the AI move index location and it uses the other mark indicator, so it's going to choose an open square at random and then it's going to place the AI's other mark indicator. Wow, we've written a lot of great code here and we're almost finished with the functionality of our game. "



@ containers/TicTacToe.js

```jsx
import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component {

  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows
    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }

  move = (marker, index) => {
    console.log('Move made', marker, index)
    //placeholder
  }

  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach( (square, index) => {
      if(!square) {
        openSquares.push(index)
      }
    })
    let aiMove = openSquares[this.random(0, openSquares.length)]
    this.move(aiMove,otherMark)
  }

  random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min
  }

  winChecker = (gameState) => {
    let combos = this.combos
    return combos.find( (combo) => {
      let [a,b,c] = combo
      return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
    })
  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board
            unit={unit}
            rows={rows}
            size={size}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
      </div>
    )
  }
}

export default TicTacToe

```







## Finishing the game

In the last video, we created these utility functions that we're going to make use of. makeAiMove, random, and our winChecker. 

Now, we're going to bring all of these together for the last piece of functionality for our game that will go here, in move. 



Right now, we're just console logging our marker in the index, but let's actually make use of those now. We're going to wrap the whole move function in one big setState, because the state is where we're going to be holding all the information about our game. 

We're also going to use this neat syntax for this that sets date. It allows us to access previous state and props. I'm just going to change around some of the formatting here, and now we're going to bring in some variables that we need to make use of. 



I know we're going to want to know about gameState, want to know about yourTurn, whether or not it's our turn, we're going to want to know if the game's over, and if there's been a winner, and these are all a part of previous state. 

If there's any confusion here, know that previous state is the same as this.State, except it's looking at what the state was like before this change is about to happen. So, right before we made the move, what was our state like? 

Now, we can start modifying these variables that we're going to reset at the end of this in a return statement. 

So, I'll write this at the bottom so we can look forward to it. We're going to return the new state, the way we want state to be after this move takes place. We can look forward to that. Here, on line 56, I'm going to make my first change. Well, I know that after you make a turn, if yourTurn was true, yourTurn should now be false, or vice-versa. If it was not our turn, then now it should be our turn. We're going to change this Boolean to its opposite using the exclamation point. 



Now, on line 57, we're going to add the move that we're making to gameState. The way we'll do that is with the splice method, which is available to arrays. The splice method is, first, going to look at this index variable, which we're passing in through the top, and then it's going to want the number of arrays to modify, that'll just be one, and it's going to want to know what we should replace each of those arrays with, and that's just going to be our marker. 





So, to reiterate what we're doing here, we're saying, look at our gameState. Then, using splice, look at the index, the location of our move. Now, take that one element, and replace it with our marker. 





Next, we need to check and see if there's been a winner. So we're going to make use of our winChecker function that we created earlier. We're going to say, let foundWin, this new element, equal the result of this.winChecker, and I remember that winChecker needs to be past our gameState. This means that winChecker is going to check to see if there's a win. If there is one, it's going to set foundWin equal to the result. 





Next, we're going to make an if statement that's going to look to see if a win was found. If a win was found, we want to say that the winner is the player whose mark was found in that array. So, I'm going to say winner = gameState at the index of the foundWin, and we'll just look at the first of those arrays. Because, remember, the foundWin is, itself, going to be another array that lists the winning combination. 

Next, we're going to make another if statement, where we say, okay, if a win was found, or the gameState.includes, this is another method that's available to arrays, includes(false), so this is going to say if we found a win, so if there is a win, or, using these bars that can indicate or, or if we did not find that the gameState.includes(false), we're using the includes method on the gameState array, so if there are no blank squares, remember a blank square is indicated by false, then we'll say that gameOver = true. 





So, we're saying, if we found a win, or if there are no blank squares, then the gameOver is true. Next, we're going to have one more if statement that says, listen, if it's not our turn, and the game's not over, then we need to make an AI move, and the AI move takes gameState as an argument. 



So, we're saying, if it's not our turn, and the game's not over, it's time for us to have an AI move get generated by this.makeAiMove. Now that we've got all the necessary elements that are going to go in our modified game state, we can put them here, underneath the return bracket on line 69. 



We're going to say gameState is equal to gameState, yourTurn is equal to yourTurn, gameOver is equal to gameOver, and then here, for win, I'm going to say win is equal to foundWin, or, if there is no foundWin, it's equal to false. 





So, I'm using this or syntax to say, if we did find a win, our win should be set to that, but if we didn't find a win, we should say there is no win, it's still false. 



Lastly, we're going to say if there's a winner, they should be set to the winner. This is the new state that we return at the end of move. 





Let's save our file and check to see if our game works in our browser. If everything turned out alright, we should be able to play a game against the computer now. I'll refresh my page, close the drawer, and let's start the game. And, when I click on things, I see that it doesn't work. Luckily, I think I know what the problem is. When I navigate back to my file and check things out, I see that I just reversed these two arguments up at the top. It needs to be index, marker, not marker, index. So, I'll change that on line 53, and then, I also want to make one small change down here, at the bottom. So, instead of just making my move instantly, once it's the AI's turn, to make it more realistic, I'm going to have it wait a second. I'm going to use the JavaScript setTimeout function. This is going to make my AI wait just a little while before it makes its move. So, I'm going to cut and paste this line, from here on line 90, to 88, and then I'm going to place a comma after this bracket, on line 89, and I'm just going to say, wait one second. So, this 1000 means 1,000 milliseconds. Now, my AI will pause before it makes its move. Let's save this, and see if things are working the way we want them to. I'll refresh the page, just in case everything didn't refresh, I'll close my drawer, and I'll start to play my game. Great, now I can make a move, it shows up on the screen, and then the AI makes another move a second later. Let's see what happens when I finish the game. Awesome, when I get a winning combination, I get a winning result. Also, my AI plays by the rules, and I see that when I try and click on squares where I can't, it says nope in the console. It won't let me cheat. Awesome job. We're now done with all of the functionality of our game, and we can start to connect it to our remote database, so that we can keep track of all these games in a scoreboard. "



@ containers/TicTacToe.js

```jsx
import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component {

  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows
    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }

  move = (index, marker) => {
    this.setState( (prevState, prop) => {
        let {gameState, yourTurn, gameOver, winner} = prevState
        yourTurn = !yourTurn
        gameState.splice(index, 1, marker)
        let foundWin = this.winChecker(gameState)
        if (foundWin) {
          winner = gameState[foundWin[0]]
        }
        if (foundWin || !gameState.includes(false)) {
          gameOver = true
        }
        if (!yourTurn && !gameOver) {
          this.makeAiMove(gameState)
        }
        return {
          gameState,
          yourTurn,
          gameOver,
          win: foundWin || false,
          winner
        }
    })
  }

  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach( (square, index) => {
      if(!square) {
        openSquares.push(index)
      }
    })
    let aiMove = openSquares[this.random(0, openSquares.length)]
    setTimeout(()=>{
      this.move(aiMove,otherMark)
    }, 1000)
  }

  random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min
  }

  winChecker = (gameState) => {
    let combos = this.combos
    return combos.find( (combo) => {
      let [a,b,c] = combo
      return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
    })
  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board
            unit={unit}
            rows={rows}
            size={size}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
      </div>
    )
  }
}

export default TicTacToe

```











## Profile page styles



For the last part of chapter three, we're going to be building the profile page which will show our personal record as we play tic-tac-toe. So that we don't have to write too much CCS, I've provided us with a prewritten list of styled components that we can use in our profile. You can find them in your exercise files or in this profile styled components directory. 

@ styled/Profile.js

```jsx
import {media} from '../utils/media'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border: 1px rgb(200,200,200) solid;
  width: 800px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  ${media.handheld`
    width: 100%;
  `}
`

export const Name = styled.h2`
  display: flex;
`

export const GameListHeader = styled.h4`
  display: flex;
  padding-bottom: 2px;
  margin: 10px 0 5px 0;
`

export const GameList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 5px;
  border: 1px lightgrey solid;
  justify-content: center;
`

export const GameRecord = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 1px 0;
  background-color: ${props=>(props.index % 2 === 1)? 'rgb(225,225,225)' : 'rgb(240,240,240)'};
  box-sizing: border-box;
`

export const ColumnLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 3px 0;
  box-sizing: border-box;
  font-weight: bold;
`

export const Column = styled.span`
  display: flex;
  width: 25%;
`

```







So this is the `Profile.js` file inside our styled components that I've put together for us. 

In it, it creates a container, a name, a game list header, game list, game record, column labels, and column. 

Now let's go to our Profile.js file in our containers. 



@ containers/Profile.js



We'll start by importing all of those components that we were made available and are profiled in the style directory. So we'll say Container, Name, GameListHeader, GameList, GameRecord, Column, and ColumnLabels. And we're to bring these in from our style directory, and the profile file. 



Now that we have those, we can start to use them on our profile page. On our profile page I imagine this is a place to store the records of our games. To make it easier to test, we're going to create some dummy data that we can use to populate our fields. 

One neat way to do that since we don't actually have access to our relay API or our database yet. There's no data up there. We can say, static defaultProps. And what this will do, is it will provide my profile component with some default props that it gets at the beginning until I fill in some real ones. 



You could also use this to provide default props just in the chance that your regular props aren't sent down for whatever reason. I'm imagining that my component is going to take a user prop, and that that user prop will be an object that holds information about the user like their email. 

For right now we'll just say, USER_EMAIL. And then, the user object will also contain a key named games which is an array that holds all of the recent game information. Each game will probably say whether or not the user was the winner when the game was played at. And each game should also have a unique ID, which we'll just dummy in right now. I'm going to copy and paste lines 10 through 14, just so we have a few different games that we can work with. I'll make this one the next day. And we'll make this one the next day. Again, this information that I'm filling in for these games, it doesn't really matter right now. It's just dummy information that we're using to make sure things work right. 







Next, when I look down at our render function, I want to start using those styled components that I created earlier. So let's get rid of this, and let's start plugging them in. We're going to wrap everything in our profile page with a container component, and then at the top I want to have our name, and we're going to use this as email. I haven't actually specified what the email is. 



So at the top I need to declare where I'm getting that email. Remember, we're getting that email information from this.props.user. So email is a property of user, and we're disassembling this so that we have a more succinct way to access that information. 



Next we need name. We're going to use our GameList component. This is where I'm going to put a list of all the games. And at the top of my game list, I think I want my GameListHeader. Each of the individual columns should have some more information about what's in them. And we'll call this game list header MyGames. I'm imagining that each one of my columns will want to have a label at the top of it. I imagine that there'll be four columns. The first will be the outcome, whether or not we won the game. I'm going to copy lines 42 to 44 so that we have less typing to do. I'm going to paste them below. The next one, on line 46 I'm going to change this outcome to guess. So we'll say what my guess was in the game. Did I think my opponent was a robot or human. I'm going to paste again, and instead of guess, I'm going to say whether or not we guessed correctly. So were we right or not. And then on line 51, I'm going to paste this in one last time. And I'm just going to say the date that the game was played. Okay, so we've used almost all of our styled components now. We're just getting a warning in the console, because we haven't used GameRecord. And that's a component we're going to be using for each of the individual game records. We'll use that in a second. Let's check to make sure all the things that we've done so far, are rendering correctly on Atom. I'll refresh the page, and I'll navigate to my profile page. Cool, it looks like I have my user email, and my games. These aren't in the right box though. So it looks like I just maybe misaligned some of my elements. Let's go back and see what the problem is. It looks like that my column labels should actually be inside of my game list. So I'm going to cut these out, and I'm going to put them back up here on line 40. I'll save this, and see what happens. When I switched to the browser, and minimize my drawer, I see that they're rendering the way I want them to. Inside the MyGames list. 



@ containers/Profile.js

```jsx
import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '12/25/2016',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '12/26/2016',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '12/27/2016',
          id: '0003'
        },
      ]
    }
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
        </GameList>
      </Container>
    )
  }
}

export default Profile

```





## Profile page records

@ containers/Profile.js

Our last step is to connect all this dummy data into our list. We're going to make use of that game record component that's giving us a warning in our console. 

To do that, we're going to create a function here on line 29. We're going to use get records. Now notice how I prefixed this function with the phrase get. That means that this is an automatically invoked function. A lot of times when I'm creating functions that I know are just going to run to fetch data, I'll use this get syntax to make sure that they **automatically fetch as soon as the component loads**. 

On line 30, the first thing I'm going to do is start by saying what I'm going to return. I know that my get records function is going to want to return an array of my records. 

This is another opportunity for me to use the map method on an array. So I'm going to say return. And then this is where I'm storing my game record information this.props.user.games. 

So the games key on the user object is where I can look at my games. Then I'm going to call map on that, because this array of games is what I want to separate into a differently formatted array of components. 

Remember, my first argument for map is a function, and that function takes two arguments, the individual item in the array, and the index. I finish my arrow function to make a code block. 

On 34 and 32, I'm just going to reformat my coding. Next, I'm going to say within this map function, what exactly I want to return. I know I want to return a game record, the styles component I imported at the top. 

I'm going to close this game record and then I'm going to pass some props to it. Remember, whenever you have an array of components, you need to make sure that they have a key. We'll say that this component's key is index. And then we'll also say that it has an index, which we can also set to index. We're going to be using the information in this index prop to make sure that every other game record is shaded. 

Next, a game record will be composed of four columns. I'm going to make a column, and close the brackets. And then we'll just copy and paste four of these. So I'm going to take lines 36 through 38, copy and paste them onto 39, do it again on 42, and again on 45. So we have my four columns. Here in this first column, I'm going to use a ternary argument to say if game.winner is true, then write we won, and if we didn't win, write that we didn't win. Then for this next column which says what our guess was, let's just dummy in some information and say we guessed robot, and we'll say for this next column which is supposed to say whether or not we guessed correctly let's just say we always guessed wrong. 

And finally, for this last column which tells us the date that the game was played at, we're just going to put in our game.createdat. We'll save our file. Let's open up our browser to make sure our games are appearing in our list. When I look at the page, I see that they're not. I know what the problem is. We created this get records function, but we haven't actually called it beneath our render function. Down here at the bottom, we'll just add it, and save, great. And it looks like my records are showing, but there's still a problem with the date. I bet I made a typo. Let's go back and fix that. When I scroll up to this.records, op, I see that I just forgot to put a d here. 

```jsx
import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '12/25/2016',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '12/26/2016',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '12/27/2016',
          id: '0003'
        },
      ]
    }
  }

  get records() {
    return this.props.user.games.map( (game,index) => {
      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won!' : "Didn't win"}
          </Column>
          <Column>
            "ROBOT"
          </Column>
          <Column>
            "No"
          </Column>
          <Column>
            {game.createdAt}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Profile

```









We'll save that, wait for our component to update, go back to our browser and great, now all of our user's records are showing. 

# 4. Implementing Libraries





## Authentication setup



[JWT IO - Use to debug JWT Authentication tokens](https://jwt.io)



Now that our components are mostly built we can concern ourselves with connecting them to persistent data store. What good would the information our users generated be if they couldn't also maintain an account associated with their data? 

User authentication is a fairly common feature of web application development, but unfortunately it's often a bit of a headache too. Navigating password hashing, cross origin, resource sharing (aka CORS), and safely maintaining sensitive user information all have potential to be major pain points. 

Thankfully there are few libraries and services out there that can help make things easier. One open source option for those of you interested in building your own API is called **Passport**. 

With our project however, we're going to use a service called **AuthO**. If you don't have an AuthO account I encourage you to go create one. They have a free level account that should meet your needs on most small hobby projects. 

Once we've put in the account we're going to setup a project and we're going to record a client ID and client domain in our source config file to access later. 

@ [Auth0 Website]()

Here on my Auth0 Clients' page I'm going to create a client. I'll name it TicTacTuring. I'm going to say that it's a single page web application, which most React apps will be. And here I'm going to specify that we're using react. 

I did this because AuthO offers me some cool sample projects and suggestions about how to get started. I encourage you to check those out if you want to expand on your project. 

The directions it gives me here are the MPM install authO-lock. We're not going to use MPM we're going to use yarn but we can do that now on our project. I'll shutdown my server and I'll close these files, I don't need them right now. And I'll type in yarn add auth0-lock to add the AuthO lock package to our dependencies. 

```bash
yarn add auth0-lock
```





A word about AuthO lock, one of AuthO's major features is a robust API that's well documented that you can use to setup your own authentication. We're going to be using a package called AuthO lock that's going to do a lot of the heavy lifting between us and the AuthO API. If you wanted to do this with just simple http calls or if using something like fetch, you could do that as well. 



In the next video we're going to start configuring the lock library to meet our needs, but first I want to briefly lay out the way authentication is going to be handled on our site. When a user arrives at our site they will have the option to login or signup. When they do they will be prompted to input their email and password into a popup created by AuthO's lock library. This library will then send the user's email and password to AuthO where it will look to see if that user's credentials match an account or eligible to be made into a new account. If the user's credentials are good AuthO will respond to our application by passing out a json object. There are a few pieces of data in this json object but the most important of them is the ID token. The ID token we will receive will be formatted as a JWT token, which is an open source token format. But what this all means really is that AuthO is going to send us along a string of unique characters that have been generated based on our account's unique encryption secrets. Our application can then parse the contents of this token into some important information like the identity of the user who requested the token, what that user's permission levels are, and then when that token will expire. To give you a sense of what we're going to receive in this JWD token we can use AuthO's JWT token debugger. 

[AuthO's JWT token debugger](https://jwt.io)



On the left here you see an example token and you can see the way the parts of it are being parsed to come up with information. Once our application has the token it will pass it along to Graph.Cool, which Graph.Cool will use the authenticate that user. Once both sites have the token they can make sure that the right user is getting the right information. 



Let's go back now to our AuthO dashboard and take some of the important information that we want from our newly created Client. We'll go to settings and I know we're going to need our Client ID and we're also going to need our Domain. 







I'm going to copy and paste my Domain. I'm going to go into my file. I'm going to open up the source directory. I'm going to go to utils. And I'm going to create a new file that I know we're going to need to use. I'll call this auth.js. And in it I'm just going to declare a variable. We'll say const authDomain and I'm going to copy and paste in my Domain from earlier. I just need one more piece of information. I'll start a new line. I'll go back to my browser. And I'm going to copy and paste my Client ID. I'll go back to add them. I'll create a variable. I'll call this my clientId and then I'm going to copy and paste in the value. 



@ config/auth0.js



Okay, we're going to be working more in this off file in the next video, but for now we've got a good start. 





> When I enter the token I get back in the console it seems to deliver the payload. But what is the Verify Signature and the Invalid Signature sections of the page telling me?





## Authentication class



"- [Instructor] Now that we have a decent understanding of the way authentication is going to get carried out on our site we're going to create an auth class that will help us configure and use the tools made available to use by the Auth0Lock library. Here at the top of this auth.js file let's import Auth0Lock from the dependency we just added, auth0-lock. Next, on line 5 let's create a class. We'll call this AuthService, we'll make a code block, and then at the beginning of our class we'll create a constructor. This constructor function will be called when we initially create AuthService. Next, inside our constructor I'm going to create a variable called this.lock. This will be available inside of my class. Now I'm going to use the Auth0Lock object that I imported from auth0-lock. Auth0Lock expects three arguments, the clientId, the domain, and then a configuration object. We already have access to the authDomain and the clientId, because we added them here at the top of our file. Let's put those in now. We'll say clientId and authDomain, and now we'll make the object that will be be our configuration object. Auth0 provides good documentation for the lock API, so I encourage you to check it out and see what else you can do. We're just going to use one option here and we're going to say auth, params, we're going to set the scope, and we're going to say that this is openid and email, we're going to add commas at the end of this. Let's talk about what we just did here. When you're using Auth0's tokens it often has to know what the scope should be. This is what sort of information should be available to this user and what sort of privileges should they have. We're say with openid and email that we want each token to hold the user's openid information, as well as their email. Now beneath this.lock I'm going to add another thing. I want to make sure that we can call this.showLock inside of our class, so I'm going to bind it. The last thing I'm going to do inside of constructor is I'm going to set up an event listener. When we have an instance of lock there's a few different event listeners we can set up. One of them is on authenticated. There are two arguments to this.lock.on. The first one is the event to listen for and the second one is what to do when we come across this event. We're going to say this.authProcess and we're going to bind this. What we're saying here is when you hear an authenticated event run the this.authProcess, which we'll specify below. Let's start by creating the authProcess function. I'll name authProcess, then I'll use the arrow function, I'm going to make sure that I pass in the authResult to authProcess, because I know when authenticated gets called it's going to pass us all the information that was in the token that was received. And then for right now I'm just going to say console.log the authResult. We'll add more to the authProcess later. There's a few more functions that I know that we need to have inside of our auth class. One of the first ones is going to be that we need to be able to show the lock. So when we have the lock available we want to be able to press a button and have the authentication information appear, so that the user can enter their email and password. To do that we need to call lock show, so we'll make a function called showLock, and inside of it we're going to call this.lock.show. Remember, when we're accessing lock, so when we call this.lock.on or this.lock.show we're referencing the instance of new Auth0Lock that we created up here. The next thing that we want to do is we want to have a function that's going to be able to take the authorization information that we receive during authProcess, take that token and add it to our website's local storage. We're going to do that inside of a function called setToken. Inside setToken we're going to want to look at the idToken that we would pass to it, as well as the expiration of that token. We're going to pass these along to setToken in an object that I'm going to call authFields. On line 32 I'm going to disassemble authFields to get these idToken and expiration. Now here on line 33 is where I'm going to make a call to localStorage. I'm going to use the method setItem on localStorage to attach idToken, and then I'm also going to make a call to localStorage with the method setItem to set the expiration. I'm also going to multiple my expiration times 1000, because I happen to know when we get the expiration information from our token it will have three digits taken off of it. Let me take a second to explain what we just did here. If you're not familiar with local storage let's take a second to look at our browser. If we go into our developer tools we can see that we have an Application page available to us. Here we can see there's something called Local Storage. Right now there's nothing stored here, but every website has the ability to store information by making calls to local storage. We can also remove this as well. This gives us the ability to store our user's token here, so that the next time they visit our page it'll recognize them and remember them. I mentioned here on line 34 that we want to be able to set the expiration information into localStorage. This is because each token also has an expiration attached to it and (mumbling) won't accept the token if we send in an expired one, so we need to keep track of that whenever we go to get our tokens. I'm going to write a function now that will check to see if any tokens expired. We'll call this isCurrent and it's going to return a Boolean that indicates whether or not our token is current. We'll make a variable called expiration string, expString, and we'll set it = to localStorage.getItem, we're using the getItem method on localStorage to find the item named exp. And then we're going to write an if statement and say if there is no expString, so if the localStorage.getItem came up with nothing we're going to remove the item idToken, so if there was, for some reason, no exp item we need to make sure there shouldn't be an idToken either. And then we also want to return false, because if there is an expiration date then we can safely say that it's not current. We also want to know what time it is now, because we can't decide if something's expired unless we know what time it is now. We're going to make a call to JavaScript's Date function to get the current time, then we're going to create a Date object out of our expString, so that we can compare the two. The way we'll do this is by saying new Date and we'll pass in our expString, but actually we can't just pass in our expString, because as we specified earlier, it's actually a string, so we need to make sure that Date is getting a number. We'll use the parseInt method, which JavaScript makes available to us, and then I happen to know that when you use parseInt you need to provide what's called a radix parameter. The radix parameter is an element of parseInt that rarely comes into play, but if we don't include it it's going to give us a warning in the console. So I'll leave a note here, just so if I see this 10, this magic number here, I'll know why it's there. Now that I have my Date for now and my expiration, both as Date objects, I can compare them with a simple greater than or less than. I'll say if exp is < now, so if the expiration date is before the time that currently is now, then we want to call this.logout. We haven't written this.logout, but I know that that's what we're going to want to do. We'll get to that in a second. Else, so if the expiration date is actually more than now we want to return true. Here on line 47 I should say return false. Because remember, we want our isCurrent function to give us the answer of is this expiration date current. So it should log us out and return false, or it should just return true. The last two functions we're going to write are a little bit shorter. The next one is called getToken. We'll call this whenever we need access to our token. At the beginning of it we'll initialize a variable that is equal to our token using the getItem method on localStorage, and then we'll say if this.isCurrent, so we want to know is the token current, and there is an idToken, so we're asking is there an idToken and is it current? If there is, then return the idToken. Else localStorage.removeItem idToken, and localStorage.removeItem expiration. We're saying if it's not current and there is an idToken let's just be safe and clear out any items that might be in there. And we should also return false. Our last function we're going to call here in the class is the one that we referenced earlier, and it's called logout. Here we can just copy and paste some lines from 58 and 59, because that's what we're doing, we're making sure that all the information is taken out of localStorage and then just for good measure we're going to call something called location.reload. The location object is made available to us by our browser and reload says just refresh the page. So when our user presses logout we want to refresh the page and make sure everything's taken out of localStorage. We'll save this and now we've got a functioning auth class that's going to manage our authentication throughout our application. "

## Relay authorization headers



"- [Instructor] In the last video, we started to create our auth class. We're going to use that when we go to log in. We do need to configure a few more things about our application though. Before we connect to the relay server you need to take that token that it's going to be getting from auth O and then putting it in local storage. It needs to use that and include it in the header when it makes a request to graph that cool. Let's close this file now and go in to our index.js file in source. This is where we are going to be making use of a few more libraries we are going to add. Let's start by installing them now. We'll say yarn add. And now I'm going to list all three of them here on one row. The first will be react relay, the next one will be react relay dash network layer. This is the library that's going to allow us to change the header based on whether or not the user's locked in. And then, we're going to use react router relay. This is going to help our application's router interact with relay. We'll press enter. Now that our new dependencies have finished installing, let's import them at the top of our index.js file. We'll import relay from react relay. We'll import user relay from react router relay. And then we're also going to import relay network layer and URL middleware from react relay network layer. And finally, we're going to bring in our relay API from config slash endpoints. If you don't remember, this is the URL for our relay API that we added way at the beginning of the course. We're now going to create a function called create headers. We'll use the arrow function. We'll end our code brackets. Now in my create headers, I want to be able to have access to the ID token that's going to be in local storage. To do that, I'm going to need to get the auth classes get token function. Before we can import auth though, into this index.js file, we need to make sure that auth is correctly being exported in its file. We're going to open ID up. So we're in auth in utils. But we see here in auth.js even though that we've created this auth service class, we actually don't have anything that we're exporting. So I'm going to scroll down to the bottom and we're going to say const auth equals new auth service and we'll make it a function so that we get a new instance of auth service. And I forgot a T here. Great. And then finally at the very end we'll say export default auth. That means that we can access this auth from any one of our other files. We'll save that. And then index.js here on line nine we'll import auth. Import auth from period utils, the path to it, and auth. Now in create headers, we can say let ID token equal auth dot get token. If you remember from our auth class, we have the function get token, which is going to provide us with an ID token or if there isn't one, it will give us false. It's also going to make sure that our token isn't expired. Now, I'm just going to do an if else statement. And I'm going to say if there is an ID token let's make a header that's named authorization. And this authorization header is going to be set equal to bearer. And then our ID token. And then here on line 14, our authorization header is going to be equal to a template literal which will include our ID token after the word bearer. Next we're going to have our else statement. And we're going to say, if there isn't an ID token, just return an empty object. This create headers function is going to be called now when we set up our relay network layer. Let's start by doing that. I also want to take a second to point out right now if some of this code seems a little bit confusing, if you're not sure why we're doing it, I want to tell you, don't worry. This code is a bit boiler plate, which is to say, we should only be writing this once and then we can set it and forget about it. We've made our create headers function, and in the next video, we're going to configure our network relay layer. 





## Injecting the Relay network layer



> Tutorial falls apart here at Ch.4.3 because the code in the Tutorial is based on react-relay version ~0.1.0.  Solution: install react-relay modern (version ^1.0.0) but import classic
> ```javascript
> import Relay from 'react-relay/classic';
> ```



"- [Instructor] Now let's inject our relay network layer. We're going to say Relay.injectNetworkLayer. We're going to say Relay.injectNetworkLayer. And we're going to create a new RelayNetworkLayer. And we're going to create a new RelayNetworkLayer. I see here that this auto corrected to a lowercase L, which made me realize that I forgot to put the uppercase L here on line 7. Now back on line 21 we'll continue with our network layer configuration. RelayNetworkLayer accepts an array. The first one that we're going to pass it is a urlMiddleware that we imported above. This is going to take an argument of URL, which will be a function and it's going to pass along our relay API. If you remember here on line 8, we took the end point that is attached to our relay API. This is essentially saying okay, as part of our relay network layer we need to know where our relay API is. This is what's providing at that. The next thing we're going to do is we're going to tell our middleware to continue on with next and we're going to say look at the request and then once we're looking at the request we're going to look at its headers. And we're going to say let's set these request headers equal to contain all their original headers so we're using this spread operator to say all the original headers make sure you stay here in the object. And then we're also going to say, return any new headers that are being created by create headers. So we're going to use the spread operator again with these ellipsis, and we're going to say create headers. And call the function. Then at the end of this code block, we're going to say return next and pass along the request. we're going to say return next and pass along the request. We'll add a comma here on line 31 and we'll add another comma after the bracket on line 32. and we'll add another comma after the bracket on line 32. And then I'm going to include one more object that will help us with our configuration and I'm going to say, disableBatchQuery. and I'm going to say, disableBatchQuery. We'll set that equal to true. We're not going to go into any more about what that does, but I encourage you to look at relay network layers configuration options and also to learn more about relay and see about some of the cool optimization things you can do to batch your queries. The last few bits of code we're going to do during this configuration video is to add an environment prop and a render prop to our router. Let's do that now on line 37. Here on line 37, we're going to Here on line 37, we're going to say environment equals Relay.Store. say environment equals Relay.Store. Relay works off of a state management tool called flux, which means that relay's going to be keeping check of all of the information that our app needs. And it's also going to be checking to make sure it's up to date. We'll specify Relay.Store as the environment props for our router so that it'll know to look there for its information. Next we're going to tell our router what to render. And we're going to say applyRouterMiddleware And we're going to say applyRouterMiddleware and we're going to make sure it knows to use Relay. Okay, we finished with our configuration and now let's just make sure our application starts up. We haven't made new changes to our actual site so if this works we should just see our site as normal but with no errors. I see that I'm getting a few errors here. It looks like I forgot to bring in applyRouterMiddleware, which I made use of here on line 38. I needed to bring that in from react-router. Let's get applyRouterMiddleware there. And then I see that I also have misspelled useRelay as userRelay here on line 6. as userRelay here on line 6. Let's fix that. And finally I see that we made one other small typo, right here we forgot to add a dash. And let our application recompile. I see that the error here is a silly mistake. We forgot to return this as an object. So we need to say return this object and then we'll take authorization and Bearer from line 17 and copy and paste them onto 15. We can also delete line 17. Now our create headers is returning this sort of object it wants. Wonderful, now we're getting the success message here in our console. And when we open up our browser, refresh the page, we see that things are working as normal, just the way they should. This video's an important reminder that it's always useful to use the console for debugging. Don't worry, bugs aren't going to come up. Read what's in the console and try and fix it. These will happen to you. Just be patient and you can fix them. "



## Setting up models on Graphcool



**This chapter is about setting up the models on GraphCool**



In our last video we injected our RelayNetworkLayer in index.js. In this video we're going to create the database models we'll need for TicTacTuring using graph.cool's console. If you've created databased models before with either an ORM or through SQL directly you should have a good understanding of some of the strategies we'll be using. If you're new to databases you should find graph.cool's interactive displays of our data as tables with columns and rows relatively easy to work with. Once you've logged in with your graph.cool account navigate to your TicTacTuring project. You should see two automatically generated models on the left, File and User. I've thought a bit about the best way to start our application's data and I've decided that we should create just one more additional model called Game, which will be used to store information about a user's record of games. I'm going to click on the plus sign here next to Models, which will create a new model, and I'm going to put in the name of my model, Game. If you're an expert with relational databases you might be scratching your chin right now thinking, I'm not sure that's the best way to structure your data. And you might be right. I can see why I might want to create an additional model called move that belongs to Game, but for the purpose of getting to VIP I want to reduce complexity. I think just having one additional model, this Game model, is going to help speed things up in the short run. Now that I've created my Game model I can begin to build relationships between my models. For instance, I know that I'm going to want a one to many relationship between Users and Games, that is to say each user will have participated in many games, but each game will only belong to one user. To create my new relation I'm going to click on this yellow New Relation button. I can select the models that I want to be related, so I want one User to be related to many Games. And then I get to select the names that I'll add to these related fields. So I want the related fields under User to be listed as p1games. I'm using plural here, because each user will have many games that they've played as player 1, I say p1 to reference player 1. I imagine eventually I'll have p2games, because a game will be played by two users, p1 and p2. But since right now I'm only letting users play against machines, against the computer, I only need to make a p1games field. On the same side under Games I want to say p1player. So each game will have a p1player field that corresponds to one user. Now that I know the two models that will be related and the name of each of those two fields that will define their relationship I can set a name for this relationship. I'm going to call this Player1Games. This is a relationship between Player 1 and their Games. I'm going to write a short description now about my Player1Games relationship. This will appear in my Relay schema or in my Playground in the docs that are generated there. Then I'm going to save my changes. And when I go to User model the p1games field appears. In the future I'll probably want to make another one to many relationship from User to Games for the second player who would play, but since right now I'm limiting functionality and only allowing one user to play against computers I don't need to worry about that. Next, I want to make a field that will keep track of player 1's guesses and whether or not that guess was correct. This doesn't need to be a relation, it can just be a field. I'm going to call this p1Guess, and I'm going to make this Enum. An Enum allows us to provide a number of different preselected options. I'm going to say Robot and Human. So these are the two guesses that player 1 could make, they could guess that their opponent was a robot, or they could guess that the robot was human. I'm going to say that this field is required, I'm going to say that it's not going to store multiple values, and I'm not going to provide it with a Default value. The next field I'm going to create is going to be called p1GuessCorrect. And this is where I'm going to store whether or not player 1's guess was correct. I can make this a Boolean, I can say that this field is required, it doesn't need to store multiple values, and it doesn't need to have a Default value. The last field I'm going to create is going to be one more relationship. This one's going to be called Winner and it's going to be a one to many relationship. The two models that are related are going to be User and Game. Once again, we're going to be saying one user could be the winner in many games, and each game will only have one winner. I'm going to name these related fields, I'm going to say winner, this is the field that will appear beneath user, and it will list all the occasions in which they were a winner. And this is the field that will appear beneath Game. And this is also going to say winner. I'm going to give a name to this relationship. And I'm going to provide a short description. Then I'm going to save my changes. Now that we're finished figuring our Game model we're going to go to User and make one change there. On the User model we're going to Edit the Schema and we're just going to set it up so that it accepts an email field, because when we have users log in we're going to want to keep track of them based on their email. This email field will be a String, it will be required, it won't store multiple values, and I won't have a Default value. We'll create it. And now we're ready to go change our Permissions. We'll go to the Permissions tab here on the left and we'll begin to change the Permissions for user. We'll press New Permission and we'll say on Create Node we want to Apply it to the Whole Model, and we want Everyone, even people who aren't authenticated, to be able to create nodes, so to create users. If your Permissions have a different default value or if the graph.cool interface has changed a little bit, just remember the point right now is that we're trying to remove all Permissions barriers for User and Game. So just make sure that your User and Game models have the lowest level of Permissions. We'll create that and then we'll add another Permission. This time to Delete Nodes, we'll say Everyone can do that. Once again, we'll create a New Permission, we'll say that Everyone will be able to view users, we'll Apply it to the Whole Model, we'll let Everyone do it. Finally, we're going to make another Permission that'll allow all users to Edit Data, regardless of whether or not their authenticated. Once again, I want to say that for your app you might want to change Permissions. These are the broadest Permissions available, but this is going to just make things easier as we do our early development. The last thing we're going to do here on graph.cool is we're going to configure our Permissions, so that it's ready to use Auth0. To do that I'll navigate to the User model, and then here in the upper right hand corner I see a Configure Auth Provider button. I'm going to click this. And since we're going to be using Auth0 for our authentication I'm going to click on this Auth0 tab. And I'm going to follow the directions that will allow me to configure Auth0. To do this I'm going to need some of the information from my Auth0 dashboard. First I need to put in my Domain. I can go to Auth0, I can copy and paste my Domain, navigate back to graph.cool, copy and paste this in. Next I need my Client ID. I'll copy this from my Auth0 dashboard, put it into graph.cool. And then I'm going to need my Client Secret. On Auth0 you can find that here. Be careful, if you're using GitHub or another remote repository you want to make sure that you keep your Client Secret safe. Don't expose it to anyone. I'll copy it and paste it here. This is a safe place to keep my Client Secret, this won't be exposed to users or other developers, but you do need to be careful when putting it into anything that might get deployed to a remote repository. I'll press Enable. I now see that my Auth0 is active. I can press the X at the top right. "

## Viewer queries and Relay containers





To understand GraphQL and Relay better:

[Do the Facebook tutorial](https://facebook.github.io/relay/docs/tutorial.html)

[Do the How to GraphQL tutorial](https://www.howtographql.com/react-relay/0-introduction/)



"- [Instructor] In this video, we're going to add Relay containers to our profile and TicTacToe containers. This will allow us to start to access the data in our Relay store. There are two steps we need to take to do this. The first will be to specify our viewer queries in our routes file. A bit of background on Relay if you're not sure what I'm talking about when I say viewer queries. Let's navigate to our graph.cool playground and see what our Relay schema looks like. We can see it here on the right in Docs. Traditionally, a relay schema will be organized around a central query, which is called viewer. One way of thinking about this is by imagining that every query a user will make through our site is defined by who they are, or who the viewer is. This way of organizing your data is especially useful for applications which want to ensure that users only have access to certain pieces of information. React Router Relay asks that we specify which query each route will need so that Relay can ensure that their information is available before it renders the route. In Atom, let's open up routes, index, and we'll see the routes that we have here. In our source index file, we've brought in React Router Relay, which means that each of our routes will have access to a new prop called queries. We're going to write our viewer query now, which will be provided to each of our routes. Here on line six, I'll press Enter. And on line seven, I'll start creating my viewer queries. I'm going to say: const ViewerQueries equals. I'll make an object. What I'm saying here in this ViewerQueries object is that I want to make sure each of my routes has access to an object called viewer and that that viewer will correspond to the query of viewer in my Relay API. Now, if this Relay syntax or the idea of queries seems foreign to you, or if you've never worked with GraphQL syntax, you should check out these websites. The first site that I've found helpful is GraphQL's site. All of your Relay queries and Mutations are going to be written with GraphQL syntax, so if you're not familiar with that, that's definitely a good starting place. The next site that's definitely worth checking out is Facebook's own site, where they describe how to get started with Relay. They've got a few great tutorials, and they describe some of the most common scenarios which you'll encounter. Lastly, I've had a great experience with learnrelay.org, which is a site created by graph.cool. They walk you through all of the bits of syntax that you need to know to create a basic Relay site. Now that we've created our viewer queries, we're going to pass them under the query prop to each of our routes. Here on line 16 I'm going to say query equals ViewerQueries. I'm going to copy this. I'm going to paste it onto line 20, beneath my TicTacToe IndexRoute. And then I'm going to paste it again here on line 25 beneath my profile route. To recap, we're making sure that each of my different routes has access to ViewerQueries. The last step we need to take is to ensure that each of these routes also has a Relay container attached to it. The syntax we'll be using to create each of these queries will be the same. So I'm just going to make one for my Template component and then copy and paste it into my TicTacToe component and my Profile component. Let's navigate now to our Template container. We're going to create a Relay container here at the bottom where we were exporting our default Template. In line 28 I'll write export default Relay. And now I'm going to make use of the Relay library. I need to make sure to import Relay at the top of my page. I'll scroll up to line six. I'll add an Enter space. And I'm going to say import Relay from react-relay. Now that I have Relay, I can make use of it down at the bottom. I'll continue on line 29: export default Relay. And I'm going to call createContainer. The first argument to createContainer is the component that I want to be attached to this container. In this case, we're in our Template file, so that component will be Template. The next argument is an object, which is going to specify which fragments will be provided to this Template container. As you recall, in our router, we said that this is going to have the viewer fragment, or the viewer query. Now I'm going to write another piece of Relay query language. This takes place in a template literal. This is the last argument I'm going to be using in this createContainer. So I'll end it with a comma there. Even though we said up here that this is a fragment, and that is a fragment on viewer, we're going to say that also in the Relay query language. We'll say fragment on Viewer. We'll create a bracket. And now what we're writing here is normal GraphQL syntax. Beneath the fragment on Viewer, I'm going to request an object that I know is being made available to us by graph.cool. This is user with a lowercase U. When I say user with a lowercase U, I know that graph.cool is configured to give me back myself, or the viewer who's currently using the site. So when I say user and I specify ID, I know that my Relay container is actually going to be provided with the user who's currently working with the site and their own ID. This will be helpful when we want to sign Mutations that this user is going to do acting as themself. That's all we're going to specify to create container right now. Another helpful fact that we'll make use of later is to know that if there is no one signed in, then this user ID will come back as null. So when our container goes and says, \"Hi, I'd like to get the user who's currently working\", if there isn't one signed in, it will just send us back a null. Now we're going to take this container that we created. We're going to copy it, lines 29 through 41. And we're going to add these to Profile and TicTacToe. Let's save this file. We'll open up Profile. Here on line three we need to make sure we import Relay from react-relay as we did in Template. I'll delete this extra Enter, and I'll save. I'll go down to the bottom. Here on line 86 I'm going to change this to the value that I copied and pasted in Template. I need to make sure that I change here, where I specify Template, to Profile, because we're in our Profile container. I'll save this. And it's fine that I just ask for who the user is. We're going to expand on this later. Now, I'm going to do the same thing to TicTacToe. On line four, I'll import Relay from react-relay. And then I'll scroll all the way down to the bottom. And on line 154, I'll copy and paste the same thing that I copied and pasted before, changing Template now to TicTacToe, because I'm in the TicTacToe container. Once again, I'm providing this with the user information on the viewer query. Now that I've finished implementing my last Relay container, I'm going to check to make sure I don't have any errors in any of my files. It looks like here in the console I'm getting the error that says, \"'Relay' is not defined\". And I see that this is taking place in source routes index dot js. It looks like we forgot to import Relay into our index file. So we're going to go here into routes, index.js. And yeah, it looks like I'm making use of Relay here on line eight, but I never imported it at the top of the file. On line six we'll do that. Import Relay from react-relay. I'll save my file and restart my terminal. You'll notice here how I'm going to shut down my dev server and start it up again. Even though Create React App is configured to watch for changes in our files and then restart the server with any new additions, it doesn't always work every time. So if you make a change, and if you think that what you're seeing in your terminal doesn't quite make sense, try restarting it and looking at it again. We fixed our mistake where we forgot to import Relay here on line six. And it's good that we're not getting any errors here in our terminal. But we should also open up our browser and see if we're getting any errors there. I'm going to refresh the page. And when I look here in my developer's console, I see that RelayContainer expected prop viewer to be supplied to Template and also to TicTacToe. So I think we're making a mistake when we provide our viewer query. I'm going to navigate back to my index.js file under routes. And I think I know what the problem is. I just made a small typo here where I said query, when this should be queries. We're just going to fix this typo and save our file. After our server restarts, we'll go back to Chrome and refresh the page. And great, now we're not getting that error in the console anymore. Another cool thing we can look at is, we can see here in our Network tab in the developer tools, here we can see the response we got back from our Relay API. It knows that we made our viewer query, so it gave us back the viewer object. And then, since we don't have a user logged in, it returned null. All right, I think things are working the way we want them to. "





## Creating user mutation

"- [Man] In the last video, we created our viewer queries and passed them through our routes. We also added relay containers to each of our react containers, profile, tic tac toe, and template. Now we're going to be making our mutations. We'll use these for authentication and later we'll add them to our auth.js file. But first we need to create the mutations. I'm going to close these files 'cause we won't be working in them now. Then beneath source, I'm going to create a new directory. I'm going to call this \"mutations\". This is where I'm going to keep all of my relay mutations. Once I've made the mutations directory, I'm going to make my first mutations file. I'm going to call this one \"CreateUser\". I know during my authentication process I'm going to want to be able to create a user on my graph.cool site. So I'll name this file \"CreateUser.js\". At the top I'm going to import relay from react-relay. And now here on line three, I'm going to create my mutation. I'll walk you through the syntax if you haven't done it before. The resources I gave in the last video will show you how to do this if you're not familiar and you want to learn how. Here on line three I'm going to say export, default, class, CreateUser, and I'm going to say this extends Relay.Mutation. To summarize, I'm saying I want to create a new class that is an extension of the relay mutation class. Next I'm going to implement a function that's available to mutations. We need to make sure we have this. This is called \"getVariables\". You can think of getVariables as the place where you specify the inputs you're going to provide to this mutation. I know when I create a user I'm going to need to know their email. And I'll be passing in that email as the email prop. Next I'm going to need some information about the authProvider. If you're curious about why I'm creating this authProvider variable the way I am, I've gotten this information from the graph.cool docs. This is what the graph.cool authentication schema is expecting me to provide. So I say \"authProvider\", and then I make an object. And I know the authProvider is going to want an auth0 value. And for the auth0 value, it's going to be looking for a token. And I'm going to be providing that token as the idToken prop. I'll add a comma here. Then on line 16 I'm going to start to write my getMutation function. This is another function that's available to relay mutations. What we're specifying here is which mutation we want to access. In this case, we want to access the createUser mutation, which is available on a relay API. This createUser mutation was automatically generated by graph.cool. Next we want to specify another function that's available to relay mutations. And this is called \"getFatQuery\". GetFatQuery is going to tell our mutation what information to return to us after it's done with the mutation. So if the mutation's successful, give us back this information. We're going to write another bit of code in the Relay Query Language. If you're curious, that's what Relay.QL means, Relay Query Language. I'll close this template literal. And we're going to say when we make this relay mutation, what would we want to get back is a fragment on CreateUserPayload. Each relay mutation also defines a payload. So that's the stuff that you can get back when you make the mutation. I know we're going to want to get back user, and we're going to want to get back viewer. What we're saying here in getFatQuery is after we make a createUser mutation, we want the server to tell us who the user is and who the viewer is. The last function we're going to specify here in createUser is a function that's made available to us called \"getConfigs\". GetConfigs specifies what we're going to do with this information that we received during getFatQuery. So relay's going to give us information and now we need it to tell our local store how to handle it. In this case, we're going to say we want to use it in two different ways. Beneath relay, getConfigs, after return, we're going to make an array. We can specify several different ways that we want to use the information. And in this case we're going to use two. In the other cases that we do, we're only going to use one. First we're going to say we want to do range_add. Meaning, we want to take some of the information that we're getting back and add it to an existing range. We're going to specify the parentName as viewer, the connectionName as allUsers, the edgeName as user, and the rangeBehaviors like this. I want to pause for a second to call out that some of this syntax maybe isn't quite self-explanatory. Relay has its own specifications that it asks for when you're declaring how you want to get the configs to look. And I encourage you to go and read their documents and these things will make more sense to you. The next part of getConfigs that we're going to specify is type required_children. Whereas when we said range_add we were telling relay to look at the information we got back and add it where it fits to the allUsers connection, now with required_children we're saying we need to get this information back. And when you give us this information back, let us use it in the immediate success callback. We'll see how that works later. So beneath type required_children, we're just going to say \"children\". And now we'll specify what children we want. This is the information that we're going to make available to ourselves in a success callback. We're going to say we want a fragment on CreateUserPayload. And specifically we want to know who the user is. Okay, now we finished with our createUser mutation. I know that this maybe wasn't all the most self-explanatory syntax. Luckily we're only going to have to write this mutation once. "

## Signin mutations



"- [Instructor] In our last video, we created our CreateUser mutation. And in this video, we're going to make our SignInUser mutation. These are the two key mutations we'll need for our auth process. I'm going to go to my file tree and in Mutations, I'm going to make a New File. I'll call this SignInUser.js. One thing you'll find when you're making relay mutations is that for the most part, their syntax is the same. That means that in this file, I can just copy and paste everything and then I'll change it to suit my needs. Here in SignInUser, I'll paste everything and I'll scroll up to the top and begin to look at what I can change. All right, here on line one, I want import Relay from 'react' so that'll stay. Here on line three, instead of saying that this is a CreateUser mutation, I want to say this is SignInUser and then I can begin to change getVariables. I happen to know from reading in docs on graph.cool that we don't even need to provide an email when we sign in. Actually, we don't need to say authProvider either. All we need to specify is that we're using the auth0 strategy and then provide a token. So I can get rid of this on line seven and the accompanying code bracket on line 10 and reformat this so that it looks nice. All right, to summarize what we wrote, I'm saying when we sign in, we need to specify our idToken and I'll be providing the mutation with that idToken information as this.prop.idToken. Next, we need to change our getMutation. Right here on line 14, I'm specifying that we want to make a CreateUser mutation, but now we actually want to make a SignInUser mutation. I'll make that change. Here on line 17, I'm specifying my getFatQuery. I'm going to be asking for different information back in my SignInUser getFatQuery. So here on line 19, instead of saying fragment on CreateUserPayload, I'm actually going to say fragment on SignInPayload. And then I don't need the user back, I just need the viewer. Okay, my getFatQuery looks good. The next thing we need to change is our getConfigs. In this case, we don't need to use this RANGE_ADD so I can delete all of that. For getConfigs, we're just going to ask for REQUIRED_CHILDREN facts when we design a user. We're going to say we want type: 'REQUIRED_CHILDREN' and then when we specify those children, here on line 31, we need to make sure we're not saying fragment on CreateUserPayload. We actually want fragment on SignInPayload. And then beneath this, we're going to be a bit more specific on what we want back. For one, I know we're going to want the viewer and then beneath the viewer, we're going to want the user so who the user was who signed in. And then we're going to make sure we also get that user's id. Okay, now our SignInUser mutation should be all ready to go. Remember, if any of this looks confusing, don't worry. We should only have to write it once. "

## Adding Relay to our authentication flow

"- [Instructor] In the last two videos, we created our CreateUser and our Signin mutations. Now we need to bring that in to our auth.js file, which is here in the utils directory. We need to add CreateUser and SigninUser mutations to our auth flow. We'll start by here on Line 4 importing CreateUser from mutations/CreateUser. I'm going to copy and paste this and change it for Signin. We'll say SigninUser. And SigninUser. We'll now have these two mutations available to us in our auth file. We also need to make sure we bring in Relay. I'm going to do that at the very top of the page on Line 2. You'll see we're getting some warnings in our console, and that's because we're not making use of Relay or CreateUser or SigninUser yet, but we'll get to that. I know that we're going to want to add these mutations to authProcess, but before we can do that, I want to turn them into promises. What I mean by that is CreateUser and SigninUser as they exist now will be asynchronous, and they'll return a response either when they succeed or fail. We want to make sure that this becomes synchronous, so that when we begin CreateUser no other code will run until we're done creating the user and we know whether or not it succeeded or failed. The same goes for SigninUser. I'm going to scroll to the bottom of my auth file and I'm going to start the process of making CreateUser and SigninUser into promises. Here on Line 73 I'm going to start to make CreateUser into a promise. I'll call this createUser, but this time with a lowercase c to differentiate it from the CreateUser with a capital C which will refer to the mutation. And then I know that my CreateUser and SigninUser mutations are going to want to accept this object, which I'm going to call authFields. I'll continue with my arrow function. And now in createUser I'm going to say return new Promise. And the promise's first argument is another function which asks us to provide a resolve and reject argument. I'll make my code brace. Now on Line 75 I'm going to start the body of my promise. Now we're going to use Relay and our call to its store and the method commitUpdate to actually make the mutation. Let's specify the mutation we want to make. We're going to say new CreateUser, and this is our opportunity to pass props to the CreateUser mutation. I remember that it wants an email. That email is going to be provided to this createUser function, the larger lowercase c createUser function, as a field on authFields. So here we'll say authFields.email. And then we're also going to be able to find that ID token inside this authFields object. So we'll say idToken is equal to authFields.idToken. Next, after we've specified the props that we'll be passing to the CreateUser mutation on Line 76 we're going to specify what we want to happen on success and on failure. We're going to start on Line 80 by saying what we want to happen onSuccess. Well, the Relay docs says that onSuccess will pass us the response. So we know when we get a success callback we're going to get a response from the server. We're actually not going to do anything with this response, so in this code bracket I'm going to specify that I want to sign in our user by calling this.signinUser and passing along the authFields. Now this function on 81, signinUser, we haven't written it yet. We're going to do that next, but we can think about the way this works in our auth flow. Once you create the user we want to just immediately sign them in. Next, on Line 82 we're just going to resolve their response. Resolve is the argument that we specified here in the promise, and basically what we're saying is our promise has succeeded. We were able to create our user successfully. Next, after onSuccess we're going to specify what we'll do onFailure. Our onFailure also will give us a response. This is the function that will be called if it turns out that our CreateUser mutation failed. We're not going to do anything special other than just console.log('CreateUser error', and we'll send that response into the console. Then, to make sure that our promise still ends we're going to say reject, and we'll pass along the response. Okay, so now we have our createUser promise which we'll implement in our authentication flow. Let's make our signinUser promise. We'll start by saying signinUser, and once again, we're going to pass it these authFields. I'll use an arrow function. Then on Line 94, I'm going to do the same thing that I did up on Line 74, I'm going to return a new Promise. And I'm going to say that this function my promise receives is going to have a resolve and reject argument. I'll open up a code bracket, and now I'll once again call Relay.Store.commitUpdate to specify the mutation I want to make. Here, once again, on Line 96 and 97 I get to say what props I want to pass to the SigninUser mutation. I remember that SigninUser wants to take an idToken, so I'll specify idToken, and I remember that authFields is going to contain that idToken. Now, after my SigninUser mutation on Line 98, I'm once again going to open up a pair of brackets and specify what should happen when we have success or failure. onSuccess I want to take the response and I want to run this code. Here on Line 100 I'm saying what do I want to do now that a user sign in has succeeded? Well, I know that I want to take that idToken and the expiration, and I want to put them in local storage using this.setToken. This was a function that we created earlier in this file. Once again, we're going to pass along authFields, which will contain the idToken and its expiration. The next step, since we're in a promise we need to make sure we resolve this promise. I'm just going to pass along the response. After onSuccess, we should specify what we'll do onFailure. Once again, we have access to response, and in our code brackets here we can say what we want to do if there's failure. I'm just going to reject the promise and once again pass along the response. Let's press Save and see what happens in our console. Great, it looks like everything is running. Let's scroll back up to authProcess so we can add these two promises into it. Remember, authProcess here on Line 24 has access to authResult. I know what the authResult object looks like, so I'm going to show us how to get the necessary fields out of it. First, we're going to disassemble an object called authResult.idTokenPayload to get the email of the person who is signing in, and also the expiration date of their token. We also want to get the token itself. We're going to initialize a variable called idToken, which I know we can find from authResult.idToken. Now we're going to use this email, expiration, and idToken in our SigninUser mutation. So we'll say this.signinUser, and we're going to pass it an object which we were recently referring to as authFields. So we're going to say idToken, email, and exp. Those all need to get sent to signinUser as this one object. Then, since we know that signinUser is a promise, we can make use of then. Then lets us say okay, once signinUser is finished let's do this, and we're going to say if it succeeded, so on success, we're just going to be happy and return success. Nothing is going to run. Someone signed in? Great, thumbs up. But, if the signinUser failed, if it's rejected, we're going to open up a code block, and in this code block we're going to try and create a user. To explain what's happening here, if we try and sign in, so if we have an idToken and an email and an expiration date, and we try and sign in and it doesn't work, there's probably a good change that that's because the person hasn't been created as a user yet. So once again, we're going to pass along the idToken, the email, and the expiration. Hopefully now this will successfully create a user. We're going to react to it if it doesn't. So if our signinUser was rejected, then we want to go ahead and create a user. Now remember, when we made the createUser down below we said after you create a user if that succeeds then sign in the user. So we don't need to do anything in the .then here on Line 41. Alright, now our authentication flow should be all finished. We should be able to plug this into our site. "



# 5. Creating Components

## Creating an authentication button



> Login fails.  New user do seem to be created.  The auth0 console seems to indicate that users are logged in.  The following observations deviate from the tutorial:
>
> 1. There is a fatal error that can be fixed by turning off OIDC Conformant switch on client/advanced settings/auth0.
> 2. issue with callback url requiring the addition of the profile url on the auth0 console...
> 3. The login screen doesn't look the same as in the tutorial
> 4. Either Auth0 or Graph.cool have moved on since the course code, or both...
> 5. Possible fix, work through [Do the How to GraphQL tutorial](https://www.howtographql.com/react-relay/0-introduction/)



It looks like the `mutation CreateUser` is failing but it also looks like Auth0 is returning a user email and an idToken

Troubleshooting:

Is the Graph.cool db set up correctly





@ components/NavDrawer.js

Here, at the top of Nav drawer, on lines 34 through 42, we see this placeholder login container that we made. Let's go ahead and make a component AuthButton that we'll replace this with. 





On the left hand side here, I'm going to make a new file, I'm going to call it AuthButton.js. 

```bash
touch components/AuthButton.js
```



I'm going to go back to Nav drawer, and I'm going to delete lines 34 through 42, and I'm going to add AuthButton here. 

@ components/NavDrawer.js

```jsx
    render() {
      return (
        <div>
          <NavToggleButton
            toggle={this.toggle}
            width={this.state.width}
            open={this.state.open}
          />
          <Drawer
            open={this.state.open}
            width={this.state.width}
          >
            <AuthButton
              auth={this.props.auth}
              authenticated={this.props.authenticated}
            />
            <Divider/>
            
            
...
            
            
          </Drawer>
        </div>
      )
    }
```



I'm also going to make sure to go up to the very top of this file and import it. 

```jsx
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'
import AuthButton from './AuthButton'
```



You'll see in the console you get an error, AuthButton is not defined. We'll say import AuthButton from and since AuthButton is in the same directory as components, we only need to do a singe period. I'll save it. 



Now in AuthButton, we can start to create it. 





First I'm going to import, react, from react. And then I know I also want to make use of a material ui component called RaisedButton, from material ui/RaisedButton. 

@ components/AuthButton.js

```jsx
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
```



I'm going to remember to export it here at the bottom. 

@ components/AuthButton.js

```jsx
export default AuthButton
```



Now I'm going to create the AuthButton itself. We'll say, const, AuthButton, and I'll pass along the props that are given to AuthButton, I'll open up a code bracket, and when I think about my AuthButton, I want it to look two different ways, depending on what the application state is. If the user's logged in, I want it to present them with a button that says, log out. They will have log out functionality. But if the user isn't logged in, I want it to present him with a log in or sign up button. 

We'll start by saying, if, props.authenticated, so we haven't passed this authenticated props to off button yet but we're just imagining that that's where we'll hold the data that says whether or not someone's logged in. 

And inside this if statement, we're going to say okay, if we are authenticated, return the following component. 

Return a RaisedButton, I'll end I'll close my RaisedButton brackets, and I want my RaisedButton to have the following properties. I want it to have a label that says log out, on Touchtap I want it to make use of auth.logout. Once again, I haven't given it this auth object yet, but I'm pretending I will in a little bit. 



Next, I know that there's a styling property that's available to RaisedButton, and I'm going to say full width, this is going to make it so that our button takes up the whole width of the drawer that it's in. 

Next I'm going to say I want this RaisedButton to have secondary styling, so I'm going to say secondary true. 



If you're not familiar with these PC syndex, whenever you pass a prop that you just want to be known as true, you can just say the name of the prop. 



Here on line 14 I'm going to finish my if l statement with the else clause, so we're saying, if we're not, authenticate it. We want to return, once again, our RaisedButton, but this time we want the label to say login/signup. Because this is the button the user will be clicking so that they do log in or sign up. 





Next we're going to give it the onTouchTap functionality. And instead of logging out, since we want it log in or sign up, we're going to make use of our off classes, showlock. 



Once again, we're going to give it the full width prop. And instead of the secondary styling, we're going to give it the primary styling. So we'll say primary equals true, or in this shorthand, just primary. 



Good, and remember at the bottom to export our off button. 





@ components/AuthButton.js

```jsx
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = (props) => {
	if (props.authenticated) {
		return (
			<RaisedButton
				label='Logout'
				onTouchTap={props.auth.logout}
				fullWidth={true}
				secondary
			/>
		)
	} else {
		return (
			<RaisedButton
				label={'Login / Signup'}
				onTouchTap={props.auth.showLock}
				fullWidth={true}
				primary
			/>
		)
	}
}

export default AuthButton

```









We'll restart our server and we see that everything's working fine. But I know that if I go into our browser, we're going to have an error, because our off button is trying to make use of this showlock and log out functionality, that it doesn't yet have access to. 

To pass along this auth object to our AuthButton, we should go all the way up to our router. Now, maybe you're thinking, what about if we just imported auth here at the top of AuthButton. And that's definitely something we could do. I'll tell you that would work, but when I think about the way I'm connecting data and functionality to components and when I try and make my application understandable to other developers, I don't think it would make sense for me to import and important piece of functionality, like auth, here inside AuthButton. 



Instead, I'm going to get all the way up in routes, I'm going to open up index.js in the routes directory and this is where I'm going to import auth, from, utils, auth. 







And now I'm going to pass it down, down into my template then into Nav drawer, then into the AuthButton. Here, I'm template, I'm going to say, auth=auth, so I'm passing auth as a prop and I'm giving it the value here of auth. 

@ routes/index.js

```jsx
const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      queries={ViewerQueries}
      auth={auth}
    >
      ...
```





Now that I've passed auth as auth to the route for my template component, I'm going to go into my template component and pass it along to Nav drawer. Here I'm going to scroll down to line 16 where Nav drawer's located. This is where I'm going to pass along auth down to Nav drawer. I'll just say auth=this.props.route.auth and note, all the props that I pass to their parent route are available here under this.props.route. I'll save this file 



@ components/Template.js

```jsx
class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer
            auth={this.props.route.auth}
            authenticated={this.props.viewer.user}
          />
          ...
```





and now we'll go into our Nav drawer.js file. Here in Nav drawer.js, I'm going to scroll to line 35 and here on line 36 I can just once again pass along auth, that's now available as this.props.auth. 



@ components/NavDrawer.js

```jsx
    ...
    
    render() {
      return (
        <div>
          <NavToggleButton
            toggle={this.toggle}
            width={this.state.width}
            open={this.state.open}
          />
          <Drawer
            open={this.state.open}
            width={this.state.width}
          >
            <AuthButton
              auth={this.props.auth}
              authenticated={this.props.authenticated}
            />
            
            ...
```





One other thing I need to think about, in AuthButton I'm looking to see whether or not the user's authenticated, and I'm reading this prop called authenticated. 

@ @ components/AuthButton.js



```jsx
const AuthButton = (props) => {
	if (props.authenticated) {
      
      ...
```







As you maybe remember when I'm in a relay container here I am again on template.js down at the bottom I said, if I can read a user if the user value is not no, then I know our user is logged in. 

If it is no, then I know that there is no user. We're going to use that information and pass it to Nav drawer which will in turn pass to AuthButton, so that AuthButton knows whether or not someone's logged in. 

Here on Nav drawer we'll say, authenticated=this.props.viewer.user 



to recap what we're saying, is we're saying, pass along true if this.props.viewer.user is true so if not, no. And pass along no, if this.props.viewer is no. 

No is going to read as false and a value is going to read as true. 

Next we'll go into Nav drawer and we'll pass this along authenticated=this.props.authenticated. So we made authenticated available here in Nav drawer and we're just sending it along to AuthButton. Let's save. Now we should have our AuthButton set up, let's go to the browser and see if everything works. Awesome, our button's here in the top left and when we press it we see the Auth lock show up. "



## Creating a Turing test



In the last video, we got our Auth button working, and when we clicked on it, our Auth log showed up. Now, we need to make sure we go to our Auth0 management dashboard, and reconfigure one more setting. 

We'll go to clients, we'll go to TicTacTuring, and now, here, we need to make a few changes. You'll see I have this option to specify allowed callback URLs. 

Auth0 uses this field of allowed callback URLs to make sure only certain sites are allowed to authenticate users. In our case, we need to make sure that localhost 3000 is in this list of allowed callback URLs. So, I'm going to put in http localhost 3000. 

I'm also going to add this as an allowed logout URL, and I'm also going to use this under allowed origins, and then I'm going to save these changes.



Once you deploy your site to Heroku, you'll want to make sure you also add your Heroku domain here under callback URLs, logout URLs, and allowed origins. Otherwise, you'll get an error when you try and log in or log out from that URL. 



Let's go now to our site and see if everything works. We'll click on the login and signup button, the Auth lock will show. 



I'm going to create a new user, I'll enter in my email, and a very secure password. I can see now that the buttons changed to pink, that secondary color, and says logout. 



So, it looks like my app thinks I'm logged in. I can also see here in the console that it attempted to sign in the user, but then it failed, and so it tried to create a user, which I think succeeded, because then it signed in a user. 

We can look here in the developer console at a network cause to see if we got in our user information. I'm going to look at two of my most recent EPI transactions between my application and the relay PI. I'm going to expand my console here, so we can look at it. 

This is the response to our create user mutation, it looks like we successfully created a user, and we got back the ID. When I scroll down to the next one, I can see that this was the response to a sign in user mutation, and once again, we got back the user ID. 

This would explain why we have our pink logout button at the top. 



**Turing Test**

Now that we know that authentication button and our authentication process is working, let's add the Turing test to our game. If you remember, here in our game, after they finish, we want our users to be able to guess whether or not they're playing against a human or a robot. 

Let's go to our code, now, we'll navigate back to Atom, and here I've opened up a file called TuringTest that we've put and styled. We want to save you some time, so you can just use this to build your Turing test. I'm going to run through it quickly so you know what's going on in here. 

We're bring in React, we're bringing in that blue cyan color that you maybe noticed on the button, we're also bringing in styled from styled components, and we're bringing in a Raised Button. 



Then, we're creating a styled div called container, which is going to hold our Turing test. Then we have a styled span, which we'll use for the question. We have another styled div that will hold our answers, and then here is the component TuringTest, which accepts props, which will be exporting as our default Turing test. Here, you can see that we're posing the question, and then we have two answers, both of which are Raised Buttons, and each of which makes use of our record game function, which they expect is props. Now that we've looked over TuringTest.js here in styled, let's go to our TicTacToe container. This is where we're going to be implementing our Turing test. We'll start by importing at the top on line five, we'll say import TuringTest from, two periods, styled/TuringTest, save. And, we'll see we just get a warning because it says the Turing test is defined but never used, we're about to change that now. Now, we'll scroll down to the function that we wrote earlier that says Turing test, we did this as sort of a filler. We made a function here, and we want this to control when to show our Turing test. Now, remember, we only want to show our Turing test if the game is over. Luckily, we put a variable in state that tells us exactly when the game is over. I'm going to open up an if statement, and I'm going to say if this.state.game is over, and then we're going to open up a code block. If the game is over, then return our Turing test component, and here on 112, I'm also going to make sure the Turing test has access to this record game function that we sketched out below, but we haven't done anything with yet. All right, so I'm going to save my file. And we see that I'm not getting any errors any more. Now, let's go ahead and make this record game function. We're just going to sketch in console.log to guess, and we know that record game is going to take in a guess as an argument. Now that we've created our record game function, we have one last step, we need to make sure that we're putting Turing test beneath our render function, so it actually gets called when state changes. We'll scroll down, and here, after stage, on line 156, we're going to open up a code block, and we're going to make a call to this.turingTest, and since this is a function, we want to add the parentheses at the end. We'll save this, and once we see that our development server has restarted, we'll switch over to our browser, we'll minimize our drawer, and we'll play a game against our AI. Whoa, our AI is pretty good, oh man, we can't beat it. Okay, so now we get to make a choice, was our opponent human or robot? Honestly, I was pretty impressed with that game, and so I'm going to say that this was a human. And here, in my console, I see that my choice was logged. I can also test to make sure that the robot logs, too, good. Now, our last step is we need to make sure that our choice and our game record are recorded in our graph.pool database.



@ styled/TuringTest.js

```jsx
import React from 'react'
import {cyan500} from 'material-ui/styles/colors'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

const Container = styled.div`
  left: 0;
  right: 0;
  width: 400px;
  height: 200px;
  margin: auto;
  position: absolute;
  top: 200px;
  text-align: center;
  background-color: ${cyan500};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`

const Question = styled.span`
  font-size: 25px;
  display: flex;
`

const Answers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  width: 100%;
`

const TuringTest = (props) => {
  return (
    <Container>
      <Question>Was your opponent human or robot?</Question>
      <Answers>
        <RaisedButton
          label={'Human'}
          onTouchTap={()=>{props.recordGame('HUMAN')}}
        />
        <RaisedButton
          label={'Robot'}
          onTouchTap={()=>{props.recordGame('ROBOT')}}
        />
      </Answers>
    </Container>
  )
}

export default TuringTest

```



## Recording the game

In the last video, we set up our Tic Tac Toe container to show the Turing Test once the game was over. Now we need to make sure that the Turing Test disappears after the user makes the choice and we need to make sure that their choice and the game information is recorded in our graph.cool database. 



To do that, we're going to make a new Mutation. I think we want to use a CreateGame Mutation. 

@ mutations

```bash
touch CreateGame.js
```



I also said that a lot of times these Mutations tend to be similar. So we're going to go to our CreateUser Mutation and copy and paste most of this to help us. 

I'll select all of it and I'll copy it and then I'll close this file and I'll paste it into CreateGame. 

I'll scroll up to the top and I'll start to change the information that I don't need. For one, I know this shouldn't be CreateUser, this should be CreateGame. And now I need to think about what kind of variables I'm going to need for my CreateGame Mutation. Hmm, what do I need in terms of variable for my CreateGame Mutation? Well to aid me, I can go to the playground on my graph.cool console. I can look here at the docs on the right side and I can go to Mutation. Here I see all the Mutations that are available to me. I can look here at CreateGame and I can see what sort of inputs CreateGame wants. 

I see here that CreateGame needs to know who the user was, the P1 user, and it wants to know who the winner was and it also know what their guess was and whether or not that guess was correct. 

So I need to make sure I provide all these variables as props. I'll navigate back to Atom. I'm going to make sure now that I give p1user, and I'm going to say that I'm going to pass this along as this.props.p1user. Next, I know I need to provide a winner. I'll pass this along as this.props.winner. And then I need to provide what the guess was, so we'll say p1Guess and we'll set this equal this.props.guess. And then next I need to provide whether or not p1Guess was correct. And we'll name this as this.props.guessCorrect. Alright, let's check this again, against our docs to make sure we're giving it the right props. Yes, I have p1Guess, p1GuessCorrect, p1user, and the winner. Okay, so the getVariables part of my CreateGame Mutation is ready. 

```jsx
	getVariables() {
		return {
			p1user: this.props.p1user,
			winner: this.props.winner,
			p1Guess: this.props.guess,
			p1GuessCorrect: this.props.guessCorrect
		}
	}
```







Next, I'm going to think about what I want to put here for getMutation. This is a little easier. I know I don't want to do a createUser Mutation. I want to do a CreateGame Mutation. 

Moving on, I need to think about what I want from my getFatQuery. Well I know that we're not going to be doing a CreateUserPayload, this is a CreateGamePayload. 

And when I look at my docs, and see what is available to me in the CreateGamePayload, I see that I can get the p1user. I think we'll get that back. 



I'll navigate back and instead of user and viewer, I'll say p1user. Let's move on to getConfigs. Here on the getConfigs that I brought over from CreateUser, I'm doing both a RANGE ADD and a REQUIRED CHILDREN. In this scenario, we don't need to do the REQUIRED CHILDREN, so I can delete that. Now I'm going to begin to edit this RANGE ADD field. Alright, so I want RANGE ADD and then here, where it says parentName viewer, that's actually not right in this situation. This time we're going to be saying that our parent is p1user and then we need to specify something called parentID. In this case, it's going to be this.props.p1user.id. If you're wondering where I got that, let's scroll up real quickly to where we just declared our variables. Here I said I'm going to be passing on p1user, that will be this.props.p1user. I'll also make sure to provide p1user's ID when I do that. That's what we'll make use of here on line 31. Next, on line 32 we need to make sure we specify the right connectionName. In this case I know that it's p1games. The edgeName will be just edge and we can leave rangeBehaviors at append. 

```jsx
import Relay from 'react-relay'

export default class CreateGame extends Relay.Mutation {

	getVariables() {
		return {
			p1user: this.props.p1user,
			winner: this.props.winner,
			p1Guess: this.props.guess,
			p1GuessCorrect: this.props.guessCorrect
		}
	}

	getMutation () {
		return Relay.QL`mutation{createGame}`
	}

	getFatQuery () {
		return Relay.QL`
			fragment on CreateGamePayload {
				p1user
			}
		`
	}

	getConfigs() {
		return [
			{
				type: 'RANGE_ADD',
				parentName: 'p1user',
				parentId: this.props.p1user.id,
				connectionName: 'p1games',
				edgeName: 'edge',
				rangeBehaviors: {
					'': 'append',
				},
			},
		]
	}

}

```







We finished with our CreateGame Mutation and now we can move on to Tic Tac Toe to implement it. 

## Connecting a profile to Relay



Let's go back to our tic tac toe container. We're going to bring in now our CreateGame mutation here on line 7. We'll say import CreateGame from mutations slash CreateGame. 





Then we're going to scroll down to RecordGame, where we're going to implement that mutation. 

Here on line 120, we're going to get rid of our console log and we're going to start to name some of the variables we'll need. 

For one, I know we're going to need access to user. This is the user who's using the site. We can find them at this.props.viewer. 

Next, I know we're going to need access to relay. We can find this at this.props. A word about our code here on line 21. Remember, relay is being passed down as a prop through our router. 

Next we're going to need access to a few pieces of state. We're going to want to know who the winner is, if there was one, and we're going to want to know what our own mark was. And we can find these in this.state. 

We also want to make sure we're checking to see if someone's logged-in. If no one's logged-in, we won't have a user to provide to our CreateGame mutuation, so it'll fail. So let's make sure that there's a user available. We can say if user, then we're going to make our CreateGame mutation. Here on line 124, we should figure out whether or not we are the winner or if the user playing is the winner. We've already initialized the variable on 122 that's going to contain the winner's mark. But now we need to compare the winner's mark to our own mark. Within this if statement, we're going to say now reset winner to equal the result of this turnary operator. The turnary operator will say if winner is equal to our own mark, so if the winner's mark is equal to our own mark, then we're going to make this new winner object equal to user. So the user who's currently using the site. If it's not, we're going to reset it to undefined. So what we're saying here on line 24 is if we were the winner, then we want this new winner variable to be us, the user, and if we're not the winner, then we need to change this winner just to undefined. Next, on line 125, we need to know whether or not our guest was correct. We're going to initialize a variable called guessCorrect. And we're also going to set this to the result of a ternary operator. The boolean that we want to evaluate is the guest, remember that we're passing here, and since our opponent is always going to be a robot, we're going to say if they guessed robot, then they guessed correctly, but if they didn't, they were false. Probably in a future version of our site we're going to need to make this a bit more sophisticated. But right now it's as simple as this. Finally, we're going to do relay.commitUpdate to make the mutation. Next we're going to say which mutation we want to do. That's CreateGame: we imported it at the top of our file. And now we need to pass along the information. Remember, CreateGame is looking for P1 User, so we'll say, P1 User is equal to user. That's who we defined up here. CreateGame is also looking for a winner. That's what we defined here. So we can just use the shorthand and say winner. Next it wants to know what our guest was. We have this here as an argument to record game. So we can just pass that right along. We can see here on line 9 that guest is what we're looking for. Next we want to make sure we pass along whether or not the guest was correct. In CreateGame we're looking for guessCorrect. So we'll say, guessCorrect. Now our CreateGame mutation is ready and we can commit it to relay. We'll save our file and we see that things are working alright. There's just one last change I want to make to this recordGame function. I want to make sure I reset state to the way it was at the beginning of the game so that after we make our choice, the whole game resets. Here on line 134, I'm going to press enter. And I'm going to make a call to setState. To reset my game, I'm going to reset a couple of key variables that I defined initially at the beginning. First, I'm going to say gameState go back to being an array filled with false values. And gameOver go back to being false. Your turn should be true again 'cause we decided we're always going to go first at the beginning. Winner should be false once again. And win should also be false. So this should reset our game back to the way it was at the very beginning. Let's save this. And now we can try playing our game all the way through. And if things work correctly, our game will be recorded in our graph.cool database. We'll refresh the page just to be safe. And we'll close the drawer to the left. Let's start our game. I think we're going to beat our opponent this time. Alright, so we won. Now we get to guess: was our opponent a human or a robot? I'm going to say that this was a robot. I see here that I got an error in our console. Let's go back to my code. As I'm now re-examining my CreateGame mutation, and what I passed along to it, I can see some ways that my code wasn't as clear as I'd like it to be. I'm going to do a little bit of re-fracturing. Here on my CreateGame mutation, I'm going to be more specific. Instead of saying P1 User, I'm going to actually send along P1 User ID. And then when I think about the props that I'm going to send along, there's no sense in renaming things. I'm just going to say this is this.props.user.id. Also, I'm not going to bother sending along a whole winner object, I'm going to be more specific and I'm going to say let's send along the winner ID and we'll say we're going to send this as winner ID. Next that means I need to change something down here on line 31. Instead of saying that the parent ID is P1 user.id, since I re-fractured that, I'm just going to say it's user.id. Alright, now let's go back and change our tic tac toe container to fit these new re-fractured variables. Here on line 124 I don't want to reset the variable winner, I should actually do let winnerID, since this is the new variable we're going to be using, and I'm going to set this equal to user.id. So to recap what we just did here on line 124, we're saying let this variable, winner ID, equal to user ID if winner and own mark are the same. So if we won, let the winner ID be our user ID. Otherwise, make it undefined. Next, we need to change what we did here on line 128. We're just going to pass along user because that's what CreateGame is expecting to find. A user prop. And then instead of winner, we're going to say winner ID. Let's save things. And this should get our mutation up and running. And let's play a game. Alright, we beat out opponent and now we'll make our guess. I think this was a robot. And now we can check the console on our graph.cool site to see if our mutation was added to our database. We go to game and we'll refresh the page. Great. Our mutation has been added to our database. We're now writing the way we want. "

## Protecting routes with authentication

"- [Instructor] In the last video, we set up our application to record our games on our graph.cool database. Now we need to make sure we configure our profile page so that it actually shows us our unique user information, and not this dummy data that we filled it with earlier. Let's go back to Atom now and open up our profile container. Remember, here we're using our default props. Let's scroll down all the way to the bottom, and here on line 90 and below, we're going to start to define what kind of information we want to get back. We want our information, so we know we want it to be beneath user. It's okay for us to get ID. The next thing we'll want to get is our email. Remember, we're showing that at the top of the page. We also are going to want to get our p1games. Since p1games is going to constitute a list of games, I also need to specify how many I want. There are other options available to me. I could say first or last, but I'm going to say I just want the first 10. You'll find that graph.cool also provides you with a filter object, so you could filter these games by wins or by date. But, again, to keep things simple, we're just going to say we want the first 10. Next I'm going to open up a bracket, and now I need to use some syntax that's unique to graphql. Not graph.cool, but graphql. We need to think of all of our information as a series of nodes connected by edges. So we're going to say, under the p1games, look at all the edges. And then we're going to say we want each individual node, and on those nodes, we're going to want certain information. I think we'll want the game ID. We'll want when it was created. We'll want who the winner was, and since the winner's going to correspond to a user, we're going to want that winner's ID. Then I want the p1Guess, and I want to know whether or not p1Guess was correct. Okay, so this is the information that I want to be fetching from my relay container. I'm going to save this, and then I'm going to scroll to the top, and I'm going to set up a console log here, beneath render, so that I can see if this information is being returned to me correctly. I know that the information will be returned under this.props.viewer.user. Maybe at the beginning of this, I'll also say user, so I know what information this will be. Let's open this up in our browser, and we'll navigate to the profile page, and we'll see if we're getting the information we want. Awesome, I see that user's appearing in my console. I'm going to open up this object in explore. Good, I'm getting the email, and I'm getting my ID. I'm also getting my list of p1games, which, right now, should only be one, so that looks correct so far. Then I see the node. And I can see all the information for my game, when it was created at, what the game ID is, I can see what my player one guess was. I remember guessing robot, and I know that that guess was correct, and so it said true. Great, now we can go back to Atom, and now that we're getting this information correctly, I can delete this here on line 56, and I can begin to change the way I'm rendering this data. I know here on line 30 is where I'm making use of my records. I just used this dummy data, so let's get rid of our dummy data. I'm going to select everything from line seven to line 28, and I'm going to delete that. These are the default props I built. Then, on line eight, I'm going to change this .map function because this isn't where my data is anymore. I know on line eight I want to say this.props.viewer.user. And then it's not at games anymore, it's at p1games. And then I know that the list is actually named edges. So I'm going to be doing the map on the array, and the array is located at edges. Now, I need to rename this game here to edge, because we're not looking at each individual game in edges, we're looking at each individual edge in edges. So I'll change that. And now, at the top of my function here on line nine, I'm going to do kind of a cool piece of syntax that's going to make things easier for me. I show you how you could disassemble objects. Well, we're going to disassemble an object and also rename the piece that we take out of it. So I'm going to say let, and then I'm going to open up an object, and I'm going to say node. So, node is one of the pieces that we're going to find within each individual edge. And then I'm going to say rename node as game. And I'm going to say we're going to find this inside edge. So this syntax is a little confusing at first, but writing it this way is going to make things easier beneath our return, and more digestible for other developers as they look to see what we're doing inside of this get records function. So, I'm naming edge here on line eight to represent each individual edge in edges. Then, here on line nine, I'm saying look at each node inside that edge, and this time we're going to call those nodes game. Now, beneath this return statement, I can refer to game. We can leave key here the same, also index. And actually, here on line 16, where we say game.winner, that's going to keep working. Next, on line 19, we're saying what our guess was. We just dummied in robot for all of them, but now we can open up a code block and we can say the actual result. So we can say game.p1Guess. So now our p1Guess will go there. Next, here on line 22, we have the actual information about whether or not our guess was correct. So we can say game.p1GuessCorrect. And since I know that p1GuessCorrect is actually going to be a boolean, we can't just put it right under the dom. We should make a ternary operator. And we should say if it's true, say yes, and if it's false, say nope. Next, on line 25, we should modify our game.CreatedAt. If we leave game.CreatedAt the way it is now, it's not going to show our user a very human-friendly date. It's probably going to give it a database date object. We want to use Java Script's new Date function to make this a little bit more understandable to humans. And then we're also going to convert it to a localDateString, to make sure it matches wherever our user is located. Now we're formatting our date correctly, and there's just one more thing we need to change. Here, on line 33, we're letting email equal to this.props.user, but that isn't where it's located anymore. We should back that up to this.props.viewer.user, and that's where we'll find email. We'll save. Now let's check this out in the browser. Cool, now all my unique information as a user, my game records, are showing up here on my profile page. "

# Conclusion

# Next steps

```

```








A the moment the relay modern branch has fixes for some issues that list at startup -> roll into master and 