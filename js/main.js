
$(function () {
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);


    function getAngle(diffX, diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
            Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);

        pos.x += diffX * speed;
        pos.y += diffY * speed;

        const angle = getAngle(diffX, diffY);
        const squeeze = getSqueeze(diffX, diffY);

        const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
        const rotate = 'rotate(' + angle + 'deg)';
        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

        cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);



    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function () {
            const className = this.getAttribute('cursor-class');
            cursor.classList.add(className);
        });

        curosrModifier.addEventListener('mouseleave', function () {
            const className = this.getAttribute('cursor-class');
            cursor.classList.remove(className);
        });
    });
    let menu = $('header li');
    menu.mouseleave(function () {
        $(this).removeClass('on');
    })
    menu.mouseenter(function () {
        $(this).addClass('on');
    })
    menu.click(function () {
        let menuIndex = $(this).index();
        console.log(menuIndex)
        let contPage = $('.cont').eq(menuIndex);
        let contPageTop = contPage.offset().top;
    })

    let hd = $('header');
    let headerTop = hd.offset().top;
    console.log(headerTop)
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (headerTop < scrollBar) {
            hd.addClass('on');
        } else {
            hd.removeClass('on');
        }
        if ($('.se01').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(0).addClass('on');
        } else {
            menu.removeClass('on');
        }
        if ($('.se02').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(1).addClass('on');
        }
        if ($('.se03').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(2).addClass('on');
        }
        if ($('.se04').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(3).addClass('on');
        }
        if ($('.se05').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(4).addClass('on');
        }
        if ($('.se06').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(5).addClass('on');
        }
        if ($('.se07').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(6).addClass('on');
        }
        if ($('.se08').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(7).addClass('on');
        }
        if ($('.pdf').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(8).addClass('on');
        }
        if ($('.profile').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(9).addClass('on');
        }
    })
 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4.5,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let imgBtn = document.querySelectorAll('.menu li');
    let list = document.querySelectorAll('.mySwiper');
    for (let i = 0; i < imgBtn.length; i++) {
        imgBtn[i].onclick = function () {
            imgBtn.forEach(function (item) {
                item.classList.remove('on');
            })
            list.forEach(function (item) {
                item.classList.remove('on');
            })
            imgBtn[i].classList.add('on');
            list[i].classList.add('on');
        }
    }
   
    window.onscroll = function () {
        let scrollBar = window.scrollY;
        let se01 = document.getElementsByClassName('se01')[0];
        let se02 = document.getElementsByClassName('se02')[0];
        let se03 = document.getElementsByClassName('se03')[0];
        let se04 = document.getElementsByClassName('se04')[0];
        let se05 = document.getElementsByClassName('se05')[0];
        let se06 = document.getElementsByClassName('se06')[0];
        let se07 = document.getElementsByClassName('se07')[0];
        let se08 = document.getElementsByClassName('se08')[0];

        if (se01.offsetTop <= scrollBar) {
            se01.classList.add('on');
        } else {
/*             se01.classList.remove('on');
 */         }
        if (se02.offsetTop <= scrollBar) {
            se02.classList.add('on');
        } else {
/*              se02.classList.remove('on')
 */         }
        if (se03.offsetTop <= scrollBar) {
            se03.classList.add('on');
        } else {
/*              se03.classList.remove('on')
 */         }
        if (se04.offsetTop <= scrollBar) {
            se04.classList.add('on');
        } else {
/*             se04.classList.remove('on')
 */        }
        if (se05.offsetTop <= scrollBar) {
            se05.classList.add('on');
        } else {
/*             se05.classList.remove('on')
 */        }
        if (se06.offsetTop <= scrollBar) {
            se06.classList.add('on');
        } else {
/*             se06.classList.remove('on')
 */        }
        if (se07.offsetTop <= scrollBar) {
            se07.classList.add('on');
        } else {
/*             se07.classList.remove('on')
 */        }
        if (se08.offsetTop <= scrollBar) {
            se08.classList.add('on');
        } else {
/*             se08.classList.remove('on')
 */        }

    }
    let btn01 = document.getElementsByClassName('btn01');
    let btn02 = document.getElementsByClassName('btn02');
    let btn03 = document.getElementsByClassName('btn03')[0];
    for (let i = 0; i < btn01.length; i++) {
        btn01[i].onmouseenter = function () {
            btn01[i].innerText = 'GO!';
            btn01[i].style.width = '91.7px';
            btn01[i].style.display = 'block';
        
        }
        btn01[i].onmouseleave = function () {
            btn01[i].innerText = '제작과정보기';
        }
        for (let i = 0; i < btn02.length; i++) {

        btn02[i].onmouseenter = function () {
            btn02[i].innerText = 'GO!';
            btn02[i].style.width = '91.7px';
            btn02[i].style.display = 'block';
        }
        btn02[i].onmouseleave = function () {
            btn02[i].innerText = '홈페이지방문';
        }
    }
        btn03.onmouseenter = function () {
            btn03.innerText = 'GO!';
            btn03.style.width = '81.7px';
            btn03.style.display = 'block';
        }
        btn03.onmouseleave = function () {
            btn03.innerText = '디자인보기';
        }
    }
})