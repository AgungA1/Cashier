# User API Spec

## Login User API

Endpoint : POST api/users/login

Request Body :
```json
{
    "username" : "zxcqwe123",
    "password" : "password1234"
}
```

Response Body Success :
```json
{
    "data" : {
        "unique-token" : "unique-token"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username or password wrong"
}
```

## Logout User API

Endpoint : DELETE api/users/logout

Headers : 
- Authorization : token

Response Body Success :

```json
{
    "data" : "OK",
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```