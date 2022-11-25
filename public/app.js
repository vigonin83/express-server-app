document.addEventListener("click", event => {
  if (event.target.dataset.type === 'remove') {
     const id = event.target.dataset.id
     remove(id).then(() => {
        event.target.closest("li").remove()
     })
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" })
}

document.addEventListener("click", event => {
  if (event.target.dataset.type === 'update') {
    const id = event.target.dataset.id
    let updatedTitle = prompt("Введите новое название", event.target.closest("li").firstChild.textContent.trim())

    if (updatedTitle !== null && updatedTitle.length > 0 ) {
      updatedTitle.trim()
      event.target.closest("li").firstChild.textContent = updatedTitle
      update(id, updatedTitle)
    }
  }
})
async function update(id, updatedTitle) {
  await fetch(`/${id}`, { method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ title: updatedTitle }) })
}
