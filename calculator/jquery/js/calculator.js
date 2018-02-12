(function(){
    let buttons = $('#calculator button')
    let panel = $('#totalPanel')

    $(buttons).each(function(index){
        $(this).on('click', function(e){
            panel.html(Calc.getValue(this.value))
        })
    })
})()
