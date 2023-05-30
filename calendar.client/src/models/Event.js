class Event {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.date = new Date(data.date).toISOString().slice(0, 10)
  }
}