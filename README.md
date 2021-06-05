# Youtube-React
## [Youtube Clone](https://app-7a350.firebaseapp.com/)(Deployed Website)
This is a YouTube Clone made entirely using React and the data to the website is being fed by the youtube API. The credentials for your YouTube Data API v3 can be generated from the google developer console.
Though this is a basic react application, it has all the functionality which will help the programmer understand what's going on behind the scenes.

After you're done cloning the repository to your local machine, open up the command prompt and type `npm start` which will promptly start the server on a particular port. After that you can visit the URL mentioned to view the rendering.

Keep in mind that on **line 28** in the file 
>src/App.js

The environment variable `REACT_APP_YOUTUBE_API_KEY` wouldn't be available to you directly. 

In order for you to get your own API key, follow these steps:

1. Create an empty .env file in the root directory.
2. Create a variable as such REACT_APP_YOUTUBE_API_KEY = 'YOUR API KEY'. _As mentioned earlier, you can get the api key from the google developer console._
3. Save the changes and run the command `npm start` again.
4. The server should start now.
    
    In the event that it doesn't, you might want to add this line `import config from 'dotenv'` in the `src/App.js` file;
