$(document).ready(() => {    

    const $page = $(`main > section[id="${window.location.pathname}"]`);

    if ($page.length) {
        $('main > section[id="/404"]').remove();
        $(document.scrollingElement).scrollTop($page.offset().top - $('.navbar').outerHeight());
    } else {
        $('main > section[id!="/404"]').remove();
        $(document.scrollingElement).scrollTop($('main > section[id="/404"]').offset().top - $('.navbar').outerHeight());
    }

    $('a[href]:not([target=_blank])').on('click', function(e) {
        if ($page.length) e.preventDefault();
        $(this).blur();
        
        const destination = new URL($(this).attr('href'), window.location.origin);

        $(document.scrollingElement).animate({ 
            scrollTop: $(`[id="${destination.pathname}"]`).offset().top - $('.navbar').outerHeight() 
        }, 1000, 'easeInOutCubic', () => {
            if (destination.pathname !== window.location.pathname) window.location.href = destination.href;
        });

    });

    $('#activate-form').click(function() {
        $(this).parent().css('display', 'none');
        $('#form').css('display', '');
    });

    $('#form').on('reset', function() {
        $(this).css('display', 'none');
        $('#activate-form').parent().css('display', '');
    });

});