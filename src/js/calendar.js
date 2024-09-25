// calendar
// INCLUDE JQUERY & JQUERY UI 1.12.1

$(function () {
    $.datepicker.regional['az'] = {
        closeText: 'Bağla',
        prevText: 'Əvvəlki',
        nextText: 'Növbəti',
        currentText: 'Bugün',
        monthNames: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
            'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
        ],
        monthNamesShort: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyun',
            'İyul', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'
        ],
        dayNames: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
        dayNamesShort: ['Bz', 'B.E', 'Ç.A', 'Ç', 'C.A', 'Cüm', 'Şən'],
        dayNamesMin: ['B', 'Bz', 'ÇA', 'Ç', 'CA', 'C', 'Ş'],
        weekHeader: 'Həftə',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['az']);

    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast"
    });
});