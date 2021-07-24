
    $(document).on('scroll', function() {
        if($(window).scrollTop() > 20) {
            
            console.log($(window).scrollTop());
            document.getElementById('cheader').style.backgroundColor="rgb(0, 0, 0)";
            document.getElementById('cheader').style.transition="all .3s";
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           document.getElementById('cheader').style.backgroundColor='transparent';
        }
    });

