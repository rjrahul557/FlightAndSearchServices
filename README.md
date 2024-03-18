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
-- once you have config ur db as listed above execute "npx sequelize db:create" in the src folder of your project


