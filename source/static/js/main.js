$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    autosize($('textarea'));

    //=include modules.js
});