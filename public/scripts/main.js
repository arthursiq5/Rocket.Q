import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', event => handleClick(event, false))
})

function handleClick (event, check = true) {
    let text = check ? 'Marcar como lida essa pergunta' : 'Excluir essa pergunta'
    modalTitle.innerHTML = text
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()}?`

    modal.open()
}
