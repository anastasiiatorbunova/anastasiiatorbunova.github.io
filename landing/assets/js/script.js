jQuery(document).ready(function($) {
    
    //Smooth scroll to register section
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var id = $(this).attr('href');

        $('body,html').animate({
            scrollTop: $(id).offset().top
        }, 1500, 'linear');
    });

    $('.ag-desc p').each(function(){
        
        var arr = $(this).html().split('<!--more-->');
        
        if( arr.length > 1 ){
           arr.splice(3, 0, '<div class="read-more-container"><a class="more" id="readMoreBTN">read more</a></div>');
            arr[0] = '<p>'+arr[0]+'</p>';
            arr[1] = '<p class="hidden">'+arr[1]+'</p>';
            $(this).replaceWith( arr.join('') );
        } 
        
    });
    
    $('#readMoreBTN').on('click', function(){
        let n = 0;
        $(this).parents('.ag-desc').find('.hidden').slideToggle( 'slow');
        $(this).text( $(this).text() == 'read more' ? 'read less' : 'read more' );
    });
    
});

