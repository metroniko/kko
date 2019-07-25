import {Component} from'../core/component.js'
import {apiservice} from "../services/api.services"
import {TransformServices} from "../services/transform.services"
import {renderPosts} from "../template/post.template"

export class PostComponent extends Component {
  constructor(id, {loader}) {
    super(id)
    this.loader = loader
  }
  async onShow() {
    this.loader.show()
    const fbData = await apiservice.getPost()
    const posts = TransformServices.fbObjectToArray(fbData)
    console.log(posts);
    
    const html = posts.map(key => renderPosts(key,{option:true}))
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }
  onHide() {
    this.$el.innerHTML = ''
  }
  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }
}



function buttonHandler(e) {
  const $el = e.target
  const id = $el.dataset.id  
  const title = $el.dataset.title

  if(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (favorites.map(item => item.id).includes(id)) {

      favorites = favorites.filter(fId =>  fId.id != id) 
      $el.textContent = 'Сохранить'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
    } else {

      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      $el.textContent = 'Удалить'
      
      favorites.push({id,title})
    }
    // favorites.includes(id)
    // ? favorites = favorites.filter(fId =>  fId != id)  
    // : favorites.push(id)

    localStorage.setItem('favorites', JSON.stringify(favorites))
  } 
}