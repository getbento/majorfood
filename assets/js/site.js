$(document).ready(function() {

    if($('body').hasClass("home")){

        var featureWidth = 72; //Accounts for extra margin
        $("#feature-container-inner").children().each(function () { featureWidth += $(this).width(); });

    //    if(window.location.hash == "#skip" || $('html').hasClass('touch')){
            $("#video-container").hide();
            $("a#splash.home").css("transform","translateY(-100%)");
            $("#finalsection").css("transform","translateY(0%)");
            $( "#feature-container-inner" ).css("transition","all .8s");
            $( "#feature-container-inner" ).css("transform","translateX(0px)");
            if($("header").is(":visible")){
                $('#finalsection').css("top","0%");
            }
    //    }else{
    //        if($("footer").is(":visible")){
    //            $("#feature-container-inner").css("transform","translateX(-"+featureWidth+"px)");
    //            $('video').bind("ended", function() {
    //                $( "#feature-container-inner" ).css("transition","all 2s");
    //                $( "#feature-container-inner" ).css("transform","translateX(0px)");
    //                setTimeout(function(){$( "#feature-container-inner" ).css("transition","all .8s");},2001);
    //                $("#video-container").fadeOut();
    //            });
    //        }
    //    }

        if($("footer").is(":visible")){

            $( "#feature-container" ).mousemove(function(e) {
                var mousePercent = e.pageX/$(window).width();
                $( "#feature-container-inner" ).css("transform","translateX("+(featureWidth-$(window).width())*mousePercent*-1+"px)");
            });
        }
    }

    $("footer a#toggle-menu-footer").click(function(){
        $("#footer-popup-menu").slideToggle();
    });
    $("header a#toggle-menu-header").click(function(){
        $("#header-popup-menu").slideToggle();
    });

    $("a#downarrow").click(function(){
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1000);
    });

    if($('body').hasClass("about")){
        $(window).scroll(function(){
            $("#splash-bg").css('transform',"translate(0,"+$(window).scrollTop()/2+"px)");
        });
    }


    //Form Validation
    if($('body').hasClass("contact")){
        $("form input.submit").click(function() {
            var error_raised = false;
            $("form input").css( "border", "2px solid #000;" );

            if ($("input#email").val() == "") {
              $("input#email").css( "border", "2px solid red" );
              error_raised = true;
            }

            if(error_raised == true) {
              return false;
            }
        });

        $("form select#reason").change(function() {
            if($("form select#reason").val() == "Employment"){
                $("form label.message").text('Cover Letter');
                $("#resume_container").slideDown();
                $('#recipient').val('jonathan');
            }else{
                $("form label.message").text('Message');
                $("#resume_container").slideUp();
                $('#recipient').val('daisy');
            }
        });

        if(location.href.substring(location.href.indexOf('?')) == '?success=true') {
          $('form').fadeOut('fast', function(){ $('form').html("<strong>Thank you. We'll get back to you shortly.</strong>").  fadeIn();}
          );
        }
    }

    //Form Validation
    if($('body').hasClass("team")){
        $('.bio-preview').succinct({
            size: 700
        });
        $('.staff a.next').click(function(){
            $('html, body').css('overflow','hidden');
            $('.overlay#member-' + $(this).data('member')).fadeIn();
        });
        $('.overlay a.close').click(function(){
            $('.overlay').fadeOut(function(){$('html, body').css('overflow','visible');});
        });
    }


});

$(window).load(function() {
    $("body").removeClass("preload");

    if($('body').hasClass("home") && $("footer").is(":visible")){
        $("#feature-container-inner").css('margin-top',($("#feature-container").height()-$("#feature-container-inner").height())/2);
        $( window ).resize(function() { $("#feature-container-inner").css('margin-top',($("#feature-container").height()-$("#feature-container-inner").height())/2); });
    }
});