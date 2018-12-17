function esconderTudo() {
    $(".overlay").removeClass('active');
    $(".modal-box").removeClass('active');
    $(".linguas_wrap ul").removeClass('active');
    $("body").removeClass('overflow');
}

$("a.close, .overlay").click(function() {
    esconderTudo()
});

function modalTrigger(nomeId) {
    $("#" + nomeId).addClass('active');
    $(".overlay").addClass('active');
    $("body").addClass('overflow');
}

$("a.modal-trigger").click(function() {
    var nomeId = $(this).data('id');
    modalTrigger(nomeId);
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('header').addClass("header_fixo");
    } else {
        $('header').removeClass("header_fixo");
    }
});


// **********************************
//           checkbox e radio
// **********************************

$(function() {
    $(document)
    .on('change', 'input[type=checkbox]',  function(e) {
        e.preventDefault();

        const $this = $(this);

        $this.prop('checked') ? $this.parent().addClass('ativo') : $this.parent().removeClass('ativo');
    })
    .on('change', 'input[type=radio]', function (e) {
        e.preventDefault();
        let $this = $(this);
        let name = $this.attr('name');
        $('input[type=radio][name=' + name + ']').parent().removeClass('ativo');

        $this.parent().toggleClass('ativo');
    });
});

jQuery(document).ready(function($) {
    $('.owl-1').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            600:{
                items:1
            },
            1400:{
                items:1
            },
            1600:{
                items:1
            }
        }
    });
});

// **********************************
//                tabs
// **********************************

$(function() {
  $('.tabs_menu a').click(function() {
    // Salva a ID da aba clicada no menu
    var tab_id = $(this).attr('data-id');
    // Remove a classe ativo de todos os links do menu
    $(this).parent('.tabs_menu').find('a').removeClass('active');
    // Adiciona a classe ativo no menu selecionado
    $(this).toggleClass('active');
    // esconde todas as abas abertas
    $(this).parent('.tabs_menu').parent('.tabs').find('.tab').hide();
    // faz com que a primeira aba sempre esteja aberta
    $(this).parent('.tabs_menu').parent('.tabs').find('.tabs').find('.tab-content').children(":first").css('display', 'block');
    // abre a aba com o ID salvado na variavel
    $("#" + tab_id).fadeIn('300');
    $("#" + tab_id).addClass('active');
})
});

// **********************************
//             Accordion
// **********************************

$(".accordion_trigger, .trigger").click(function() {
  $(this).toggleClass('ativo');
  $(this).next('.item').slideToggle('swing');
});
