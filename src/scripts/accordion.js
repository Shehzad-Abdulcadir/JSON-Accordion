jQuery(document).ready(function($){

// Create accordion object
var accordion = {
    init: function() {
        this.accordionJson = 'https://design.propcom.co.uk/buildtest/accordion-data.json';
        this.getData();
    },

    // Pull in JSON Data using AJAX Request
    getData: function() {
        $.ajax({
            url: accordion.accordionJson,
            success: function(data) {
                var dataBlock = data.blocks;

                accordion.iterateAccordionData(dataBlock);
                accordion.hideAccordion();
            }
        });
    },

    // Create wrapper for each accordion
    iterateAccordionData: function(accordionData) {
        for ( i = 0; i < accordionData.length; i++) {
            $( ".accordion" ).append( "<article>" );
        }

        accordion.appendAccordionContent(accordionData);
    },

    // Append JSON Data to relevant tags
    appendAccordionContent: function(accordionData) {
        $('article').each(function(index) {
            $('article').eq(index).append('<h2>'+accordionData[index]['heading']+'</h2>');
            $('article').eq(index).append('<p>'+accordionData[index]['content']+'</p>');

        });
    },

    // Hide answer and run toggle function
    hideAccordion: function() {
        $('p').hide();
        accordion.toggleAccordion();
    },

    // Show/Hide answer + add active class on wrapper
    toggleAccordion: function() {
        $('article').on('click', function() {
            $(this).find('p').slideToggle();
            $(this).toggleClass('active');
        });
    },
};
//Init Accordion Oject
accordion.init();
});



