export default class Filters {
  constructor() {
    this.form = document.getElementById('filters');
    this.btn = document.getElementById('search');
    this.todayBtn = document.getElementById('today');
    this.tomorrowBtn = document.getElementById('tomorrow');
    this.nextWeekBtn = document.getElementById('next-week');
  }

  onClick(callback) {

    this.btn.onclick = (e) => {
      e.preventDefault();
      const data = new FormData(this.form);
      callback({
        type: data.get('type'),
        words: data.get('words'),
        specificDate: data.get('specific-date'),
        startDate: data.get('start-date'),
        endDate: data.get('end-date'),
      });
    };


    this.todayBtn.onclick = () => {
      const today = new Date().toISOString().split('T')[0];
      callback({ specificDate: today });
    };


    this.tomorrowBtn.onclick = () => {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      callback({ specificDate: tomorrow });
    };


    this.nextWeekBtn.onclick = () => {
      const today = new Date();
      const nextWeek = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0];
      callback({
        startDate: new Date().toISOString().split('T')[0],
        endDate: nextWeek,
      });
    };
  }
}
