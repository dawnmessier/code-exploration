(function(options){
    'use strict'
    var defaultOptions = {
        tag: {
            type: 'div',
            class: 'image'
        },
        caption: {
            type: 'span',
            class: 'caption'
        },
        color: 'red',
        parent: $('#testParent')
    }

    var opts = $.extend(true, {}, defaultOptions, options)

    $.fn.createStuff = function(){
        return this.each(function(index, ele){
            var div = '<' + opts.tag.type + ' class="' + opts.tag.class + '">' + $(this).text() + ' with an index of '+index+'</' + opts.tag.type + '>'

            opts.parent.append(div)
        })
    }
})()
