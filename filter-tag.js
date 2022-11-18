(function(){

    var $img = $('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {};

    $img.each(function() {
        var img = this;
        var tag = $(this).data('tags');

        if (tag) {
            tag.split(',').forEach(function(tagName){
                if (tagged[tagName] == null){
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
       

    $('<button/>',{
        text: 'Show All',
        class: 'active',
        click: function(){
            $(this)
              .addClass('active')
              .siblings()
              .removeClass('active');
            $img.show();
        }
    }).appendTo($buttons);
    $.each(tagged, function(tagName){
        $('<button/>',{
            text: tagName + '('+ tagged[tagName].length +')',
            click: function(){
                $(this)
                  .addClass('active')
                  .siblings()
                  .removeClass('active');
                $img
                  .hide()
                  .filter(tagged[tagName])
                  .show();
            }
        }).appendTo($buttons);
    });
}());
    