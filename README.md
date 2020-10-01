MDC Project 2 - Back End Readme

Github for front end: https://github.com/milescogan92/MDCProject2FrontEnd

Deployed site front end: https://milescogan92.github.io/MDCProject2FrontEnd/

Deployed site Back end: https://pacific-brook-92442.herokuapp.com/

This repository is the back end (server side) for a fishing configurator in which users can create, edit, or delete their own customized fishing gear setups. Each gear setup consists of a rod, reel, and tackle.

The biggest issue I had during this project was to ensure that the index feature would work for a single signed in user while not showing EVERY user's index.  I accomplished this with lots of help from my classmates and eventually got that index to work.

Addtionally, I had forgotten during my initial submittal to clear the update, create, and delete gear forms after success.  When a new user would sign in, those forms would still be filled in with the previous data.  This was easily fixed with three lines of code that reset these forms.

Wireframe (v2): https://imgur.com/OXALQvZ ERD (v2): https://imgur.com/WMai1Se

User stories:

As a user, I want to be able to create my own customized gear setup with a rod, reel, and tackle.

As a user, I want to be able to create MULTIPLE gear setups as described above.

As a user, I want to be able to edit previously created gear setups (ie, change the rod, reel, or tackle portions of each setup)

As a user, I want to be able to destroy an entire gear setup.

As a user, I want to be able to log out and log back in if I have multiple accounts.
