# TunePad Assets Server

https://assets.tunepad.com

Serves tunepad.min.js, audio files for patches, and user-uploaded audio samples

# Development Environment Setup

## Install Node.js
* `brew update`
* `brew install node`

## Install the required node modules
* `npm install`

## Install postgresql
* `brew install postgresql@15`
* Start the database server: `brew services start postgresql@15`
* Create a database: `createdb tunepad_assets`
* Start up postgresql: `psql -d tunepad_assets`
* Create admin user:
```sql
CREATE USER admin WITH PASSWORD 'O@kt0n';
GRANT ALL PRIVILEGES ON DATABASE tunepad_assets TO admin;
ALTER USER admin WITH SUPERUSER;
```
* In the future to open postgresql: `psql -U admin -d tunepad_assets -h localhost`
* `\dt` to list tables
* `\q` to quit

## Create environment variables
* Create a file called `.env` in the root directory of the project.
* Copy this into the file:
```
# App configuration
NODE_ENV=development
PORT=3030
GOOGLE_CALLBACK_URL="http://localhost:3000/auth/google/callback"

# Postgres
PG_USER='admin'
PG_HOST='localhost'
PG_DATABASE='tunepad_assets'
PG_PASSWORD='O@kt0n'
PG_PORT=5432
```


## Run the Express server
* `npm run dev`

## Open the site in a browser
* `http://localhost:3030/assets/js/tunepad.min.js`

