import Alert from './alert.js';

export default class Modal {
  constructor() {
    this.title = document.getElementById('modal-title');
    this.description = document.getElementById('modal-description');
    this.date = document.getElementById('modal-date'); // Nuevo campo de fecha
    this.completed = document.getElementById('modal-completed');
    this.btn = document.getElementById('modal-btn');
    this.alert = new Alert('modal-alert');

    this.todo = null;
  }

  setValues(todo) {
    this.todo = todo;
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.date.value = todo.date;
    this.completed.checked = todo.completed;
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (!this.title.value || !this.description.value || !this.date.value) {
        this.alert.show('Title, description, and date are required');
        return;
      }

      $('#modal').modal('toggle');

      callback(this.todo.id, {
        title: this.title.value,
        description: this.description.value,
        date: this.date.value, // Pasamos la fecha actualizada al callback
        completed: this.completed.checked,
      });
    }
  }
}
