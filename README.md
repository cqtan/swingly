[![CircleCI](https://circleci.com/gh/CouchCat/swingly/tree/master.svg?style=svg&circle-token=72febdd0a06420c0363a830a2fa10f0fd265c4f3)](https://circleci.com/gh/CouchCat/swingly/tree/master)

# 🎷 Swingly | Swing Dance Calendar 💃

![gh-showcase-swingly-banner2](https://user-images.githubusercontent.com/33485290/65823485-7be2bd00-e257-11e9-910c-2a934b5a308f.png)

## Quick Notes

* **Live Demo**: https://swingly.herokuapp.com/
* **PWA**: While accessible on the Desktop, it is really much meant for mobile use (Especially as a Progressive Web App).
* **Heroku (Free tier)**: Initial load takes a couple seconds (patience required but it's worth it!).
* **Firebase (Free tier)**: Because of the limited amount of requests I can make to the Firebase services, the app only serves events of the current month instead of multiple months.
* **Cats**: Contains a lot of random cat images as placeholders because why not?!

# Summary
  
The Swingly app is a prototype and alternative to the calendar found on the **SwingInBerlin** website (http://www.swinginberlin.de) for local swing social/dance events in Berlin. It has two main purposes. On the one hand, it aims to provide a more modern UI with additional features such as:

* authentication
* managing own profile
* managing own events
* adding other users in order to view their events
* setting yourself as an “interested” or a “going” guest to individual events
* filtering events of users you have added and if you are either “interested” or “going”

On the other hand, it is simply for me to familiarize myself more with the React ecosystem by focusing on the following technologies, concepts and patterns to create this prototype:

* React (Hooks) + Redux: Use only functional components instead of class based ones (except the Error-Boundary component).
* [Firebase](https://firebase.google.com/): Use Firebase services as the backend to make quick prototypes such as this one.
* [Styled Components](https://www.styled-components.com): Use CSS-in-JS
* [Reselect](https://github.com/reduxjs/reselect): To memoize expensive tasks and to simply create selectors
* [Puppeteer](https://github.com/GoogleChrome/puppeteer): For scraping data from the original website (permission asked, of course)
* NodeJS + Express: For puppeteer since there were some issues when using it with Firebase Cloud Functions
* No [Material-UI](https://material-ui.com): Simply to learn how to apply the Material Design approach from scratch (except the date-time-picker).
* Deployment: Automated testing through [Circle-CI](https://circleci.com) and hosting on [Heroku](https://dashboard.heroku.com/apps).

# Features

## Anonymous User

This type of user is able to mainly perform read tasks with the app, e.g., 

* View the upcoming events of the SwingInBerlin Calendar as a list.
* Optionally being able to view past events on the list.
* Inspect individual event details upon clicking an event.
  
If the user wishes to use additional features of the app, then logging in after having previously signed up is required. To streamline to this prototype experience, email verification has been omitted. Simply login after successfully submitting the sign up form.

![gh-showcase-swingly-123](https://user-images.githubusercontent.com/33485290/65823137-11c71980-e251-11e9-9b86-cf06d992ce4c.png)



## Signed User

A user who has signed in is now able to perform additional actions with the app.

* Set oneself as an "interested" or "going" guest
* View other registered users on the users page
* Inspect user details and the upcoming events that the inspected user has created.
* Follow individual users to be able to view their events on ones own events list.
* Unfollow users if desired
* Filter the event list to display only "interested" or "going" events.
* Filter the event list depending if followed users were set to active or not
* Create own events
* Manage own profile for other users to view or to delete own profile

![gh-showcase-swingly-456](https://user-images.githubusercontent.com/33485290/65823140-155aa080-e251-11e9-9616-5e67f28ef3f1.png)

![gh-showcase-swingly-789](https://user-images.githubusercontent.com/33485290/65823141-17bcfa80-e251-11e9-9358-617487a99e15.png)

## Future Features

* View not only local social events in the SwingInBerlin Calendar but also from the https://www.swingplanit.com website for international swing festivals
* Able to add course details for users wishing to create an event for a workshop or to simply add drop-in courses to a social event
* Notification for events that the user has set as either "interested" or "going" and that are about to happen soon.
* Add more event data (e.g. events of other months) and to paginate through them
