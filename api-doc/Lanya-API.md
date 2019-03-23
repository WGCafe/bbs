# Lanya API
Welcome to the **Lanya** API.

## Category Configration

category      | id
------------- | ----------------
讨论           | 1
询问           | 2
牙医           | 3
牙套           | 4
智齿           | 5
种植           | 6


# Sign Up Lanya


## Sign Up [POST /users]

Headers       | Value
------------- | ----------------
Content-Type  | application/json


+ Parameters

    + username: "Jessica",
    + email: "test@test.com",
    + password: "**********"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    user_id: "xxxxxx",
                    new_message_num: 0
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Sign In Lanya


## Sign In [POST /Login]

Headers       | Value
------------- | ----------------
Content-Type  | application/json


+ Parameters

    + email: "test@test.com",
    + password: "**********"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    user_id: "xxxxxx",
                    new_message_num: 20
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Reset Password


## Reset Password [POST /resetpassword]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + user_id: "xxxxxx",
    + password: "**********"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Forget Password


## Forget Password [POST /forgetpassword]

Headers       | Value
------------- | ----------------
Content-Type  | application/json


+ Parameters

    + email: "test@test.com"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Profile


## My Profile [GET /users/:user_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    username: "Jessica",
                    location: "Shanghai",
                    face_image: "https://test.com/path/x.jpg",
                    create_time: 1234567890111
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Update Profile [PUT /users/:user_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + username: "Jessica",
    + location: "Shanghai",
    + face_image: "https://test.com/path/x.jpg"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Article

## Get Article Type [GET /articletype]

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": [
                		{
			          	"id": 1,
			          	"name": "讨论"
			        	}, {
			         		"id": 2,
			          	"name": "询问"
			        	}, {
			          	"id": 3,
			          	"name": "牙医"
			        	}, {
			          	"id": 4,
			          	"name": "牙套"
			        	}, {
			          	"id": 5,
			          	"name": "智齿"
			        	}, {
			          	"id": 6,
			          	"name": "种植"
			        	}
			    ]
			}

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Create Article [POST /article]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + author_id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
    + title: "test",
    + content: "test",
    + image: "https://test.com/path/x.jpg"
    + category: {category_number}

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Delete Article [DELETE /article/:article_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Get Article [GET /article/:article_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
						id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
						author_name: "Jessica",
						title: "test",
						content: "test",
						image: "https://test.com/path/x.jpg",
						thanks_num: 1,
						collection_num: 1,
						create_time: 1234567890111,
						comment_num: 3
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Report Article [POST  /article/:article_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + reason: "test"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Get Article List [GET /articles]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + category: {category_number}
    + page_size: 20,
    + page: 1

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    page: 1,
                    page_size: 20,
                    articles: [{
                    	id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    	vote_up: 20,
                    	vote_down: 30,
                    	face_image: "https://test.com/path/x.jpg",
                    	title: "test",
                    	comments_num: 20,
                    	create_time: 1234567890111,
                    	author_name: "Jessica",
                    	is_collection: false
                    }, ...]
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Collection

## Create Collection [POST /userfav/:article_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}

+ Parameters

    + user_id: {user_id}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Delete Collection [DELETE /userfav/:article_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Get Collection List [GET /userfav]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + page_size: 20,
    + page: 1

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    page: 1,
                    page_size: 20,
                    articles: [{
                    	id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    	vote_up: 20,
                    	vote_down: 30,
                    	face_image: "https://test.com/path/x.jpg",
                    	title: "test",
                    	comments_num: 20,
                    	create_time: 1234567890111,
                    	author_name: "Jessica",
                    	is_collection: true
                    }, ...]
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }



# Comment

## Create Comment [POST /comment]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + article_id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
    + comment_id: "xxx",
    + source_comment: "test-1",
    + user_id: "yyy",
    + content: "test"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                    id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    content: "test"
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }



## Delete Comment [DELETE /comment/:comment_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }



## Thanks Comment [PUT /comment/:comment_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Get Comment List [GET /comments]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + article_id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": [{
						id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
						source_comment: "test-0",
						author_name: "Jessica",
						content: "test",
						create_time: 1234567890111,
						collection_num: 20,
						thanks_num: 4,
						is_collection: false,
						is_thanks: true
                }, ...]
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


# Message

## Get Message List [GET /usermessage]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": [{
                    id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
                    message: "test-0",
                    is_read: false,
                    author_name: "Jessica",
                    article_title: "test",
                    create_time: 1234567890111
                }, ...]
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }


## Read Message [POST /usermessage/:message_id]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {}
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }

# Search

## Search Type Configration

type          |
------------- | ----------------
articles      |
comments      |
users         |


## Get Search List [GET /search]

Headers       | Value
------------- | ----------------
Content-Type  | application/json
Token         | {user_token}


+ Parameters

    + search: "test",
    + type: "articles"

+ Response 200 (application/json)

    + Body

            {
                "status": "1000",
                "context": {
                		articles: [{
							id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
							title: "test",
							create_time: 1234567890111
	                }, ...],
	                comments: [{
							id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
							source_comment: "test-0",
							content: "test",
							create_time: 1234567890111
	                }, ...],
	                users: [{
							id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
							face_image: "https://test.com/path/x.jpg",
							username: "Jessica",
							posted_article_num: 20,
							posted_comment_num: 120
	                }, ...]
                }
            }

+ Response 404 (application/json)

    + Body

            {
                "status": {error_code},
                "context": {
                    error: {error_message}
                }
            }

