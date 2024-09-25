// $(function() {
//     $('.blue-tooltip').click(function() {
//         $('.city-modal').hide();
//         var pid = $(this).data('pid');
//         var id = $(this).data('id');

//         if (id == 15) {
//             var u = config.lang + '/map/archive/' + id + '/';
//             //var u = config.mainUrl+ config.lang+ '/pressreliz/archive/1/'+d;
//             location.href = u;
//         } else {
//             $("#city_" + id).fadeIn();
//         }
//     });

//     $('.map-close-icon').click(function() {
//         $('.city-modal').hide();
//     });

//     var keyList = $('.search-panel input[name=key]').autocomplete({
//         source: function(request, response) {
//             console.log('search begin');
//             var stype = $('input[name="options"]:checked').val();

//             $.ajax({
//                 type: 'POST',
//                 dataType: 'json',
//                 url: config.mainUrl + 'service/search.GetContent/' + config.lang + '/' + stype,
//                 data: { maxRows: 20, q: request.term },
//                 success: function(data) {
//                     response($.map(data, function(item) { return { type: item.type, id: item.id, label: item.title, url: item.url } }));
//                 }
//             });
//         },
//         select: function(event, ui) {
//             //location.href=config.mainUrl+config.lang+'/firms/view/'+ui.item.id;
//             location.href = ui.item.url;
//             //console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
//         },
//         //open:function(){$('#searchform input[name=q]').autocomplete("widget").width(200);},
//         minLength: 1,
//     });



// })


$(function() {
    $('.blue-tooltip').click(function() {
        var id = $(this).data('id');

        // Bakıya klik edildiyində
        if (id == 15) {
            var u = 'baku.html'; // Yalnız 'baku.html' yazın
            location.href = u; // Yönləndirmək
        } else {
            // Başqa şəhər üçün kod
            $("#city_" + id).fadeIn();
        }
    });

    $('.map-close-icon').click(function() {
        $('.city-modal').hide();
    });

    // Autocomplete kodu...
});



// Xəritə yaratma funksiyası
function createMap() {
    const mapElement = document.getElementById('map');
    
    // Xəritəni yarat
    mapElement.addEventListener('click', function(event) {
        // Tıkladığın yerin koordinatlarını al
        const x = event.clientX;
        const y = event.clientY;

        // Naxçıvanın koordinatlarını təyin et (nümunə koordinatlar)
        const nakhCoordinates = {
            x: 300, // X koordinatı
            y: 200  // Y koordinatı
        };

        // Tıklama koordinatları Naxçıvan koordinatlarına bərabərsə
        if (x >= nakhCoordinates.x - 10 && x <= nakhCoordinates.x + 10 && 
            y >= nakhCoordinates.y - 10 && y <= nakhCoordinates.y + 10) {
            window.location.href = 'mapnakh.html'; // mapnakh.html-i aç
        }
    });
}

// Xəritəni yarat
createMap();
