# sql-injection-demo

This is a simple web app with deliberately _terrible_ security. I was inspired by the Computerphile video below to (legally) try running an SQL injection attack on my own web server. (DO NOT try this on another website.)

The database inputs aren't sanitized, and the passwords are stored in plain text. This, of course, is exactly the _opposite_ of what you should do when building anything on the web.

[![Computerphile - Running an SQL Injection Attack](http://img.youtube.com/vi/ciNHn38EyRc/0.jpg)](https://www.youtube.com/watch?v=ciNHn38EyRc "Running an SQL Injection Attack")

## Stack
- Vue
- Node + Express
- MySQL


## Setup
First clone the repo, then in the root of the repo, do the following.
1. Install MySQL `brew install mysql`
2. Start the MySQL server with `mysql.server start`
3. Login to MySQL with `mysql -u root -p`. The default password is blank
4. Run `ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';` to change your MySQL password
5. Run `CREATE DATABASE sql_injection_demo` to create a new database for this project
6. `QUIT` exits the MySQL monitor
7. Note: `mysql.server stop` stops the MySQL server. Do not run this if you are using the server.

Add your MySQL credentials to an environment variable.
```bash
$ cd server
$ echo 'MYSQL_CREDS="mysql_password"' > .env
```

The following will start up the actual webapp.
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

If you get errors connecting to MySQL, run the following:
`$ mysql -u root -p`
```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql_password';
flush privileges;
QUIT;
```


## XKCD
![Bobby Tables XKCD Comic](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

(In case you haven't seen this yet)