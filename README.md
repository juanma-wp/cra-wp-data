# Demo `@wordpress/data`

This project uses `@wordpress/data` to manage the state of a simple marketplace site 

This project shows the use of things such as:
- Store creation w/ `createReduxStore`
- reducers
- selectors
- actions and action creators
- resolvers
- controls


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it uses [Docker](https://www.docker.com/) for the backend services implementation 

## Settings

_From the root of the project_ you have to:

1. Run `docker compose up -d` to launch backend docker services
1. Go to the JsonBox server URL (`http://localhost:3010`) and take note of the JsonBox URL (some URL like `http://localhost:3010/box_XXXXXXXXXXXXXXXXXX`)
1. Create a `.env` file to set the Environment Variables needed for the project
1. Run `npm install` to install the dependencies
1. Run `npm start` to launch the React App

After running `npm start` a browser window should be automatically opened with the React App 

### Backend Stack w/ Docker

This demo requires the following backend stack to work:
- A [**JsonBox** Server](https://github.com/vasanthv/jsonbox) (Node + Express) → A HTTP based JSON storage. It lets you store, read & modify JSON data over HTTP APIs.
- A [**MongoDB** Server](https://www.mongodb.com/) → To persist the data handled by the JsonBox Server 

This backend stack can be easily implemented with Docker. So, by having [Docker](https://www.docker.com/) installed in your machine, you can execute (from the root of the project)

```
docker compose up -d
```


This `docker compose up -d` command should launch the proper services and connect them to the proper ports so the Frontend app can do its requests properly 

You can check the backend services are properly up with the command `docker compose ps` or just `docker ps`

```
(base) ⬢  cra-wp-data  master ⦿ docker compose ps
NAME                SERVICE             STATUS              PORTS
jsonbox             jsonbox             running             0.0.0.0:3010->3000/tcp, :::3010->3000/tcp
mongo               mongo               running             0.0.0.0:27017->27017/tcp, :::27017->27017/tcp
```

```
(base) ⬢  cra-wp-data  master ⦿ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED       STATUS       PORTS                                           NAMES
4679567d4d61   c5cb90be991e   "docker-entrypoint.s…"   5 hours ago   Up 5 hours   0.0.0.0:3010->3000/tcp, :::3010->3000/tcp       jsonbox
de058bbc19e8   0e120e3fce9a   "docker-entrypoint.s…"   5 hours ago   Up 5 hours   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongo
```

Once the docker containers are up we'll have available both JsonBox & Mongo services

#### JsonBox

**JsonBox** is a HTTP based JSON storage that lets us store, read & modify JSON data over HTTP APIs

This service will be available under http://localhost:3010. If we go to this URL we'll se how it generates a _JsonBox_ we can use to store our data

The JsonBox URL will have a URL like `http://localhost:3010/box_XXXXXXXXXXXXXXXXXX` (take note of this URL as you'll need it for the Frontend settings).


### Frontend w/ Create React App

The React App has been created using Create React App

#### Environment Variables for React App

You'll have to set these two environment variables
- `SKIP_PREFLIGHT_CHECK` → to avoid CORS issues
- `REACT_APP_RESOURCE_ADDRESS` → to set the URL of the JsonBox (as explained above)

To do that you can create a `.env` (in the root of the project) file with those environment variables definitions

_`.env` example_
```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_RESOURCE_ADDRESS=http://localhost:3010/box_85aa8b19aa16248bd8ff
```
