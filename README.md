
Prerequisites:

* postgres
* NVM
*  Node >= 16.x.x


## Installation

To install:

    git clone https://github.com/hamza-dev565/hyperhire.git

    cd hyperhire

    npm install // it will install node modules for both mobile app and node-server

Node server uses  uses a .env file to manage environment variables.

I have also used cloudinary for storing images and for testing my api I am provding the api-keys for it. Patse the below content in your .env file

    cloud_name = devsin
    api_key = 857826676195293
    api_secret = NV_24Yycfv0ZG6m2Hi8YcRY0jVE


You have to change the database credentials in ./hyperhire-api/config/config.json

Then execute the following to create the database.

    npm run db:setup
    npm run db:migrate

For seeding the data run the following command. It will create 100 books, each book will have same 300x300 white image.
The images are stored in cloudinary.

    npm run db:seed:all

You can start the server with `npm run start-server`
To run the mobile app use commmand `npm run start-mobile`

## API Endpoints

- [Books](#events)
  - [List books](#events-list)
  - [Show book](#events-show)
  - [Create book](#events-create)


### <a name="events"></a> Books

#### <a name="events-list"></a>List Books

list all books
Query Paramerts - page and pageSize
`GET /books?page=2&pageSize=10`

Response:
```
{
    "success": true,
    "data": [
        {
            "id": 90,
            "title": "Book 90",
            "description": "Description 90",
            "discountRate": "0.71",
            "image": "https://via.placeholder.com/300",
            "price": "57.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 89,
            "title": "Book 89",
            "description": "Description 89",
            "discountRate": "0.84",
            "image": "https://via.placeholder.com/300",
            "price": "10.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 88,
            "title": "Book 88",
            "description": "Description 88",
            "discountRate": "0.36",
            "image": "https://via.placeholder.com/300",
            "price": "49.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 87,
            "title": "Book 87",
            "description": "Description 87",
            "discountRate": "0.59",
            "image": "https://via.placeholder.com/300",
            "price": "31.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 86,
            "title": "Book 86",
            "description": "Description 86",
            "discountRate": "0.55",
            "image": "https://via.placeholder.com/300",
            "price": "43.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 85,
            "title": "Book 85",
            "description": "Description 85",
            "discountRate": "0.23",
            "image": "https://via.placeholder.com/300",
            "price": "32.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 84,
            "title": "Book 84",
            "description": "Description 84",
            "discountRate": "0.21",
            "image": "https://via.placeholder.com/300",
            "price": "39.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 83,
            "title": "Book 83",
            "description": "Description 83",
            "discountRate": "0.81",
            "image": "https://via.placeholder.com/300",
            "price": "22.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 82,
            "title": "Book 82",
            "description": "Description 82",
            "discountRate": "0.34",
            "image": "https://via.placeholder.com/300",
            "price": "56.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        },
        {
            "id": 81,
            "title": "Book 81",
            "description": "Description 81",
            "discountRate": "0.06",
            "image": "https://via.placeholder.com/300",
            "price": "49.00",
            "createdAt": "2023-07-01T16:03:46.532Z",
            "updatedAt": "2023-07-01T16:03:46.532Z"
        }
    ],
    "paginationInfo": {
        "currentPage": 2,
        "itemsPerPage": 10,
        "totalPages": 10,
        "totalItems": 100,
        "hasNextPage": true,
        "hasPreviousPage": true
    }
}
```

#### <a name="events-show"></a> Show Book

Show a specific book

`GET /book.:id`

parameters:
  - guid - book id

Response:
```
{{
    "success": true,
    "data": {
        "id": 2,
        "title": "Book 2",
        "description": "Description 2",
        "discountRate": "0.62",
        "image": "https://via.placeholder.com/300",
        "price": "53.00",
        "createdAt": "2023-07-01T16:03:46.532Z",
        "updatedAt": "2023-07-01T16:03:46.532Z"
    }
}}
```

#### <a name="events-create"></a> Create Book

Create an book .

`POST /events`

Parameters:
- title: string
- description: string
- discountRate: decimal
- decimal: decimal
- image: File
-
Response:
```
{
    "success": true,
    "data": {
        "id": 101,
        "title": "hello",
        "description": "this is the first book to be tested",
        "discountRate": "0.00",
        "image": "https://res.cloudinary.com/devsin/image/upload/v1688230606/qq8tvwhnjuiz0poefabh.jpg",
        "price": "0.00",
        "updatedAt": "2023-07-01T16:56:47.262Z",
        "createdAt": "2023-07-01T16:56:47.262Z"
    }
}
```
