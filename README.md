# How to run

In order to respect the original repository structure, i've put the backend side into the frontend folder, even though
this is not, for sure, a correct hierarchy.

To run the project, move inside the **front** folder and run the **npm run dev** command.
This will launch concurrently the server on the port 8080, and the client on port 3000.

Of course you first need to create a local database called **xtream**, and put inside of it a new collection called "posts".
Once you do this, you're good to go.

This web app will connect to your local database and let you execute CRUD operations.
