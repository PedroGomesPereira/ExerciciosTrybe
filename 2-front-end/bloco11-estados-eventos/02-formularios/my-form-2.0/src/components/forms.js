import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: false,
      resume: '',
      cargo: '',
      cargoDesc: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome:
            <textarea name="nome" value={this.state.nome} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <textarea name='email' value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            CPF:
            <textarea name="cpf" value={this.state.cpf} onChange={this.handleChange} />
          </label>
          <label>
            Endereço:
            <textarea name="endereco" value={this.state.endereco} onChange={this.handleChange} />
          </label>
          <label>
            Cidade:
            <textarea name="cidade" value={this.state.cidade} onChange={this.handleChange} />
          </label>
          <label>
            Estado:
            <textarea name="estado" value={this.state.estado} onChange={this.handleChange} />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Forms;
