# React Vanilla Todo App

A Vanilla React Todo App without any state management package.

## Initial Setup

```
npm create vite@latest my-vue-app --template react

npm install

npm i react-router-dom
npm i react-icons
npm i prop-types
npm i axios
```

## JSON Server

Install `json-server` globally:

```
npm install -g json-server
```

Read about `json-server` from here https://www.npmjs.com/package/json-server.

Create a db file with todos:

```
{
  "todos": [
    {
      "_id": "64326916cc99aa92789117d0",
      "title": "Ma. Francisco"
    }
  ]
}
```

Create `routes` file:

```
{
  "/api/*": "/$1"
}
```

Create `json-server` config file:

```
{
  "port": 3000,
  "routes": "server/routes.json",
  "watch": true,
  "id": "_id"
}
```

Add npm script in `package.json` file:

```
"scripts": {
  "json-server": "json-server server/db.json --config server/json-server.json"
}
```
