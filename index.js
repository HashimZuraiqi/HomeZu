const h2 = document.querySelector('span');

var arr = [
    'Hashim Zuraiqi',
    'Zui',
    'HashimZu25',
];

function changeClick() {
    switch(h2.innerText) {
        case arr[0]:
            h2.innerText = arr[1];
            break;
        case arr[1]:
            h2.innerText = arr[2];
            break;
        default:
            h2.innerText = arr[0];
    }
    applyStyle(); // Ensure the style is applied after changing the text
}

function applyStyle() {
    h2.style.color = 'red'; // Add any other styles you want to apply
}

// Add event listeners
h2.addEventListener('click', changeClick);

// Apply the style initially
applyStyle();
