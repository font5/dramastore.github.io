function loadMore() {
    var button = document.getElementById('load-more-btn')
    var mainContainerList2 = document.querySelector('.main-container-list2')

    button.style.display = 'none'
    mainContainerList2.style.display = 'block'
}

function searching() {
    var input = document.getElementById('search');
    var filter = input.value.toLowerCase();
    var dramas = document.querySelectorAll('.header');
    var hrElement = document.querySelectorAll('.hr-element')
    document.querySelector('.main-container-list2').style.display = 'block'
    document.getElementById('load-more-btn').style.display = 'none'

    dramas.forEach(drama => {
        if (drama.innerText.toLowerCase().includes(filter)) {
            drama.parentElement.style.display = 'block'
            hrElement.forEach(hr => {
                hr.style.display = 'none'
            })
        }
        else {
            drama.parentElement.style.display = 'none'
        }
    })
}