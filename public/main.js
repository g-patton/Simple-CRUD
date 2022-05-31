const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
// Send PUT Request here
})

fetch({ /* request */ })
.then(res => {
if (res.ok) return res.json()
})
.then(response => {
window.location.reload(true)
})



update.addEventListener('click', _ => {
    fetch('/quotes', {/* ... */})
    })

update.addEventListener('click', _ => {
    fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    name: 'Darth Vadar',
    quote: 'I find your lack of faith disturbing.'
    })
    })
    })



deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    name: 'Darth Vadar'
    })
    })
    .then(res => {
    if (res.ok) return res.json()
    })
    .then(data => {
    window.location.reload()
    })
    })
