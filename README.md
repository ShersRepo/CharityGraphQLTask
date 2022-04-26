SAME READ ME AS INCLUDED IN THE PROJECT

__________________________________________________________________________________
(1) ----TECHNOLOGIES 
__________________________________________________________________________________
Frontend  (/lightfulcharitybase/frontend)
React : 17.0.2
Bootstrap : 5.1.3
GraphQL : 16.3.0
ApolloClient : 3.5.10

Backend (/lightfulcharitybase/server ****Deprecated/not yet implemented****Please ignore this folder)
Node.js
GraphQL


__________________________________________________________________________________
(2) ----PREREQUISITES
__________________________________________________________________________________

The following applications are needed to run this web application

Node Package Manager - Above version 14.0.0 
**If installing a recent version, please go for the latest stable build for the best chance of a successful build
This can be downloaded from https://nodejs.org/en/download/ (Bundled with node.js).


NOTES - The zipped folder will not include the node_modules due to disk storage capacity and ease of delivery through mail services. 
Therefore node NPM will be required to install the necessary packages.

A repository will be setup before the code freeze for access. Please contact me (Sher) or Jamie for a link to this.



__________________________________________________________________________________
(3) ----INSTALLATION ( FOR THE ZIP FOLDER )
__________________________________________________________________________________

Extract the files from the zipped folder (lightfulcharitybase)to a folder location on your machine.

Open the Command prompt terminal on your machine.

Enter the following command onto your machine "cd {*}/lightfulcharitybase/frontend" replacing {*} with the location the zipped folder was restored on your machine.
If the folder name "lightfulcharitybase" was changed when unzipping you will need to update the command with that name too.

Enter "npm i". This may take some time. If this fails, then you may need load the repository which holds all the files needed to run this project


__________________________________________________________________________________
(4a) ----GETTING STARTED ( FOR THE ZIP FOLDER )
__________________________________________________________________________________

If the terminal was closed from the installation repeat the step below:
Enter the following command onto your machine "cd {*}/lightfulcharitybase/frontend" replacing {*} with the location the zipped folder was restored on your machine.
If the folder name "lightfulcharitybase" was changed when unzipping you will need to update the command with that name too.


Then type in "NPM start"

This should load a browser with the web application running from your local machine (under port 3000).


If this fails due to the port being in use. Then the port will need to be edited in the project. You can do this by opening the project folder "lightfulcharitybase/frontend" and opening the "package.json" file.

Locate the following "scripts : " and then "start : react-scripts start"

Replace "start : react-scripts start" with "start : set port=4000 && react-scripts start". This will change the default port of 3000 to 4000. You may wish to change this port to somethinf suitable for 
your environment.



__________________________________________________________________________________
(4b) ----GETTING STARTED ( FROM REPOSITORY CLONE )
__________________________________________________________________________________


Clone the repository for the web application from github. Contact shersandhu92@gmail.com for github repository link.

Once cloned, enter the following command onto your machine "cd {*}/lightfulcharitybase/frontend" replacing {*} with the location the zipped folder was restored on your machine.
If the folder name "lightfulcharitybase" was changed when unzipping you will need to update the command with that name too.

Then type in "NPM start"

This should load a browser with the web application running from your local machine (under port 3000).

If this fails due to the port being in use. Then the port will need to be edited in the project or closing the application using the port 3000. 
To change the port in this web application, open the project folder "lightfulcharitybase/frontend" and opening the "package.json" file.

Locate the following "scripts : " and then "start : react-scripts start"

Replace "start : react-scripts start" with "start : set port=4000 && react-scripts start". This will change the default port of 3000 to 4000. You may wish to change this port to something suitable for 
your environment.


__________________________________________________________________________________
(4c) ----CharityBase API Key
__________________________________________________________________________________

If you are able to run the web application but are not seeing any information on the page (or no content on the main screen except the top navigation), then it may be that the API key is out of date.

This can be updated in the "environment.json" file found in "lightfulcharitybase/frontend".

Here you will find the following: " "apikey": " followed by a value. You can retrieve a new key from Sher or generate one directly from CharityBase (after registering).

Once retrieved, update the Api key so it looks like the following "apikey": "Apikey {Key value in here}"

You can also experiment with some of the values found in this file which will effect the results return from the CharityBase API, such as minimum income.


__________________________________________________________________________________
(5) ----FEATURES
__________________________________________________________________________________


Pages
---Charity List
	- View multiple charities with general information
	- Sorting by incoming ascending as standard
	- View contact information through the "View contact info" button
	- Navigate to further details through the "Charity details" button

---Charity Table
	- A secondary view for charities that can be aimed at admin activities in the future
	- Navigate to further details through the "Charity details" button

---Charity View
	- View variety of details related to the charity
	- Tab functionality for switching between detail views

---Spinner component
	- A shared component to indicate when data is loading with custom messages for each view or a default message

---Error handler component (clientside)
	- A shared component to indicate when there was an error with custom messages for each view or a default message
