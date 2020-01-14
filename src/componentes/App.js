import React from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends React.Component {

  state = {
    citas: {}
  }

  componentDidMount(){
    const CitasLS = localStorage.getItem('citas')
    if(CitasLS){
      this.setState({citas:JSON.parse(CitasLS)})
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearCita = cita => {
    const citas = {...this.state.citas}
    citas[`citas${Date.now()}`] = cita
    this.setState ({citas})
  }

  borrarCita = id => {
    const citas = {...this.state.citas}
    delete citas[id]
    this.setState({citas})
  }

  render(){
      return (
        <div className="container">
          <Header titulo="Administrador de pacientes de veterinaria"/>
          <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita = {this.crearCita}/>
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita}/>
          </div>
          </div>
        </div>
      );
  }

}

export default App;
