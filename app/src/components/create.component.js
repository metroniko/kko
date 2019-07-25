import { Component } from'../core/component.js'
import { Form } from'../core/form'
import { Validators } from '../core/validators'
import { apiservice } from '../services/api.services'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }
  init() {
    this.$el.addEventListener('submit', submitHendler.bind(this))
    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLenght(10)]
      // к полю name в вёрстке пожно добиваться к элелементу в html this.$el.fulltext/title/type
    })
  }
}
async function submitHendler(e) {
  e.preventDefault()
  if (this.form.isValid()) {
    const formData = {
      type:this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value()//spread оператор в деле
    }
    this.form.clear()
    console.log('submit', formData);
    await apiservice.createPost(formData)
  }
}