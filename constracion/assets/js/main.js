$(function() {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo-dark.png");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    

    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    //===== 

    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        var name = $.trim($('input[name="name"]').val());
        var email = $.trim($('input[name="email"]').val());
        var subject = $.trim($('input[name="subject"]').val());
        var number = $.trim($('input[name="number"]').val());
        var message = $.trim($('textarea[name="message"]').val());
        var formMessage = $('.form-message');

        if (!name || !email || !subject || !number || !message) {
            formMessage.removeClass('success').addClass('error').text('Please complete all fields before sending.');
            return;
        }

        var body = [
            'Name: ' + name,
            'Email: ' + email,
            'Contact Number: ' + number,
            '',
            message
        ].join('\n');

        window.location.href = 'mailto:davidmaradza652@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        formMessage.removeClass('error').addClass('success').text('Your email app is opening with the message ready to send.');
    });



});
