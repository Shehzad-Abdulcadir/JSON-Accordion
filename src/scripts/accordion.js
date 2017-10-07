jQuery(document).ready(function($){

var accordion = {
    init: function() {
        this.accordionJson = 'http://design.propcom.co.uk/buildtest/accordion-data.json';
        this.getData();
    },

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

    iterateAccordionData: function(accordionData) {
        for ( i = 0; i < accordionData.length; i++) {
            $( ".accordion" ).append( "<article>" );
        }

        accordion.appendAccordionContent(accordionData);
    },

    appendAccordionContent: function(accordionData) {
        $('article').each(function(index) {
            $('article').eq(index).append('<h2>'+accordionData[index]['heading']+'</h2>');
            $('article').eq(index).append('<p>'+accordionData[index]['content']+'</p>');

        });
    },

    hideAccordion: function() {
        $('p').hide();
        accordion.toggleAccordion();
    },

    toggleAccordion: function() {
        $('article').on('click', function() {
            $(this).find('p').slideToggle();
            $(this).toggleClass('active');
        });
    },
}
accordion.init();

});



