var buildTemplate = (obj) => {
    //return all matched countries inside an html template, or indicate there were no results
    var html = ''

    if(obj.length){
        html = '<tr><td colspan="2" class="message">Your search returned ' + obj.length + ' result(s)</td></tr>'
        $.each(obj, function( i, value ) {
          html = html.concat('<tr><td>' + value.name + '</td><td>' + value.code + '</td></tr>')
        });
    } else {
        html = '<tr><td colspan="2" class="message error">Your search returned 0 results</td></tr>'
    }

    return html
}

(function(){
    var panel = $('#country-list')
    var form = $('#search-countries')
    var table = $('#country-table')

    form.on('submit', function(e){
        e.preventDefault()

        table.hide()
        var searchType = $(this).find('select option:checked').val()
        var value = $(this).find('input[type="search"]').val()

        var list = Search.getList(value, searchType)
        panel.html(buildTemplate(list))
        table.show()
    })
})()
