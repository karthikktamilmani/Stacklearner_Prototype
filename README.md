# Assignment 2

* Date Created: 10 Jun 2020
* Last Modification Date: 14 Jun 2020

## Authors

* [Karthikk Tamil mani](karthikktamilmani@dal.ca)

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this assignment and running on your local machine, you will first need to install the following library

* [Node](https://nodejs.org/en/download/)


### Installing

A step by step series of examples that tell you how to get a development env running

#### Step 1: Clone Repository

Run the following command from the terminal on your machine, to clone the repository:

```git clone https://git.cs.dal.ca/mani/a2_karthikk_tamilmani.git```

#### Step 2: Install Dependencies

Navigate into the root `a2_karthikk_tamilmani` folder and run the following command to install the required dependencies:

```npm install```

#### Step 3: Start The Dev Server

To start the app, without any complicated build steps, simply start the development sever through the following command:

```npm run serve```

#### Step 4: The Application

In the last step, open your web browser, and navigate to `localhost:3000` to view a running instance of the application. If everything went fine, you should see the following page:

![Image of App Running](/deployed_app.png)


## Deployment

The application is deployed in Heroku.

You can find the application up and running on https://web-ass2.herokuapp.com/.

## Built With

* [React App](https://github.com/facebook/create-react-app). - React Application
* [Express](https://expressjs.com/) - Web application framework - react app is served using express
* [Bootstrap 4](https://getbootstrap.com/) - Used for front-end CSS designs
* [SweetAlert](https://sweetalert.js.org/guides/) - Used to display Success, Confirmation messages
* [jQuery](https://jquery.com/) - Used for DOM manipulations

## Design justifications

* Bootstrap - There are various reasons for selecting Bootstrap over Material design. The most important factor taken into consideration was that Material design was primarily made for mobile. Since our application is focused on laptop/desktop users, this played a significant role in the decision. Some of the other factors are: the speed of development, familiartiy of Bootstrap. Refer [blog](https://flatlogic.com/blog/bootstrap-vs-material-ui-which-one-to-use-for-the-next-web-app/).
* Color Choice - **Shade of Red - Raspberry-red** - From this [blog](https://www.evinex.com/website-color-schemes/), the color red signifies passion, power and has positive effects. I wanted it to not signify danger and thereby going for a pinkish-red or raspberry red. To complement red, blue was selected to make the buttons look subtle.
* Sweetalert - Provides options to customize modals.

## W3C Compliance and Responsiveness

* The application is w3c compliant which is validated using https://validator.w3.org/.
* The application is cross-browser compliant and is responsive for all types of laptops and desktops. 

## Links to pages

* Landing page - https://web-ass2.herokuapp.com/home
* Dashboard - https://web-ass2.herokuapp.com/dashboard
* Payments - https://web-ass2.herokuapp.com/payment
* Forum - https://web-ass2.herokuapp.com/discussion
* User setting - https://web-ass2.herokuapp.com/settings

## Sources Used

### server.js

Lines 1 - 14
---------------

```
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
```

The code above was created by adapting the code in [Daniel Stoica](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae) as shown below: 

```
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});

```

- [Daniel Stoica](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae)'s Code was used because react application has issues building webpack in Heroku and hence express was used to serve the application.
- [Daniel Stoica](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae)'s Code was modified by making use of the npm build script, so that the application is build initially and is served from the built one rather than serving from the public.

## Acknowledgments

* [Logo Generator](https://text.imageonline.co/) - Used this website to generate logo for the application.
* [FlatUI Colors](https://www.materialui.co/flatuicolors)
* [Giovanni Antonaccio](https://medium.com/javascript-in-plain-english/routing-and-navigation-in-react-cffc26e8a389)'s medium blog to learn about routing/navigation in React JS.
* Inspiration - [Codecademy](https://www.codecademy.com/) and [Pluralsight](https://www.pluralsight.com/)
