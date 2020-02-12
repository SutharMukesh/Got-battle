# Game of throne battle REST API

## Briefing

Use the CSV file attached to load the data in MongoDB(mLab/MongoAtlas)

Use battle data to build an API Server using Node.JS/Express which exposes following 4 endpoints

- /list
    returns list(array) of all the places where the battle has taken place.
    E.g. ['Riverrun', 'Tyrell',....]
- /count
    returns the total number of battles occurred.
- /search
  - /search?king=Robb Stark
      return list of battles where 'attacker_king' or 'defender_king' was 'Robb Stark'
  - Should also work for multiple queries
      /search?king=Robb Stark&location=Riverrun&type=siege