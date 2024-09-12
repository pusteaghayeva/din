// document.onclick = function (e) {
//     if (e.target.id !== 'top-panel' && e.target.id !== 'header-top__expand') {
//         if (e.target.offsetParent && e.target.offsetParent.id !== 'top-panel')
//             var topPanel = document.getElementById('top-panel');
//         var topPanelButton = document.getElementById('header-top__expand');
//         topPanel.style.display = "none";
//         topPanelButton.classList.remove("header-top__expand-active");
//     }
// }


// Slick sliders ending

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    })
})


function closeCityModal() {
    let cityModal = document.querySelector('.city-modal');
    cityModal.style.display = "none";
    // cityModal.style.background= "red";
}

function getCity() {
    let cityModal = document.querySelector('.city-modal');
    cityModal.style.display = "block"
}

// function handleSidebar() {
//     let sidebarList = document.getElementById('sidebar-list');
//     let sidebarOpener = document.getElementById('sidebar-expand-icon');

//     if (sidebarOpener.classList.contains("sidebar-expanding-open")) {
//         sidebarList.style.display = "none"
//         sidebarOpener.classList.remove("sidebar-expanding-open");
//     } else {
//         sidebarList.style.display = "block";
//         sidebarOpener.classList.add('sidebar-expanding-open');
//     }
// }


$(document).ready(function () {
    $("#dom-search-input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".city-list .city-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});