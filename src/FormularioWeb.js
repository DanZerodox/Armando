import React from 'react';
// import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from './images/inicio.png';
import perfil from './images/perfil.png';
import whats from './images/whats.PNG';
import outlook from './images/outlook.PNG';
import telmex from './images/telmex.PNG';
import telmex2 from './images/telmex2.PNG';
import casetel from './images/case.PNG';
import telefono from './images/telefono.PNG';
import lector from './images/lector.PNG';
import Button from '@material-ui/core/Button';
import cobre from './images/cobre.PNG';
import libro from './images/libro.PNG';
import ubicacion from './images/ubicacion.PNG';
import grupojumex from './images/grupojumex.PNG';
import conserv from './images/conservlogo.png';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


export class FormularioWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buscar: '',
            perfil: '',
            whatsapp: '',
            outlook: '',
            telmexi1: '',
            telmexi2: '',
            telmexi3: '',
            telmexi4: '',
            telemxv1: '',
            telemxv2: '',
            telemxv3: '',
            telemxv4: '',
            case: '',
            tel: '',
            lec: '',
            fibra: '',
            lib: '',
            tel2: '',
            lec2: '',
            ubi: '',
            responsable: '',
            contacto: '',
            correo: '',
            cas: '',
            cascontact: '',
            velocidad: '',
            tipo: '',
            observacion: '',
            direccion: '',
            cedis: [],
            velocidadde: '',
            contactocare: '',
            show: false,
            usuario: '',
            contraseña: '',
            mostrarerror: false,
            mensajeerror: '',
            mostrarnombre: false,
            nombreadmin: '',
            openmenu: false,
            direcciongoogle:''

        }

        this.handleChangeBuscar = this.handleChangeBuscar.bind(this);
        this.handleContraseña = this.handleContraseña.bind(this);
        this.handleUsuario = this.handleUsuario.bind(this);

    }
    handleChangeBuscar(event) {
        this.setState({ buscar: event.target.value }, () => {
            this.LlenarCampos();
        })
    }
    handleContraseña(event) {
        this.setState({ contraseña: event.target.value }, () => {
        })
    }
    handleUsuario(event) {
        this.setState({ usuario: event.target.value }, () => {
        })
    }
    render() {
        return (
            <>
                <Route>
                    <Modal show={this.state.show} onHide={() => this.CerrarModal()} style={{ marginTop: 125 }}>
                        <Modal.Header closeButton>
                            <h5>Iniciar Sesión</h5>
                        </Modal.Header>
                        <Modal.Body style={{ padding: '0 10px' }}>
                            <label style={{ color: 'black', fontWeight: 400 }}>Usuario</label>
                            <input style={{ width: '100%' }} placeholder='Ingresa tu número de empleado' value={this.state.usuario} onChange={this.handleUsuario}></input>
                            <label style={{ color: 'black', fontWeight: 400 }}>Contraseña</label>
                            <input style={{ width: '100%' }} placeholder='Ingresa tu contraseña' type="password" value={this.state.contraseña} onChange={this.handleContraseña} ></input>
                            {this.state.mostrarerror === true ?
                                <label style={{ color: 'red', fontWeight: 400, textAlign: 'center' }}>{this.state.mensajeerror}</label>
                                :
                                null
                            }
                            <Button variant="contained" style={{ width: '100%', backgroundColor: 'red' }} onClick={() => this.IniciarSesion()} >Ingresar</Button>
                            <br></br>
                        </Modal.Body>
                    </Modal>
                    <Jumbotron style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', backgroundColor: 'white', marginTop: '-52px', marginBottom: 'auto' }}>
                        <Row>
                            <Col sm={5}>
                                <img src={home} style={{ width: 70, float: 'right' }}></img>
                                <img src={conserv} style={{ width: 150, float: 'left' }}></img>
                            </Col>
                            <Col sm={4}>

                                {/* <input style={{ marginTop: 25 }} placeholder='Buscar...' onChange={this.handleChangeBuscar} onKeyPress={event => { if (event.key === 'Enter') { this.LlenarCampos() } }} value={this.state.buscar}></input> */}
                                <select style={{ marginTop: 25, width: '73%' }} onChange={this.handleChangeBuscar}>
                                    <option value="0">----Selecciona un CD----</option>
                                    {this.state.cedis.map(item => (
                                        <option value={item.Id}>{item.CD}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col sm={3} style={{ textAlign: 'end' }}>
                                {this.state.mostrarnombre === false ?
                                    <a href="#" onClick={() => this.AbrirModal()}>Iniciar Sesión</a>
                                    :
                                    // <h8>{this.state.nombreadmin}</h8>
                                    <div style={{ float: 'right', position: 'relative', top: '-24px', height: 10 }}>
                                        <Menu menuButton={<MenuButton >{this.state.nombreadmin}</MenuButton>}>
                                            <MenuItem><Link to={'/administrador'}>Administrador</Link></MenuItem>
                                            <MenuItem onClick={() => this.CerrarSesion()}>Cerrar Sesión</MenuItem>
                                        </Menu>
                                    </div>
                                }
                            </Col>
                        </Row>
                        {/* <hr></hr> */}
                        <Row>
                            <Col sm={1}>
                                <img src={perfil} style={{ width: 100, float: 'center' }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.responsable} disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={whats} style={{ width: 90, float: 'center' }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.contacto} disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={outlook} style={{ width: 90, float: 'center' }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.correo} disabled={true}></input>
                            </Col>
                        </Row>
                        <div style={{ width: '100%', backgroundColor: '#2f75b5', textAlign: 'center', fontStyle: 'italic', fontSize: 12 }}>
                            <label style={{ color: 'white' }}>SERVICIO VOZ Y DATOS</label>
                        </div>
                        <Row>
                            <Col sm={1}>
                                <img src={telmex} style={{ width: 100, float: 'center', marginTop: 20 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%', }} value={this.state.telmexi1} placeholder='#N/D' disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi2} disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi3} disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi4} disabled={true}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={telmex2} style={{ width: 100, float: 'center', marginTop: 20 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%', }} placeholder='#N/D' value={this.state.telemxv1} disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv2} disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv3} disabled={true}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv4} disabled={true}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={casetel} style={{ width: 100, float: 'center', marginTop: 20 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.cas} placeholder='#N/D' disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={telefono} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.cascontact} placeholder='#N/D' disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={lector} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.velocidad} placeholder='#N/D' disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={cobre} style={{ width: 130, float: 'center', marginTop: 16 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '80%', float: 'right' }} placeholder='#N/D' value={this.state.tipo} disabled={true}></input>
                            </Col>
                        </Row>
                        <div style={{ width: '100%', backgroundColor: '#2f75b5', textAlign: 'center', fontStyle: 'italic', fontSize: 12 }}>
                            <label style={{ color: 'white' }}>SERVICIO DEDICADO</label>
                        </div>
                        <Row>
                            <Col sm={1}>
                                <img src={libro} style={{ width: 100, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.observacion} disabled={true}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={telefono} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' disabled={true} value={this.state.contactocare}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={lector} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' disabled={true} value={this.state.velocidadde}></input>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={ubicacion} style={{ width: 72, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={9}>
                               <a href={"https://www.google.com.mx/maps/search/"+this.state.direcciongoogle} target="_blank"> <textarea style={{ marginTop: 20, width: '100%' }} value={this.state.direccion} placeholder='#N/D' disabled={true}  /></a>
                            </Col>
                            <Col sm={2}>
                                <img src={grupojumex} style={{ width: 180, float: 'center', marginTop: 10 }}></img>
                            </Col>


                        </Row>
                    </Jumbotron>
                </Route>
            </>
        );
    }
    AbrirGoogleMaps(){
        var direccion= this.state.direccion.split(" ").join("+");
        alert(direccion);
    }     
    CerrarSesion() {
        localStorage.clear();
        this.setState({
            mostrarnombre: false
        })
    }

    OpenMenu() {
        this.setState({
            openmenu: true
        })
    }

    IniciarSesion() {
        this._ObtenerToken(this.state.usuario, this.state.contraseña).then(item => {
            if (item[0].Status === "NoAutorizado") {
                this.setState({
                    mensajeerror: item[0].Mensaje,
                    mostrarerror: true,
                    mostrarnombre: false
                })
            }
            else {

                console.log("token", item);
                localStorage.setItem("token", item[0].Token);
                localStorage.setItem("session", 1);
                localStorage.setItem("nombre", item[0].Nombre)
                this.setState({
                    mostrarerror: false,
                    show: false,
                    nombreadmin: item[0].Nombre,
                    mostrarnombre: true
                });
            }

        })
    }

    _ObtenerToken(usuario, password) {
        let token;
        var colaborador = [];
        const data = {
            Usuario: usuario,
            Password: password
        };

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/usuario/authenticate"
            fetch(postUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()))
                .catch(error => console.log('Error:', error))
                .then(response => {
                    colaborador.push(response);
                    resolve(colaborador);


                });
        });
        return q1;

    }

    CerrarModal() {
        this.setState({ show: false })
    }

    AbrirModal() {
        this.setState({ show: true })

    }

    componentDidMount() {
        if (localStorage.getItem("session") == 1) {
            this.setState({
                mostrarnombre: true,
                nombreadmin: localStorage.getItem("nombre")
            })
        }
        this.CargarCedis().then(item => {
            this.setState({
                cedis: item[0]
            }, () => { console.log('CEDIS', this.state.cedis) })
        })
    }

    CargarCedis() {
        var cedis = [];

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/Cedis/CargarCedis"
            fetch(postUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()))
                .catch(error => console.log('Error:', error))
                .then(response => {
                    cedis.push(response);
                    resolve(cedis);
                });
        });
        return q1;
    }

    LlenarCampos() {


        if (this.state.buscar == "0") {
            this.setState({
                responsable: '',
                contacto: '',
                correo: '',
                telmexi1: '',
                telmexi2: '',
                telmexi3: '',
                telmexi4: '',
                telemxv1: '',
                telemxv2: '',
                telemxv3: '',
                telemxv4: '',
                cas: '',
                cascontact: '',
                velocidad: '',
                tipo: '',
                observacion: '',
                direccion: ''
            })
        }

        this.BuscarRegistro(this.state.buscar).then(result => {
            console.log("datos", result[0].Responsable);

            if (result === undefined) {
                Swal.fire(
                    'Sin Datos',
                    'No se han encontrado registros para',
                    'warning'
                );
                this.setState({
                    responsable: '',
                    contacto: '',
                    correo: '',
                    telmexi1: '',
                    telmexi2: '',
                    telmexi3: '',
                    telmexi4: '',
                    telemxv1: '',
                    telemxv2: '',
                    telemxv3: '',
                    telemxv4: '',
                    cas: '',
                    cascontact: '',
                    velocidad: '',
                    tipo: '',
                    observacion: '',
                    direccion: ''
                })
            }
            else {
                this.setState({
                    responsable: result[0].Responsable,
                    contacto: result[0].Contacto,
                    correo: result[0].Correo,
                    telmexi1: result[0].Linea1,
                    telmexi2: result[0].Linea2,
                    telmexi3: result[0].Linea3,
                    telmexi4: result[0].Linea4,
                    telemxv1: result[0].Voz1,
                    telemxv2: result[0].Voz2,
                    telemxv3: result[0].Voz3,
                    telemxv4: result[0].Voz4,
                    cas: result[0].Cas_Correspondiente,
                    cascontact: result[0].Contacto_Cas,
                    velocidad: result[0].Velocidad_Enlace,
                    tipo: result[0].Tipo_Enlace,
                    observacion: result[0].Referencia_Dedicado,
                    direccion: result[0].Direccion,
                    velocidadde: result[0].Velocidad_Dedicado,
                    contactocare: result[0].Contacto_CARE,
                    direcciongoogle: result[0].Direccion.split(" ").join("+")
                })
            }
        });

    }

    BuscarRegistro(Id) {
        var cedis = [];

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/Cedis/BuscarCedis?Id=" + Id
            fetch(postUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()))
                .catch(error => console.log('Error:', error))
                .then(response => {
                    cedis.push(response);
                    resolve(response);
                });
        });
        return q1;
    }

}