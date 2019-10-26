# RESTFul TodoList API

A TodoList implemented with NodeJS and MongoDb (using mongoose).

## Getting Started

### Installing softwares and setting environment

Please, check if you have already installed all the needed stack.

- NodeJS;
- MongoDb;
- Postman (optional);
- A good text editor (your choice);

### Installing dependencies

Using npm:

```
npm install
```

Using yarn:

```
yarn
```

### Running the API:

Using npm:

```
npm run start
```

Using yarn:

```
yarn start
```

## Usage example

### Listing all tasks

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
axios
  .get("/tasks")
  .then(response => {
    console.log(response, "Tasks");
  })
  .catch(error => {
    console.log(error, "Error");
  });
```

### Creating a task

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
const task = {
  name: "Study NodeJS"
};

axios
  .post("/tasks", task)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

### Updating a task

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
const task = {
  name: "Study NodeJS",
  id: 45678
};

const { id } = task;

axios
  .put(`/tasks/${id}`, {
    ...task,
    name: "Commit stuff"
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

### Deleting a single task

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
const id = 54453;

axios
  .delete(`/tasks/${id}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

### Listing a single task

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
const id = 54453;

axios
  .get(`/tasks/${id}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Running the tests

Not implemented yet :)
