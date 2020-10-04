# cm1-web-dev

This repository contains all the code used in CM1 Phase 2: The Modern Web. The projects worked on during class will be in folders called "in-class".

To Use:

* Must have [node.js](https://nodejs.org/en/) and npm installed
* Must have [live-server](https://www.npmjs.com/package/live-server) installed to run a development server

In the Terminal, run:

```
# make a copy of the repository
git clone https://github.com/rjduran/cm1-web-dev.git

# change directory into the repo folder
cd cm1-web-dev

# run live-server in the repo folder
live-server
```

## week 4 examples

* hello-world - Basic page in HTML, CSS, and JS
* hello-live-server - Example of how to serve the same document using two terminal sessions running live-server with different ports. 

## week 5 examples

* student-list-bootstrap - Example of a filterable list using [Bootstrap](https://getbootstrap.com/) as the front-end framework.
* student-list-materialize - Example of a filterable list using [Materialize.css](https://materializecss.com/) as the front-end framework.

## week 6 examples

Strapi as API

This example uses a custom built database in Strapi to serve JSON data through API. The data entered into the database can be found in data.txt. 

* student-list-strapi - Examples of a filterable list using [Bootstrap](https://getbootstrap.com/) or [W3.CSS](https://www.w3schools.com/w3css/) as the front-end framework and [Strapi](https://strapi.io/) as the back-end API. _Note: Strapi server is not included in the repository. To use this example you will have to build your own Strapi database as shown in the Strapi [Quick Start Guide](https://strapi.io/documentation/v3.x/getting-started/quick-start.html). Pay special attention to the field names you use since they are used in the Javascript (for example, firstname)._
  
Google Sheets API

These examples use helper libraries to make it easier to setup a connection between a website or web app and a Google Sheet via API. Both of these methods are READ only. There isn't WRITE access. To have WRITE access to a Google Sheet you have to use the full Google Sheets API. Also, tabletop.js looks to be in transition due to changes in the Google Sheets API. It currently still works as described but that may change in the future. 

* [Google Sheets Reader](https://github.com/bpk68/g-sheets-api) - Free / Open Source, Requires Node.js
* [Tabletop.js](https://github.com/jsoma/tabletop) - Free / Open Source