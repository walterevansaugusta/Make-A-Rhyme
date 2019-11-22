# Make-A-Rhyme

An iteractive web app to teach children sight words by using fun fillable rhymes and illustrations.
Designed for our client, Dr. Walter Evans as part of our Junior Design project for Georgia Tech.

# Release Notes
## Version 1.0.48
### What's New
* Ability to save rhymes as PDF or print them
* Friends and Word Bank links have been moved to side bar
* New color scheme and unified design elements
* Friends are only named by the user and can be named when completeing a rhyme
* Endstate for the rhyme has been added
### Bug Fixes 
* Amount of time word is displayed on the Quiz page has been shortened
* Format and Scaling of Rhyme Page has been fixed
* Title Tags have been added to all Pages
* Word Pop-up box closes after the user chooses a word
* Clicking on word multiple times no longer adds the word to the poem multiple times
* Unable to mess up order of rhyme boxes on first read through

### Known bugs and defects
* Occasionally, coming back to rhyme page with previously filled boxes from the quiz, causes the illustration to disappear and the reappear after a few seconds.

# Install Guide  

## Pre-requisites: 
There are no prequistites to installing or downloading this code.

## Download instructions:
* Clone master branch to computer.
* Upload codebase to appropriate server

## Installation of actual application:
* No further steps are necessary for actual installation beyond dowloading and uploading the code to the client's perferred server.

## Run instructions:
* Upload to server
* Open index.html

## Troubleshooting:
* If cloning the codebase was not done properly, please delete and try to clone from GitHub again.
* There should be no other issues when installing. 

## Instructions to add a new poem
All poem data is located in the src/poem/poem_data.json file. Taking a look at this file, you can set up a new poem similar to how the others are set up. Each poem is required to have:

- name: Name of poem
- image: Image location
- img_w: width of image
- img_h: height of image
- words: array of data for each word
    - x and y coordinates for the location of the box/image
        - x,y between 0 and 1 (in order to scale properly)
    - categories: array of potential category numbers for that box (e.g [4,5,6] if the box could be an animal, a water animal, or a bird)
    - spot-id: ID of the box corresponding to the picture codes document (A, B, C, etc.)
- text: array of poem lines - each index of the array should correspond to an audio file
- cueBox: ID of the box that is cued after a certain poem line is read (e.g. after the index 0 line in Muddy Park ("Once on a pretend time didn’t you tell me how") is read, index 0 (box A) is cued for the child to select it)

After adding all of this poem data, all you need to do is add another <div> block in the landing.html file, similar to the <div> blocks that are there for the other poems.