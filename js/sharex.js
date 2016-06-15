/*jslint browser: true*/
/*global $, jQuery, alert*/

"use strict";

var $window = $(window);
var $animation_elements = $(".animation-element");

function SlideCheck() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (element_bottom_position >= window_top_position &&
            element_top_position <= window_bottom_position) {
            $element.addClass("slide");
        } else {
            $element.removeClass("slide");
        }
    });
}

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases/latest").done(function (release) {
        var asset = release.assets[0];
        var downloadCount = 0;
        for (var i = 0; i < release.assets.length; i++) {
            downloadCount += release.assets[i].download_count;
        }
        var oneHour = 60 * 60 * 1000;
        var oneDay = 24 * oneHour;
        var dateDiff = new Date() - new Date(asset.updated_at);
        var timeAgo;
        if (dateDiff < oneDay) {
            timeAgo = (dateDiff / oneHour).toFixed(1) + " hours ago";
        } else {
            timeAgo = (dateDiff / oneDay).toFixed(1) + " days ago";
        }
        var releaseInfo = release.name + " was updated " + timeAgo + " and has been downloaded " + downloadCount.toLocaleString() + " times.";
        $(".sharex-download").attr("href", asset.browser_download_url);
        $(".sharex-download").prop("title", releaseInfo);

        $('[data-toggle="tooltip"]').tooltip();
    });
}

$(document).ready(function () {
    SlideCheck();

    $(".sharex-video").fancybox({
        padding: 5,
        margin: 0,
        autoSize: false,
        width: '1280px',
        height: '720px',
        helpers: {
            overlay: {
                locked: false,
                css: {
                    'background': 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        iframe: {
            preload: false
        }
    });

    $(".sharex-screenshots").fancybox({
        padding: 5,
        margin: 0,
        autoSize: false,
        width: '90%',
        height: '90%',
        helpers: {
            overlay: {
                locked: false,
                css: {
                    'background': 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        iframe: {
            preload: false
        }
    });

    GetLatestReleaseInfo();
});

$window.on("scroll resize", SlideCheck);
