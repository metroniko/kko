import {Component} from'../core/component.js'
import {apiservice} from "../services/api.services"
import {renderPosts} from "../template/post.template"

export class FavoriteComponent extends Component {
  constructor(id, {loader}) {
    super(id)
    this.loader = loader
  }
  init() {
    this.$el.addEventListener('click', linkClickHandler.bind(this))
  }
  onShow() {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const html = renderList(favorites)
    this.$el.insertAdjacentHTML('afterbegin', html)
  }
  onHide() {
    this.$el.innerHTML = ' '
  }
}

async function linkClickHandler(e) {
  e.preventDefault()
  // в методе contains можно проферять элемент на содержание определённого класса
  if(e.target.classList.contains("js-link")) {
    this.loader.show()
    const dataPost = await apiservice.fentchPostId(e.target.dataset.id)
    this.loader.hide()
    e.target.parentNode.remove()
    this.$el.insertAdjacentHTML('afterbegin', renderPosts(dataPost,{option:false}))
  }
}

function renderList(list = []) {
  if (list.length) {
    return  `
      <ul>
      ${list.map(item => `<li><a href="#" class="js-link" data-id=${item.id}>${item.title}</a></li>`).join(' ')}
      </ul>
    `
  }
  return '<p class="center" >Вы пока ничего не добавили</p>'
}