# FONEFUNZONE

This is an application is divided between a client-side ReactJS application and a server-side Node.js application.

The serverside is very basic, utilising the usual REST API methods.

The client side is made with React - with both class components to show my familiarity with how React was written before and more up to date with functional components with hooks.

The database is using mongodb atlas and the photo uploading using cloudinary.

There is a lot of room for improvement, especially to make the code cleaner and more reusable, also to write more tests but given the time frame I had, this is what I could come up with. Please don't hesitate to ask any questions.

## How to start

1. Install all modules/dependencies in in root of CLIENT folder

```diff
npm install
```

2. Run project

```diff
npm start
```

3. Install all modules/dependencies in root of SERVER folder

```diff
npm install
```

4. IMPORTANT - place the .env file with the environment variables in the root of the SERVER folder

5. Start the backend server in the SERVER folder

```diff
npm run dev
```

6. Enjoy this trainwreck on an application!

## Server-side

### Models

- Phone
  - title - String
  - description - String
  - price - String
  - ram - String
  - screen - String
  - manufacturer - String
  - color - String

### Controllers (REST API endpoints)

| METHOD | PATH          | DESCRIPTION                   |
| ------ | ------------- | ----------------------------- |
| GET    | "/phone/list" | List available Phones.        |
| GET    | "/phone/:id"  | Load details of single phone. |
| POST   | "/phone"      | Create a new phone            |
| PATCH  | "/phone/:id"  | Edit single phone             |
| DELETE | "/phone/:id"  | Delete single phone           |
