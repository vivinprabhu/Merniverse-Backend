<h1>Overview</h1>

<li>This project is developed using the frontend of ReactJS, middleware of ExpressJs and for database MongoDB.</li>
<li>While signup a verification link will be send to your mail to avoid unauthorized accounts.</li>
<li>While login a token will be generated for authentication and authorization.</li>
<li>To mail e-certificate the scores are posted to Google Sheet and using Document Studio extension the workflow will be get runned and E-certificate will be mailed.</li>

<h2>Code and Resources Used</h2>
<h4>Prerequisites: </h4>
<li>MongoDB</li>
<li>ExpressJS</li>
<li>ReactJS</li>
<li>NodeJS</li>
<li>GSheet DB</li>

<h1>Frontend</h1>
<li>In frontend, it is super responsive for all screens.</li>
<li>Also appearance on scroll has been coded in Landing page.</li>

<h1>Backend</h1>
<li>Used ExpressJS, MongoDB and Google Sheet</li>
<li>Secure login with JWT token generation</li>
<li>Verification link will be send to their email to avoid unauthorized accounts.</li>

<h1>Database</h1>
<li>Passwords in the database is hashed</li>
<li>Secure</li>

<h1>Google Sheet DB integration</h1>
<li>G-Sheet DB is integrated for storing the score</li>
<li>Using Document Studio extension the e-certificate will be mailed</li>

<h1>To start the backend</h1>

```bash
npm start
```

<h1>Add .env file</h1>

```bash
DB = [Your MongoDB URL]
JWTPRIVATEKEY = ...
SALT = [Random number to add salt in password]
BASE_URL = [http://localhost:port_number]
HOST = smtp.gmail.com
SERVICE = gmail
EMAIL_PORT = 587
SECURE = true
USER = [Your Email]
PASS = [Your password]
```
