# sql-injection

This is a simple web app with deliberately _terrible_ security. I was inspired by the Computerphile video below to (legally) try running an SQL injection attack on my own web server. (DO NOT try this on another website.)

The database inputs aren't sanitized, and the passwords are stored in plain text. This, of course, is exactly the _opposite_ of what you should do when building anything on the web.

[![Computerphile - Running an SQL Injection Attack](http://img.youtube.com/vi/ciNHn38EyRc/0.jpg)](https://www.youtube.com/watch?v=ciNHn38EyRc "Running an SQL Injection Attack")

## Stack
- Vue
- Node + Express
- MySQL


## Setup
First clone the repo, then in the root of the repo, run the following:
```bash
$ cd client && yarn install     # Installs client dependencies
$ cd ../server && yarn install  # Installs server dependencies
$ yarn dev                      # Starts Express server
```
In a new terminal, run:
```bash
$ cd client
$ yarn serve                    # Starts Vue.js server
```


## XKCD
![Bobby Tables XKCD Comic](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

(In case you haven't seen this yet)