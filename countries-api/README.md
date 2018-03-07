# APIs for Managing Country Data

## Built with Ruby on Rails

The [Find It Fast](https://dawnmessier.github.io/FindItFast/) jQuery plugin is used to demonstrate the API on the index page.

An ActiveModelSerializer is used to attach a customized URL with each JSON response country result

### Available API Routes

- search: /countries/search?q=`{string}`&limit=`{integer}`&key=`{string}`
- countries:
    - GET    /countries (index)
    - POST   /countries (create)
- country:
    - GET    /countries/:id (show)
    - PATCH  /countries/:id (update)
    - PUT    /countries/:id (update)
    - DELETE /countries/:id (destroy)
