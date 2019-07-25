export class Validators {
  static required(value = '') { // Cтатические методы вызываются через имя класса.Статические методы часто используются для создания вспомогательных функций приложения.
    return value && value.trim()
  }

  static minLenght(length) {
    return value => {
      return value.length >= length
    }
  }
}