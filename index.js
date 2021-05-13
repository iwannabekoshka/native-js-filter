const list = document.querySelector('.list'),
      listItems = document.querySelectorAll('.list__item'),
      cards = document.querySelectorAll('.cards__item')

function filter() {
    list.addEventListener('click', event => {
        const listItem = event.target,
              targetID = listItem.dataset.id
        if (!listItem.classList.contains('list__item')) return

        listItems.forEach(listItem => { listItem.classList.remove('list__item--active') })
        listItem.classList.add('list__item--active')

        switch (targetID) {
            case 'all':
                cards.forEach(card => {
                    card.style.display = 'block'
                })
                break;
            case 'winter':
                displayHideCards(targetID)
                break;
            case 'spring':
                displayHideCards(targetID)
                break;
            case 'summer':
                displayHideCards(targetID)
                break;
            case 'autumn':
                displayHideCards(targetID)
                break;
        }
    })
}

function displayHideCards(className) {
    cards.forEach(card => {
        if (card.classList.contains(className)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
}

filter()