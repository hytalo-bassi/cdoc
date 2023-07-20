export default class Contato {
  constructor(email, telefone) {
    this.values = [email, telefone]
  }

  get email() {
    return this.values[0]
  }

  get telefone() {
    return this.values[1]
  }
}
