jQuery(document).ready(function($){

var accordion = {
    init: function() {
        this.accordionJson = 'http://design.propcom.co.uk/buildtest/accordion-data.json';
        this.getJson();
        
    },

    getJson: function() {
        $.ajax({
            url: accordion.accordionJson,
            success: function(data) {
                var dataBlock = data.blocks
                accordion.getData(dataBlock);  
            }
        });
    },

    getData: function(jsonDataFromSuccess) {
        for ( i = 0; i < jsonDataFromSuccess.length; i++) {
            $( ".accordion" ).append( "<article>" );
        }

        $('article').each(function(index) {
            //console.log(jsonDataFromSuccess[index]['heading']);
            $('article').eq(index).append('<h2>'+jsonDataFromSuccess[index]['heading']+'</h2>');
            $('article').eq(index).append('<p>'+jsonDataFromSuccess[index]['content']+'</p>');

        });
    },

}
accordion.init();

});



