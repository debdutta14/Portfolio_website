var tl=gsap.timeline();

tl.from(".project-h1",{
    opacity:0,
    y:-70,
    duration:0.8,
})
tl.from(".ul-li",{
    opacity:0,
    scale:0.5,
    stagger:0.3,
})
tl.from(".my-project",{
    x:-100,
    opacity:0,
    stagger:0.7,
})

$(document).ready(function () {
    // Initially, show all projects
    $('.project').show();

    // When a category is clicked
    $('ul.categories li').click(function () {
        var category = $(this).text().toLowerCase().trim();
        // Show projects related to the clicked category and hide others
        if (category === 'all') {
            $('.project').show();
        } else {
            $('.project').hide().filter('.' + category).show();
        }
    });
    //alert for online voting
    $(".inform").click(function(){
        alert("Project in progress");
    })
});