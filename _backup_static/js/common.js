// Header Fixed   
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 20) {
        $('header').addClass('header-fixed');
    } else if (height == 0) {
        $('header').removeClass('header-fixed');
    }
});

$(window).scroll(() => $(window).scrollTop() > 20 ?
    $('.dtlsban').addClass('fixed') :
    $('.dtlsban').removeClass('fixed'));

$(document).ready(function () {
    //leadership Carousel
    var owl = $('.hmeabtsli');
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        video: true,
        animateOut: 'fadeOut',
        margin: 0,
        autoplay: 6000,
        slideSpeed: 100,
        smartSpeed: 6000,
        autoplayHoverPause: false,
    });
    var owl = $(".pdfSli");
    owl.owlCarousel({
        items: 3,
        mouseDrag: false,
        nav: true,
        loop: true,
        dots: false,
        margin: 30,
        autoplay: true,
        slideSpeed: 3000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },
            1280: {
                items: 2
            },
        }
    });

    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");

    function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
    }
    $('.carousel').carousel({})

    //ReadMore Script
    $('.ReadMore').click(function () {
        $('.HideText').slideToggle();
        $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
    });
    $('.ReadMoreOne').click(function () {
        $('.HideTextOne').slideToggle();
        $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
    });
    $('.ReadMoreTwo').click(function () {
        $('.HideText').slideToggle();
        $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
    });
    // Copy icon
    document.addEventListener("click", function (e) {
        if (!e.target.classList.contains("copyBtn")) return;
        let btn = e.target;
        let block = btn.closest("li");
        let copyEl = block.querySelector(".copyText");
        let toast = block.querySelector(".toast");
        let text = copyEl.innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 2000);
        });
    });
    if (typeof Swiper !== "undefined" && document.querySelector(".marquee-slider")) {
        var swiper = new Swiper(".marquee-slider", {
            slidesPerView: 'auto',
            spaceBetween: 15,
            loop: true,
            speed: 12000,
            allowTouchMove: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });
    }

});
document.addEventListener("click", function (e) {
    if (e.target.closest("#openPopupBtn")) {
        const popup = document.getElementById("sidePopup");
        popup?.classList.add("active");
    }
    if (e.target.closest("#closePopupBtn")) {
        const popup = document.getElementById("sidePopup");
        popup?.classList.remove("active");
    }
});
//Accordion
document.querySelectorAll(".accordion").forEach(a => {
    a.addEventListener("click", () => {
        a.classList.toggle("active");
        let p = a.nextElementSibling;
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});

//Footer Html
fetch('/footer.html')
    .then(r => r.text())
    .then(d => {
        $('#footerSec').html(d);
        let p = location.pathname.split('?')[0].split('#')[0];
        if (p.length > 1) p = p.replace(/\/$/, '');
        $('#footerSec a').each(function () {
            let h = $(this).attr('href');
            if (!h || h === '#') return;
            if (h.length > 1) h = h.replace(/\/$/, '');
            if (h === p) {
                $(this).addClass('active')
                    .parent().addClass('active');
            }
        });
        $('#currentYear').text(new Date().getFullYear());
        typeof setupBackToTop === 'function' && setupBackToTop();
    })
    .catch(e => console.error(e));
//Side Menu
fetch('/sidemenu.html')
    .then(r => r.text())
    .then(d => {
        $('#sideMenuSec').html(d);
        let p = location.pathname;
        $('#sideMenuSec a').each(function () {
            if (this.pathname === p)
                $(this).closest('li').addClass('active')
                    .parents('li').addClass('active');
        });
    });
//Side Menu
fetch('/sidemenublog.html')
    .then(r => r.text())
    .then(d => {
        $('#sideMenublog').html(d);
        let current = window.location.pathname;
        $('#sideMenublog a').each(function () {
            if (this.pathname === current) {
                $(this).closest('li').addClass('active');
            }
        });
    })
    .catch(e => console.error(e));
// "Back to Top" scroll logic
function setupBackToTop() {
    $(window).scroll(() => $(this).scrollTop() > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut());
    $('#toTop').click(() => setTimeout(() => $('html,body').animate({ scrollTop: 0 }, 500), 200));
}
// Load the Header dynamically from 'header.html'
fetch('/header.html')
    .then(r => r.text())
    .then(d => {
        $('#header').html(d);
        /* ===== ACTIVE MENU (SMART MATCH) ===== */
        let p = location.pathname.split('?')[0].split('#')[0];
        if (p.length > 1) p = p.replace(/\/$/, '');
        $('#header a').removeClass('active');
        $('.has-sub').removeClass('par-active');
        $('#header a').each(function () {
            let h = $(this).attr('href');
            if (!h || h === '#') return;
            if (h.length > 1) h = h.replace(/\/$/, '');
            // Exact match
            if (h === p) {
                $(this).addClass('active')
                    .closest('.has-sub')
                    .addClass('par-active');
            }
            // If inside same section (for submenu pages)
            else if (p.startsWith(h) && h !== '/') {
                $(this).closest('.has-sub').addClass('par-active');
            }
        });
        /* ===== BURGER ===== */
        $('#menu')
            .prepend('<div id="burgernav"><span></span></div>')
            .on('click', '#burgernav', function () {
                $(this).next('ul').toggleClass('open');
            });
        /* ===== SUBMENU ===== */
        $(document).on('click', '.submenu-button', function () {
            let t = $(this).closest('.has-sub');
            $('.has-sub').not(t)
                .removeClass('par-active')
                .find('.inner-nav-div').slideUp(500);
            t.toggleClass('par-active')
                .find('.inner-nav-div').slideToggle(600);
            $(this).toggleClass('mobile-nav-minus mobile-nav-plus');
        });
        /* ===== LOGIN ===== */
        $('#login').click(function (e) {
            e.preventDefault();
            let v = $('#text').val().trim();
            if (v) window.open(`http://${v}.invoicehub360.com`);
        });
        $('.popover-btn').click(() => $('.pop-over').toggleClass('popover-open'));
    });

// Animate plugin
if ($(window).width() >= 992) {
    $(window).on({
        scroll: function () {
            var sc = $(window).scrollTop();
            if ($('.visionWrap').length > 0) {
                visionOn(sc)
            }
            mainMotion(sc)
        }
    });
    function mainMotion(sc) {
        $('.mtMain').each(function () {
            if (($(this).offset().top - 600) < sc) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        })
    }
}
//Cookies
(function () {
    "use strict";
    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");
    if (!cookieAlert) {
        return;
    }
    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();


//Phone Email Valid Form
const usPhone = v => v.replace(/\D/g, "").slice(0, 10).replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => a ? `(${a}${b ? `) ${b}${c ? `-${c}` : ""}` : ""}` : ""), rmErr = e => { const g = e.closest(".form_group"); g && g.querySelector(".error-message")?.remove() }, showErr = (e, m) => { rmErr(e); const g = e.closest(".form_group"), d = document.createElement("div"); d.className = "error-message"; d.style = "color:red;font-size:12px;margin-top:4px"; d.textContent = m; g.appendChild(d) };
document.addEventListener("input", e => {
    if (e.target.classList.contains("phone")) e.target.value = usPhone(e.target.value);
});
document.addEventListener("blur", e => {
    const el = e.target;
    if (el.classList.contains("phone")) {
        const ok = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(el.value);
        ok ? (el.style.borderColor = "", rmErr(el)) : (el.style.borderColor = "red", showErr(el, "Please enter a valid 10-digit phone number."));
    }
    if (el.classList.contains("email")) {
        const ok = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(el.value);
        ok ? (el.style.borderColor = "", rmErr(el)) : (el.style.borderColor = "red", showErr(el, "Please enter a valid email address."));
    }
}, true);
document.addEventListener("submit", e => {
    if (!e.target.classList.contains("validateForm")) return;
    let ok = true, f = e.target;
    f.querySelectorAll(".phone").forEach(i => { if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(i.value)) ok = false, i.style.borderColor = "red", showErr(i, "Please enter a valid 10-digit US phone number."); });
    f.querySelectorAll(".email").forEach(i => { if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(i.value)) ok = false, i.style.borderColor = "red", showErr(i, "Please enter a valid email address."); });
    if (!ok) e.preventDefault(), f.querySelector(".error-message")?.scrollIntoView({ behavior: "smooth", block: "center" });
});















