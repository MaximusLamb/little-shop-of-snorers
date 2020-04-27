Data Files:

JS file containing our products
DATA ARRAY (products) needs key value pairs
id, image, names
the data will be sent to local storage
exported to...
HTML & JS FILES

- one HTML file for survey portion
- JS file is grabbing 3 random images from data array and allow the user to select one of them
    - the amount of time an image is displayed has a counter that increases 
        - math.random function communicates with whatever function we write to read radio buttons * 
    - pull from local storage
    - push information to local storage which is responding to our radio buttons 
    - radio buttons 
    - this will run 25 times TOTAL
    - every time a button is clicked/submitted, the play count decreases
        if play count is ZERO redirect to results page

- second HTML file is where results appear
- JS file contains a function 
    - pull from local storage 
    - push all time results to local storage *
    - the function prints out a list of the name of the item and how often it's chosen 
Individual user sessesion should restart

Next button / Reset button
Non-duplicating images automatically display

refer to the way Dani wrote this code for two images
comparison of two functions, each of which contained ids that were being compared as well
Results page: how many time products were viewed + votes received

the function prints out a list of the name of the item and how often it's chosen
the amount of time an image is displayed has a counter that increases - math.random function communicates with whatever function we write to read radio buttons *
Create a separate page for the following:

second HTML file is where results appear
JS file contains a function
pull from local storage
push all time results to local storage *
the function prints out a list of the name of the item and how often it's chosen
List of functions:
getItembyId
getRandomByID