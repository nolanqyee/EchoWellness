const images = [
    'suriHead.jpg',
    'dianaHead.jpg',
    'isabelleHead.jpg',
    'kassiaHead.jpg'
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('indexImage');
    imgElement.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = 'assets/index/' + images[currentIndex];
        imgElement.onload = () => {
            imgElement.classList.remove('fade-out');
        };}, 500);
}

setInterval(changeImage, 5000);