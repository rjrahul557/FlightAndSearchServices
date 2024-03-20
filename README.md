# welcome to flight service
## project setup


--clone the project on your local

--excute "npm install" on the same path as of your root directory of the downloded project

-- create ".env" file in the root directory of the project and add the below mentioned stuff in it
   PORT=3000
-- inside src/config folder create config.json and then add following piece of data  in it

```
                {
                    "development": {
                    "username": "root",
                    "password": "password",
                    "database": "Flights_Search_DB_DEV",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                    },
                }
```       
-- once you have config ur db as listed above execute "npx sequelize db:create" in the src folder of your project then executr "npx sequelize db:migrate"




## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
Relationship -> City has many airports and Airport belongs to a city (one to many)

