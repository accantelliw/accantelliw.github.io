$(document).ready(function() {

    alert('start');

    $.getJSON('./data/data.json', function(data) {
        console.log(JSON.stringify(data));
    });
    
});