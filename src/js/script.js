const hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      link = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

link.forEach(li => {
    li.addEventListener('click', () => {
    menu.classList.remove('active');
    });
});

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $('form').trigger('reset');
        });
        return false;
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        li.addEventListener('click', () => {
            menu.classList.remove('active');
        });
        return false;
    });



