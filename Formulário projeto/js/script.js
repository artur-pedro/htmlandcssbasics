
const optionalBox = document.querySelector('.optional-box');
optionalBox.style.display = 'none';
const checkboxes = optionalBox.querySelectorAll('input[type="checkbox"]');

async function showSecond(target) {
    await fadeOut(optionalbox);
    await fadeIn(optionalbox);
}
function fadeOut(target, duration = 500) {
    return new Promise(resolve =>{
        const animationEnded = () => {
            target.style.display = 'none';
            target.onanimationend = null;
            target.style.animation = null;
            resolve();
        };
        target.onanimationend = animationEnded;
        target.style.animation = `fade-out ${duration}ms 1`;
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true
            checkbox.checked = false;
        });
    })
}
function fadeIn(target, duration = 500, display = 'block') {
    return new Promise(resolve =>{
        const animationEnded = () => {
            target.onanimationend = null;
            target.style.animation = null;
            resolve();
        };
        target.onanimationend = animationEnded;
        target.style.display = display;
        target.style.animation = `fade-in ${duration}ms 1`;
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false
        })
    })
}
function handleRadioClick(isDnb) {
    const optionalBox = document.getElementById('optional-box');
    if (isDnb) {
        fadeIn(optionalBox);
    } else {
        fadeOut(optionalBox);
    }
}