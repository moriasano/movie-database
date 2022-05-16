# Movie Database

This project is a full-stack web app that allows users to browse a database of movies.  

View the live app here: https://master.d1zqf8xdvwv29w.amplifyapp.com/  

Tools Used:  
* react-create-app  
* react-boostrap  
* AWS Amplify (for hosting)  
* DynamoDB (to store movie database in AWS)  
* GraphQL (for APIs)  
* AWS Congnito (for user managment)  

Web UI Structure:
```
App.js
-- Navigation.js
-- Home.js
---- SearchMovies.js
------ ViewMovies.js
-------- DeleteMovieModal.js
------ AddMovieModal.js
```

Possible Improvments: 
1. Delete Movie from UI
2. Currently, the app gets ALL movies and then displays them based on the search bar filter. Instead, it should only fetch the movies which match the filter. It should then perform a new query with each change to the filter.
3. Make search/highting not be case sensitive
4. Sort is only in ascending order, add desending as well
5. Table Actions should be restricted by user roles
6. Pagnianation on Movies table