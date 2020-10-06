import React, { Component } from 'react'

import iconeEntrar from '../../assets/img/entrar.png'
import iconeSenha from '../../assets/img/mostrarSenha.png'
import iconeAddUser from '../../assets/img/adicionarUsuario.png'

import './style.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      senha: '',
      error: ''
    }
  }

  fazerLogin = (event) => {

    event.preventDefault();
    if (this.state.login === "admin" && this.state.senha === "star") {
      this.props.history.push("/feed");
    } else {
      this.setState({ error: "Usário e/ou Senha inválido" });
    }
  }

  setLogin(e) {
    this.setState({ login: e.target.value })
  }

  setSenha(e) {
    this.setState({ senha: e.target.value })
  }

  render() {
    const { login, senha } = this.state

    return (
      <div id='container1'>
        <div className='boxx'>
          <div className='texto'>
            <h2>Fazer login</h2>
            <img id='icone-topo' src={iconeAddUser} />
            <p>Conecte-se com seus amigos</p>
            {this.state.error && <p id="error">{this.state.error}</p>}

          </div>
          <div className='inputs'>
            <div>
              <div className='icone1'>
                <img id='icones' src={iconeEntrar} />
                <input type='text' value={this.state.login} name='email' id='login'
                  placeholder='E-mail' onChange={(event) => this.setState({ login: event.target.value })} />
              </div>

              <div className='icone2'>
                <img id='icones' src={iconeSenha} />
                <input type='password' name='senha'
                  id='senha' placeholder='Senha'
                  value={this.state.senha}
                  onChange={(event) => this.setState({ senha: event.target.value })}

                />

              </div>
            </div>
            <div className='radio'>
              <input className='radio1' type='checkbox' />
              <label>Lembre-me</label>
            </div>
          </div>
          <div className='btn1'>
            <button onClick={this.fazerLogin} className='btn' type='submit'>Entrar</button>
          </div>
        </div>

      </div>

    )
  }
}
