require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        moment: 'https://rawgithub.com/timrwood/moment/2.1.0/min/moment.min'
    }
});

require(['app', 'jquery', 'moment'], function (app, $, moment) {
    'use strict';
    
    var m = moment("20131216", "YYYYMMDD").fromNow();
    var newText = 'Looking forward to seeing you '+ m +"!";
    $('#days p').text(newText).addClass('fadeIn');
});
