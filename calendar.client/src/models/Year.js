export class Year {
  constructor(data) {
    this.year = data  // int
    this.months = {
      "January": 31,
      "February": data % 4 == 0 ? 29 : 28,
      "March": 31,
      "April": 30,
      "May": 31,
      "June": 30,
      "July": 31,
      "August": 31,
      "September": 30,
      "October": 31,
      "November": 30,
      "December": 31
    }
    this.monthdays = [31, 31, data % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.YY = parseInt(data.toString().slice(-2))
    this.yearCode = (this.YY + Math.floor(this.YY / 4)) % 7
  }
}