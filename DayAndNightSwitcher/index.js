let sunEl = document.getElementById('sun');
let houseEl = document.getElementById('house');
let lightEl = document.getElementById('slight');
let backgroundEl = document.getElementById('modeTheme')

function nightMode(){
    backgroundEl.style.backgroundImage = 'url("https://res.cloudinary.com/djapaidrp/image/upload/v1690886903/My%20Images/DayAndNightSwitcher/backgroundNight_ivbtid.png")';
    sunEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886911/My%20Images/DayAndNightSwitcher/pngwing.com_6_tz6fiq.png";
    lightEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886896/My%20Images/DayAndNightSwitcher/lampNight_kfjvpf.png";
    houseEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886896/My%20Images/DayAndNightSwitcher/houseNight_jj0ubx.png";
}


function dayMode(){
    backgroundEl.style.backgroundImage = "url('https://res.cloudinary.com/djapaidrp/image/upload/v1690886898/My%20Images/DayAndNightSwitcher/backgroundDay_n543au.jpg')"
    sunEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886895/My%20Images/DayAndNightSwitcher/pngwing.com_3_p95dyc.png";
    lightEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886896/My%20Images/DayAndNightSwitcher/lampDay_n4chfv.png";
    houseEl.src="https://res.cloudinary.com/djapaidrp/image/upload/v1690886896/My%20Images/DayAndNightSwitcher/houseDay_svdwkl.png";
}