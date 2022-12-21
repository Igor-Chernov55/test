const blockMain = document.querySelector('.blockMain')
const fakeBox = document.querySelector('.fakeBox')

blockMain.addEventListener('click', function () {
    fakeBox.classList.toggle('active')
})
