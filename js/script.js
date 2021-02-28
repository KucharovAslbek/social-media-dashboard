let checkbox = document.querySelector('.checkbox');
let linkElem = document.querySelector('.style');
let dark = 'css/dark-theme.min.css';
let light = 'css/style.min.css';

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        localStorage.setItem('theme', dark);
        linkElem.setAttribute('href', dark);
    } else {
        localStorage.setItem('theme', light);
        linkElem.setAttribute('href', light);
    }
});

if (localStorage.getItem('theme') && localStorage.getItem('theme') === dark) {
    checkbox.setAttribute('checked','checked');
    linkElem.setAttribute('href', localStorage.getItem('theme'));
} else {
    linkElem.setAttribute('href', light);
}
