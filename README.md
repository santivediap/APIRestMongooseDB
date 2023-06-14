# demo_mongoose
Testing some mongoose functionalities
- 2 collections: Games, Publisher.
- Relationships between Games, Publisher. Normalized data mode.

In `main.js` you can find some methods:
- `listGames()`. List all Games. Use `populate()` to bring the publisher related to each game.
- `createPublisher(companyName, firstParty, website)`. Create a new publisher.
- `createGame(title, publisher)`. Create a new game. You have to pass title + id_publisher saved in DB. 
- `createGame2(title, companyName)`. Create a new game. You have to pass title + company name. It'll check in the DB the company info and extract the publisher_id to create a new game.

To execute:
- Uncomment some of the function calls and execute `node models/main.js` in the terminal