To create node.js and express project
--------------------------------------
Download npm and setup the env variable.
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

1. Create project folder and run command
	mkdir helloWorld
	cd helloWorld
	npm init -y

2. Install dependencies
	npm install express pg dotenv cors

express	: web server to handle http reqiests
pg	: postgresqk client for node.js
dotenv	: for environment variables (to store passwords and credentials links)
cors	: handle cross-origin requests 

3. Install development dependencies
	npm install nodemon --save-dev

--------------------------------------------------
Other stuffs to download:
Download postgresql and setup the env variable.
https://www.postgresql.org/download/windows/

Download Github desktop
https://desktop.github.com/download/

Create render account
--------------------------------------------------

Reference: 
https://github.com/jjustin86/hellopen

To run: npx nodemon server.js

With all the above step done, In ym render account, I can see my git repo and deploy it as webservice with postgres being setup


