import Contato from './contato.js'
import Endereco from './endereco.js'

export default class Cliente {
  constructor(nome, razao_social, contato, cadastro, ie, endereco) {
    this.values = [nome, razao_social, contato, cadastro, ie, endereco]
  }

  get nome() {
    return this.values[0]
  }

  get razao_social() {
    return this.values[1]
  }

  get contato() {
    return this.values[2]
  }

  get cadastro() {
    return this.values[3]
  }

  get ie() {
    return this.values[4]
  }

  get endereco() {
    return this.values[5] 
  }
  
  toJson() {
    const obj = {
      nome: this.nome, 
      razao_social: this.razao_social,
      contato: {
        email: this.contato.email,
        telefone: this.contato.telefone
      },
      cadastro: this.cadastro,
      ie: this.ie,
      endereco: {
        cidade: this.endereco.cidade,
        uf: this.endereco.uf,
        cep: this.endereco.cep,
        bairro: this.endereco.bairro,
        logradouro: this.endereco.logradouro
      }
    }

    return obj
  }

  static json(obj) {
    const [contato, endereco] = [obj.contato, obj.endereco]
    return new Cliente(
      obj.nome,
      obj.razao_social, 
      new Contato(contato.email, contato.telefone),
      obj.cadastro,
      obj.ie,
      new Endereco(
        endereco.cidade,
        endereco.uf,
        endereco.cep,
        endereco.bairro,
        endereco.logradouro
      )
    )
  }
}
