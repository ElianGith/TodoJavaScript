import Alert from './alert.js';

export default class AddTodo {
  constructor() {
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.date = document.getElementById('date'); // Nuevo campo para la fecha

    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (this.title.value === '' || this.description.value === '' || this.date.value === '') {
        this.alert.show('Title, description, and date are required');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value, this.date.value); // Pasamos la fecha al callback
      }
    };
  }
}
