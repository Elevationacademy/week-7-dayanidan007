
let think = $('input').val()
$('button').on('click',function(think){
    console.log(think)
    const source = $('#post-template').html()
    const template = Handlebars.compile(source)
    let newHtml = template({ think })
    $('#posts').append(newHtml)
})