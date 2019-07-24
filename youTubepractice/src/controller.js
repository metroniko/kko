class Controller {//отвучает за взаимодействие между дом жлемементами с вью частью
  constructor(model, view) {
    this.model = model
    this.view = view

   view.on('add', this.addTodo.bind(this))
   view.on('toggle', this.toggleTodo.bind(this))
   view.on('edit', this.editTodo.bind(this))
   view.on('remove', this.removeTode.bind(this))
  }

  addTodo(title) {
    const todo = this.model.addItem({
      id: Date.now(),
      title,
      completed:false
    })
    this.view.addItem(todo)
  }
  toggleTodo({ id,completed }) {
    const item = this.model.updateItem(id, { completed})
    this.view.toggleItem(todo)
  }

  editTodo({ id, title }) {
    const todo = this.model.updateItem(id, { title })

    this.view.addItem(todo)
  }

  removeTode(id) {  
  this.model.removeItem(id) 
  this.view.removeItem(id)
  } 
}

export default Controller