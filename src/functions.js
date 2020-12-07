export function submitBtn(event) {
    let mess = this.message
    const post = {
        post: mess,
        date: new Date().toJSON()
    }

    if (!mess) {
        alert('Вы ничего не ввели!')
    }
    else {
        sendPost(post)
        this.message = '' 
    }
}

export function sendPost(post) {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(popup)
        
}

function popup() {
    let output = document.querySelector('.post-block')
    let popup = document.createElement('div')
    let closeBtn = document.createElement('button')
    let closeImg = document.createElement('img')
    closeImg.src = '/src/assets/images/close.png';
    closeImg.classList.add('close__img')
    closeBtn.classList.add('close')
    closeBtn.append(closeImg)
    popup.classList.add('popup')
    popup.textContent = 'Спасибо, отзыв опубликован!'
    popup.append(closeBtn)
    output.appendChild(popup)
    closeBtn.addEventListener('click', (event) => {
        popup.remove()
    })
    
}