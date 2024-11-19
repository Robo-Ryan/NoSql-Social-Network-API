# NoSql-Social-Network-API

## Description
A backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built using Express.js for routing, MongoDB database, and Mongoose ODM.

## Usage
The API provides the following functionality:
- Create, read, update, and delete users
- Create, read, update, and delete thoughts
- Add and remove friends from a user's friend list
- Create and delete reactions to thoughts

## API Routes

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:userId` - Get single user
- POST `/api/users` - Create new user
- PUT `/api/users/:userId` - Update user
- DELETE `/api/users/:userId` - Delete user
- POST `/api/users/:userId/friends/:friendId` - Add friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove friend

### Thoughts
- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:thoughtId` - Get single thought
- POST `/api/thoughts` - Create new thought
- PUT `/api/thoughts/:thoughtId` - Update thought
- DELETE `/api/thoughts/:thoughtId` - Delete thought
- POST `/api/thoughts/:thoughtId/reactions` - Create reaction
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Delete reaction

## Demo Video
[Link to Walkthrough Video](your-video-link-here)

The walkthrough video demonstrates:
- Starting the application's server
- GET routes for all users and thoughts
- GET routes for single user and thought
- POST, PUT, and DELETE routes for users and thoughts
- POST and DELETE routes for friend list
- POST and DELETE routes for thought reactions

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript

