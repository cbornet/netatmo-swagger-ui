# Netatmo-Swagger-UI
### Swagger UI online documentation for the Netatmo API with OAuth2 support

[Swagger UI](https://github.com/swagger-api/swagger-ui) allows to make a beautiful online documentation with the famous "try it" button that speeds up developpement and enhance communication between front-end and back-end developpers.

### Swagger spec file
The swagger spec file is a [Swagger 2.0](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md) json file that can be downloaded from 
https://netatmo-swagger.herokuapp.com/swagger.json and used with tools such as [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate client and server SDKs for the Netatmo API in various languages and frameworks. See [netatmo-swagger-codegen](https://github.com/cbornet/netatmo-swagger-codegen) for generated SDKs and sample applications.

### Usage
You can use directly the online doc from the site https://netatmo-swagger.herokuapp.com/ or you can clone/download this project and serve it from your own server. To deploy on your own server and be able to use the "try it" button, you need to get your own application client_id, client_secret and register your redirect_uri as https://yourdomain.com/o2c.html on Netatmo's web site (an https server with a valid certificate is recommended). Then set your app credentials in [index.html](https://github.com/cbornet/netatmo-swagger-ui/blob/master/public/index.html). Note : the project is served by a nodejs/express to be deployed on heroku but it is just a static web site that could be served from any CDN (AWS S3, Cloudfront, ...).
