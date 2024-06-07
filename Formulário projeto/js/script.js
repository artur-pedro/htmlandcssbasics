
const dnbRadio = document.getElementById('dnb');
const nonDnbRadio = document.getElementById('nondnb');
const optionalBox = document.querySelector('.optional-box');
optionalBox.style.display = 'none';
const checkboxes = optionalBox.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.disabled = true
});
function toggleOptionalBox() {
    if (dnbRadio.checked) {
        optionalBox.style.display = 'block';
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false
            checkbox.checked = false;
        });
    } else {
        optionalBox.style.display = 'none';
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
            checkbox.checked = false;
        });
    }
}
dnbRadio.addEventListener('change', toggleOptionalBox);
nonDnbRadio.addEventListener('change', toggleOptionalBox);