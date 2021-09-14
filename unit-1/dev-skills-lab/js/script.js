$('.add-skill-button').on('click', evt => {
    let newSkill = $('.skill-input').val();
    $("ul").append('<li><button class="delete-skill-button">X</button ><span class="skill-text">' + newSkill + '</span></li>');
    $('.skill-input').val('');
})

$('ul').on('click', 'button', function() {
    $(this).closest('li').remove();
})