export default class Endereco {
  constructor(cidade, uf, cep, bairro, logradouro) {
    this.values = [cidade, uf, cep, bairro, logradouro]
  }

  get cidade() {
    return this.values[0]
  }

  get uf() {
    return this.values[1]
  }

  get cep() {
    return this.values[2]
  }

  get bairro() {
    return this.values[3]
  }

  get logradouro() {
    return this.values[4]
  }
}
