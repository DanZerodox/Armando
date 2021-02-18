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
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import editar from './images/editar.png';
import eliminar from './images/eliminar.png';
import conserv from './images/conservlogo.png';
import add from './images/agregar.png';

// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import { MDBDataTable } from 'mdbreact';




export class Admnistrador extends React.Component {
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
            mostrarTabla: false,
            editar: [],
            cd: '',
            redirect_cerrar:false

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
    DatatablePage = () => {



    }

    render() {
        const filas = [];
        this.state.cedis.forEach(item => {
            filas.push({
                Id: item.Id,
                CD: item.CD,
                Direccion: item.Direccion,
                Responsable: item.Responsable,
                Contacto: item.Contacto,
                Correo: item.Correo,
                editar: <Link to={'/editar/' + item.Id}><img src={editar} width='28px'></img></Link>,
                eliminar: <img src={eliminar} width='28px' onClick={() => this.EliminarCD(item.Id)}></img>
            })
        })
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'Id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'CD',
                    field: 'CD',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Direccion',
                    field: 'Direccion',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Responsable',
                    field: 'Responsable',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Contacto',
                    field: 'Contacto',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Correo',
                    field: 'Correo',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Editar',
                    field: 'editar',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Eliminar',
                    field: 'eliminar',
                    sort: 'asc',
                    width: 100
                },

            ],

            rows: filas


        };
        return (
            this.state.mostrarTabla === true ?
                <>
                    <Modal show={this.state.show} onHide={() => this.CerrarModal()} style={{ marginTop: 125 }}>
                        <>
                            <Modal.Header closeButton>
                                <h5>Editar Registro {this.state.cd}</h5>
                            </Modal.Header>
                            <Modal.Body style={{ padding: '0 10px' }}>
                                <Row>
                                    <Col sm={3}>
                                        <label>CD</label>
                                        <input value={this.state.cd}></input>
                                    </Col>
                                </Row>
                                <Button variant="contained" style={{ width: '100%', backgroundColor: 'red' }} onClick={() => this.IniciarSesion()} >Ingresar</Button>
                                <br></br>
                            </Modal.Body>
                        </>
                    </Modal>
                    <Jumbotron style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', backgroundColor: 'white', marginTop: '-52px', marginBottom: 'auto' }}>
                        <Row>
                            <Col sm={6}>
                                <Link to={'/'}>
                                    <img src={conserv} style={{ width: 150, float: 'left' }}></img>
                                </Link>
                            </Col>
                            <Col sm={3}>
                                <h4 style={{ marginTop: 22 }}>CD Registrados</h4>
                            </Col>
                            <Col sm={3} style={{ textAlign: 'end' }}>
                                {this.state.mostrarnombre === false ?
                                    <a href="#" onClick={() => this.AbrirModal()}>Iniciar Sesión</a>
                                    :
                                    // <h8>{this.state.nombreadmin}</h8>
                                    <div style={{ float: 'right', position: 'relative', top: '-24px', height: 10 }}>
                                        <Menu menuButton={<MenuButton >{this.state.nombreadmin}</MenuButton>}>
                                            <MenuItem><Link to={'/'}>Inicio</Link></MenuItem>
                                            <MenuItem onClick={() => this.CerrarSesion()}>Cerrar Sesión</MenuItem>
                                        </Menu>
                                    </div>
                                }
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                                <div style={{height:64}}>
                                    <Link to={'/agregar'} style={{ position: 'relative', top: 25 }}>
                                        <img src={add} style={{ width: 120 }}></img>
                                    </Link>
                                </div>
                                <MDBDataTable
                                    striped
                                    bordered
                                    small
                                    data={data}
                                />
                            </Col>
                        </Row>
                        {this.state.redirect_cerrar == true ?
                            <Redirect push to={'/'}></Redirect>
                            : null
                        }
                    </Jumbotron>
                </>
                :
                null
        );
    }
    EditarReigstro(Id) {
        this.setState({
            editar: this.state.cedis.filter(x => x.Id == Id),
            show: true
        }, () => {
            this.state.editar.map(item => {
                this.setState({
                    cd: item.CD
                })
            }
            )
        })
    }

    EliminarCD(Id) {
        this.EliminarRegistroCD(Id, localStorage.getItem("token")).then(item => {
            console.log("este es el error", item[0].Mensaje);
            if (item[0].Estatus === "Ok") {
                Swal.fire(
                    'Finalizado',
                    item[0].Mensaje,
                    'success'
                );
            }
            else {
                Swal.fire(
                    'Error',
                    item[0].Mensaje,
                    'warning'
                );
            }

            this.CargarTabla();
        })
    }
    EliminarRegistroCD(Id, token) {
        var datos = {
            "Id": Id
        };
        var cedis = [];

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/administrador/EliminarCD"
            fetch(postUrl, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
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

    CerrarSesion() {
        localStorage.clear();
        this.setState({
            mostrarnombre: false,
            redirect_cerrar: true
        })
    }

    OpenMenu() {
        this.setState({
            openmenu: true
        })
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
                mostrarTabla: true,
                nombreadmin: localStorage.getItem("nombre")
            })
        }
        this.CargarTabla();
    }
    CargarTabla() {
        this.CargarDatos(localStorage.getItem("token")).then(item => {
            this.setState({
                cedis: item[0]
            }, () => { console.log('Registros', this.state.cedis) })
        })
    }
    CargarDatos(token) {
        var cedis = [];

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/administrador/CargarRegistros"
            fetch(postUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
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
                    contactocare: result[0].Contacto_CARE
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