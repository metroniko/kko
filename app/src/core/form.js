export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }
  value() {
    const value = {}
    //object.keys() возвращает массив ключей
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value
    });
    return value
  }
  clear() {
    Object.keys(this.controls).forEach(control => {
     this.form[control].value = ''
    });
  }
  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach(control => {
      const validators = this.controls[control]
      
      let isValid = true
      validators.forEach(validator => {
        isValid = validator(this.form[control].value) && isValid
      })

      isValid ? clearError(this.form[control]) : setError(this.form[control])

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}
function setError($control) {
  const error = '<p class="validation-error">неверно ввежено значение</p>'
  clearError($control)

  $control.classList.add('invalid')
  $control.insertAdjacentHTML('afterEnd',error)
}
function clearError($control) {
  $control.classList.remove('invalid')
  if ($control.parentElement.querySelector('p')!== null) {
    $control.parentElement.removeChild($control.parentElement.querySelector('p'))  
  }
  // $control.closest('.form-control').removeChild($control.nextSibling)
}