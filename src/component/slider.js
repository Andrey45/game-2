const slider = () => {
    let current = 0;
    let slider = document.querySelector('[data-js="slider"]');
    let allImages =  slider.querySelectorAll('img');
    let imgWidth = Math.ceil(100 / allImages.length);

    slider.style.width = `${allImages.length * 100}%`;

    allImages.forEach(item => item.style.width = `${imgWidth}%`);

    const animateLeft = (cur, callback) => {
        let i = 0;
        setInterval(() => i <= imgWidth ? (allImages[cur].style.marginLeft = `-${i}%`) && i++ : clearInterval(), 50);
        callback();
    };

    setInterval(() => current <= allImages.length - 2 ? animateLeft(current, () => current++) : window.location.href = "../Game/index.html", 3000);
};

document.addEventListener('DOMContentLoaded', () => slider());
document.addEventListener('keypress', e => e.code === 'Space' ? window.location.href = "../Game/index.html" : '');