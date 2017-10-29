$(document).ready(function() {
// passage sur menu shows affiche sous-menu...
  $('.menuderoulant').on('mouseenter', function() {
 	$(this).find('.list').css('visibility', 'visible');
  });

// ... et disparait quand la souris s'en va
  $('.menuderoulant').on('mouseleave', function() {
  	$(this).find('.list').css('visibility', 'hidden');
  });

// passage sur image change son css et affiche petit texte...
  $('#shows').on('mouseenter', '.photo', function() {
    $(this).find('.image').css({'box-shadow': '5px 5px 2px #888'});
    $(this).parent().find('.short').css('display', 'block');
  });

// ... et retour au css de départ et disparition du texte quand la sourit s'en va
  $('#shows').on('mouseleave', '.photo', function() {
    $('#shows').find('.short').css('display', 'none');
    $('#shows').find('.long').css('visibility', 'hidden');
    $(this).find('.image').css({'box-shadow': ''});
  });

// clic sur image affiche texte long...
  $('#shows').on('click', '.photo', function() {
	$(this).parent().find('.short').css('display', 'none');
	$(this).parent().find('.long').css('visibility', 'visible');
  });

// ...et disparait quand la souris part
	$('.long').on('mouseleave', function() {
	  $(this).css('visibility', 'hidden');
	});

// clic sur petit texte affiche texte long (surtout pour version mobile)
  $('#shows').on('click', '.short', function() {
  	$(this).parent().find('.long').css('visibility', 'visible');
  });

// passage sur button change le bouton de couleur...
  $('.photo').on('mouseenter', 'button', function() {
    $(this).css({'background-color': 'white', 'color': '#777'});
  });

// ...et revient à la normale quand la souris s'en va
   $('.photo').on('mouseleave', 'button', function() {
    $(this).css({'background-color': '#777', 'color': 'white'});
  });
  
// clic sur button affiche fenetre remerciement
  $('.photo').on('click', 'button', function() {
    alert('thanks!');
  });

// passage sur face affiche nom et fonction sur fond transparent
  $('#team').on('mouseenter', '.face', function() {
    $(this).find('img').addClass('hiddenface');
    $(this).find('p').css('visibility', 'visible');
  });

// et disparait quand la souris s'en va
  $('#team').on('mouseleave', '.face', function() {
  	$(this).find('img').removeClass('hiddenface');
    $(this).find('p').css('visibility', 'hidden');
  });

// petit message quand clic sur 'thanks to you'
  $('#thanks').on('click', function() {
    alert('Merci cher correcteur :)');
  })
});