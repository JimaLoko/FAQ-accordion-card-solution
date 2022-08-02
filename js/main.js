const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        if(!acc.parentElement.classList.contains('active')){
            accordion.forEach(item => {
                item.parentElement.classList.remove('active');
            })
            acc.parentElement.classList.add('active');
        } else if(acc.parentElement.classList.contains('active')){
            accordion.forEach(item => {
                item.parentElement.classList.remove('active');
            })
        }
    })
})