import {Component} from'../core/component.js'
export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
  }
  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this))
    this.tabs = []
  }
  registerTabs(tabs) {
    this.tabs = tabs
  }
}
function tabClickHandler(e) {
  e.preventDefault()
  if (e.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      tab.classList.remove('active')
    })
    e.target.classList.add('active')
    this.tabs.forEach(t => {
      t.component.hide()
    })
    const activeTab = this.tabs.find(t => t.name === e.target.dataset.name)
    activeTab.component.show()
  }
}