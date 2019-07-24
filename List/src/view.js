import { createElement, EventEmiter } from "./helpers.js"

class View extends EventEmiter {//работа с дом элементами представление отвечает за мпнипуляцию с дом элементами
  constructor() {
    super()
    this.form = document.getElementById('todo-form')
    this.input = document.getElementById('add-input')
    this.list = document.getElementById('todo-list')

    this.form.addEventListener('submit', this.handleAdd.bind(this))
  }

  createElement(todo) {
    // const checkbox = createElement('input', { type: 'checkbox', className:'checkbox', checked: todo.completed ? 'checked': '' })
    // const label = createElement('label', { type:'label', className:'title' }, todo.title) 
    // const editINput = createElement('input', {type:'text', className= 'textfield'})
    // const editButton = createElement('button', {className:'edit'}, 'Изменить')
    // const removeButton = createElement('button', {className:'remove'}, 'Удалить')
    // const item = createElement('li',{className:`todo-item${todo.completed ? ' completed': ''}`,'data-id':todo.id},checkbox,label, editINput, 
    // editButton, removeButton)
    // return this.addEventListeners(item)
    const checkbox = createElement('input', { type: 'checkbox', className:'checkbox ', checked: todo.completed ? 'checked': '' })
    const label = createElement('label', { type:'text', className:'title' }, todo.title) 
    const editInput = createElement('input', { type:'text', className: 'textfield' })
    const editButton = createElement ('button', {className:'edit'}, 'Изменить')
    const removeButton = createElement('button', {className:'remove'}, 'Удалить')
    const item = createElement('li',{className:`todo-item${todo.completed ? ' completed': ''}`,'data-id':todo.id},checkbox,label, editInput, 
    editButton, removeButton)
    return this.addEventListeners(item)
  }
  findListItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`)
  }
  addEventListeners(item) {
    const checkbox = item.querySelector('.checkbox')
    const editButton = item.querySelector('button.edit')
    const removeButton = item.querySelector('button.remove')
    checkbox.addEventListener('change', this.handleToggle.bind(this))
    editButton.addEventListener('click', this.handleEdit.bind(this))
    removeButton.addEventListener('click',this.handleRemove.bind(this))

    return item
  }
  handleToggle(event) {
    const listItem = event.target.parentNode
    const id = listItem.dataSet.id// отличается
    const completed = event.target.completed
    this.emit('toggle', {id, completed})
  }
  handleEdit() {
    const listItem = event.target.parentNode
    const id = listItem.dataSet.id// отличается
    const label = listItem.querySelector('.title')
    const input = listItem.querySelector('.textfield')
    const editButton = listItem.querySelector('button.edit')
    const title = input.value
    const isEditing = listItem.classList.contains('editing')

    if (isEditing) {
      this.emit('edit', {id, title})

      this.emit('remove', id)
 
    } else {
      input.value = label.textContent
      editButton.textContent = 'Сохранить'
      listItem.classList.add('editing')
    }
  }
  handleRemove(event) {
    const listItem = event.target.parentNode      
  }

  handleAdd(event) {
    event.preventDefault()
    if (this.input.value = '') {
      return
    }
    const value = this.input.value
    
    this.emit('add',value)


  }
  addItem(todo) {//добавление жлементов в ul
    const listItem = this.createElement(todo)
    this.input.value = ''
    this.list.appendChild(listItem)
  }

  toggleItem(todo) {//чекбокс
    const listItem = this.findListItem(todo.id)
    const checkbox = listItem.querySelector('.checkbox')
    checkbox.checked = todo.completed
    if(todo.completed) {
      listItem.classList.add('completed')
    } else {
      listItem.classList.remove('completed')
    }
  }

  editItem(todo) {
    const listItem = this.findListItem(todo.id)
    const label = listItem.querySelector('.title')
    const input = listItem.querySelector('.textfield')
    const editButton = listItem.querySelector('button.edit')

    label.textContent = todo.title
    editButton.textContent = "Изменить"
    listItem.classList.remove('editing')
  } 
  removeItem() {
    const listItem = this.findListItem(todo.id)
    this.list.removeChild(listItem)
  }
}

export default View