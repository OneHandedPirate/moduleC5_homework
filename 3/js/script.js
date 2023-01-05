let input = document.getElementById('inpt');
let result = document.getElementById('result');

function sendRequest(value, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    }

    xhr.send();
}

function getPictures(pics) {
    let pictures = '';

    pics.forEach(item => {
        const picBlock = `
        <div class="pic">
            <img src="${item.download_url}" class="pic-image" alt="some pic"/>
        </div>
        `;
        pictures += picBlock;
    });

    result.innerHTML = pictures;
}

function getValue() {
    const value = input.value;

    if (1 <= +value && +value <= 10 ) {
        result.innerText = ''
        sendRequest(value, getPictures)
    } else if (value != '') {
        result.innerText = 'Число вне диапазона от 1 до 10'
    }
    else if (result.innerText === 'Число вне диапазона от 1 до 10') {
        result.innerText = ''
    }
    input.value = '';
}
