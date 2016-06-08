# react-buble-docker

An example project/scaffold for React, using [Koa](http://koajs.com/) for serving, and [Bublé](https://buble.surge.sh/guide/) for ES6 to ES5 compilation. All wrapped up with Browserify and Docker.

## Developing

You _must_ set up the pre-commit hook before development:
```
$ ln -s -f ../../hooks/pre-commit .git/hooks/pre-commit
```

## Building

1. Clone the repository
1. Build the image for production or development: `docker build [--build-arg env=dev] -t react-buble:latest .`

## running

a) run the container for production: `docker run --rm -p 8080:8080 react-buble:latest`

b) run the container for development: `docker run --rm -p 8080:8080 -v $pwd/code:/app react-buble:latest`

For actual development, you'll want to use [`dup`](https://github.com/girvo/dup) instead.

Keep in mind, you'll want to use `dup` v0.3.7 as that is what supports defaulting the `--build-arg env=dev` for you.
