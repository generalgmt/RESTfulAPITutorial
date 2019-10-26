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

### Creating a task

[Example (using axios):](https://github.com/axios/axios "Axios documentation")

```javascript
const todo = {
  name: "Study NodeJS"
}

axios.post('/tasks', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

<!--
('/tasks')
.get(todoList.list_all_tasks)
.post(todoList.create_a_task);

    app.route('/tasks/:taskId')
    	.get(todoList.read_a_task)
    	.put(todoList.update_a_task)
    	.delete(todoList.delete_a_task); -->

## Running the tests

Not implemented yet :)
