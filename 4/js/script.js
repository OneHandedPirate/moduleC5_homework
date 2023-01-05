let result = document.querySelector('#result');

function getPicture() {
    let width = +document.querySelector('#width').value;
    let height = +document.querySelector('#height').value;

    if (100 <= width && width <= 300 && 100 <= height && height <= 300) {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                result.innerHTML = `<img src=${response.url} alt="some random pic">`;
            })
            .catch(() => console.log('error'))
    } else {
        result.innerText = 'Одно или оба числа вне заданного диапазона!';
    }

    document.querySelector('#width').value = '';
    document.querySelector('#height').value = '';
}
