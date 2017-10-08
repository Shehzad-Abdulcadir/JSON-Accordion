# JSON-Accordion
A dynamically populating accordion using a JSON endpoint.

# Preparing the Project
I started off creating a boilerplate of the project file structure.

I used Gulp in order to handle the automation of various different processes such as compiling my SASS files, concatenating and minifying my scripts.

# Javascript
As the main aim of this project is to create a self populating accordion using dynamic JSON data, an AJAX request must be made to pull in the latest content.

If the AJAX request is successful, an object will be created with the JSON data.

We would then need to loop through and generate HTML wrappers for each accordion. 

With the wrappers created we can then begin generating the HTML Structure, in this case we will append the 'Heading' data to a H2 tag and the 'content' to a P tag.

Once the elements display on the page, jQuery functions .on('click') and .slideToggle() are used to create the accordion functionality.

Keeping everything in the javascript as Objects allows me to more easily understand what is happening, creates semantic code and follows best practices.

# HTML
The .accordion class is added to a section element. The Javascript finds this class and appends the generated HTML in this element.

# SASS
SASS is used in this project as it allows for more legible code when working within nested elements.

# Libraries Used

- jQuery
- FontAwesome
- Normalise CSS
- Google Fonts Roboto & Open Sans