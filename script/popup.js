$('.closeBtn').on('click',function(){
    if($('#chk').is(':checked')){
        console.log('checked true')
        $.cookie('popup','none',{expires:3, path:'/'})
        $('#notice_wrap').fadeOut('fast')
    }
})

if($.cookie('popup')=='none'){
    $('#notice_wrap').hide()
}