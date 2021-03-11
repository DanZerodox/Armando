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
//import Button from '@material-ui/core/Button';
import cobre from './images/cobre.PNG';
import libro from './images/libro.PNG';
import ubicacion from './images/ubicacion.PNG';
import grupojumex from './images/grupojumex.PNG';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import conserv from './images/conservlogo.png';
import Button from 'react-bootstrap/Button';
import Map from './Map';
// import Menu from '@material-ui/core/Menu;
// import MenuItem from '@material-ui/core/MenuItem';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import $ from "jquery";

Geocode.setApiKey("AIzaSyB_Dpl0sPNY7SnumRJvxAMAhonX9Bfi_3k");
Geocode.enableDebug();
// var hideModal = hideModalInfo => {
//     $("#myModal").modal("hide");
// };
const modalMapStyles = [
    {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#e0efef"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                hue: "#1900ff"
            },
            {
                color: "#c0e8e8"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: 100
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                visibility: "on"
            },
            {
                lightness: 700
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#7dcdcd"
            }
        ]
    }
];
export class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cd: '',
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
            id_editar: props.match.params.id,
            redirect: false,
            redirect_cerrar: false,
            latitude: null,
            longitude: null,
            showDireccion: false
        }

        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.handleCD = this.handleCD.bind(this);
        this.handleResponsable = this.handleResponsable.bind(this);
        this.handleContacto = this.handleContacto.bind(this);
        this.handleCorreo = this.handleCorreo.bind(this);
        this.handleLinea1 = this.handleLinea1.bind(this);
        this.handleLinea2 = this.handleLinea2.bind(this);
        this.handleLinea3 = this.handleLinea3.bind(this);
        this.handleLinea4 = this.handleLinea4.bind(this);
        this.handleVoz1 = this.handleVoz1.bind(this);
        this.handleVoz2 = this.handleVoz2.bind(this);
        this.handleVoz3 = this.handleVoz3.bind(this);
        this.handleVoz4 = this.handleVoz4.bind(this);
        this.handleCAS = this.handleCAS.bind(this);
        this.handleCASCONTACT = this.handleCASCONTACT.bind(this);
        this.handleVelocidad = this.handleVelocidad.bind(this);
        this.handleTipo = this.handleTipo.bind(this);
        this.handleReferencia = this.handleReferencia.bind(this);
        this.handleContactoCARE = this.handleContactoCARE.bind(this);
        this.handleVelocidadDE = this.handleVelocidadDE.bind(this);
        this.handleDireccion = this.handleDireccion.bind(this);



    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
        else {

        }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            if (this.state.latitude === "") {
                alert('falla');
            } else {

            }
        })
    }
    handleCD(event) {
        this.setState({ cd: event.target.value }, () => {
        })
    }
    handleResponsable(event) {
        this.setState({ responsable: event.target.value }, () => {
        })
    }
    handleContacto(event) {
        this.setState({ contacto: event.target.value }, () => {
        })
    }
    handleCorreo(event) {
        this.setState({ correo: event.target.value }, () => {
        })
    }
    handleLinea1(event) {
        this.setState({ telmexi1: event.target.value }, () => {
        })
    }
    handleLinea2(event) {
        this.setState({ telmexi2: event.target.value }, () => {
        })
    }
    handleLinea3(event) {
        this.setState({ telmexi3: event.target.value }, () => {
        })
    }
    handleLinea4(event) {
        this.setState({ telmexi4: event.target.value }, () => {
        })
    }
    handleVoz1(event) {
        this.setState({ telemxv1: event.target.value }, () => {
        })
    }
    handleVoz2(event) {
        this.setState({ telemxv2: event.target.value }, () => {
        })
    }
    handleVoz3(event) {
        this.setState({ telemxv3: event.target.value }, () => {
        })
    }
    handleVoz4(event) {
        this.setState({ telemxv4: event.target.value }, () => {
        })
    }
    handleCAS(event) {
        this.setState({ cas: event.target.value }, () => {
        })
    }
    handleCASCONTACT(event) {
        this.setState({ cascontact: event.target.value }, () => {
        })
    }
    handleVelocidad(event) {
        this.setState({ velocidad: event.target.value }, () => {
        })
    }
    handleTipo(event) {
        this.setState({ tipo: event.target.value }, () => {
        })
    }
    handleReferencia(event) {
        this.setState({ observacion: event.target.value }, () => {
        })
    }
    handleContactoCARE(event) {
        this.setState({ contactocare: event.target.value }, () => {
        })
    }
    handleVelocidadDE(event) {
        this.setState({ velocidadde: event.target.value }, () => {
        })
    }
    handleDireccion(event) {
        this.setState({ direccion: event.target.value }, () => {
        })
    }
    render() {
        return (
            <>
                <Route>
                    {/* <Modal show={this.state.showDireccion} onHide={() => this.CerrarModalDireccion()} style={{ marginTop: 0 }}>
                        <>
                            <Modal.Header closeButton>
                                <h5>Editar Dirección {this.state.cd}</h5>
                            </Modal.Header>
                            <Modal.Body style={{ padding: '0 10px' }}>
                            <Map google={this.props.google}
                                            center={{ lat:19.524204, lng: -99.081846 }}
                                            height='480px'
                                            zoom={15}
                                            margin='60px'></Map>
                            </Modal.Body>
                        </>
                    </Modal> */}

                    <Jumbotron style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', backgroundColor: 'white', marginTop: '-52px', marginBottom: 'auto' }}>
                        <Row>
                            <Col sm={5}>
                                <img src={home} style={{ width: 70, float: 'right' }}></img>
                                <Link to={'/'}>
                                    <img src={conserv} style={{ width: 150, float: 'left' }}></img>
                                </Link>
                            </Col>
                            <Col sm={4}>

                                {/* <input style={{ marginTop: 25 }} placeholder='Buscar...' onChange={this.handleChangeBuscar} onKeyPress={event => { if (event.key === 'Enter') { this.LlenarCampos() } }} value={this.state.buscar}></input> */}
                                <input value={this.state.cd} onChange={this.handleCD} style={{width:'73%',marginTop:16}}></input>
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
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.responsable} onChange={this.handleResponsable}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={whats} style={{ width: 90, float: 'center' }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.contacto} onChange={this.handleContacto}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={outlook} style={{ width: 90, float: 'center' }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.correo} onChange={this.handleCorreo}></input>
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
                                <input style={{ marginTop: 25, width: '100%', }} value={this.state.telmexi1} placeholder='#N/D' onChange={this.handleLinea1}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi2} onChange={this.handleLinea2}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi3} onChange={this.handleLinea3}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telmexi4} onChange={this.handleLinea4}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={telmex2} style={{ width: 100, float: 'center', marginTop: 20 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%', }} placeholder='#N/D' value={this.state.telemxv1} onChange={this.handleVoz1}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv2} onChange={this.handleVoz2}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv3} onChange={this.handleVoz3}></input>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.telemxv4} onChange={this.handleVoz4}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={casetel} style={{ width: 100, float: 'center', marginTop: 20 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.cas} placeholder='#N/D' onChange={this.handleCAS}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={telefono} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.cascontact} placeholder='#N/D' onChange={this.handleCASCONTACT}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={lector} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '100%' }} value={this.state.velocidad} placeholder='#N/D' onChange={this.handleVelocidad}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={cobre} style={{ width: 130, float: 'center', marginTop: 16 }}></img>
                            </Col>
                            <Col sm={2}>
                                <input style={{ marginTop: 25, width: '80%', float: 'right' }} placeholder='#N/D' value={this.state.tipo} onChange={this.handleTipo}></input>
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
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.observacion} onChange={this.handleReferencia}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={telefono} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.contactocare} onChange={this.handleContactoCARE}></input>
                            </Col>
                            <Col sm={1}>
                                <img src={lector} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                            </Col>
                            <Col sm={3}>
                                <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.velocidadde} onChange={this.handleVelocidadDE}></input>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={1}>
                                <img src={ubicacion} style={{ width: 72, float: 'center', marginTop: 10 }}></img>
                                {/* <a onClick={() => this.AbrirModalDireccion()}>
                                </a> */}
                                {/* <button
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                >
                                    Open Modal
                                </button> */}
                                {this.state.showDireccion === true ?
                                    <div className="modal" tabIndex="-1" role="dialog" style={{display:'block',   backgroundColor: 'rgba(0, 0, 0, .5)'}}>
                                        <div
                                            className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
                                            role="document"
                                        >
                                            <div className="modal-content flex-grow-1">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Map inside Modal</h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-label="Close"
                                                        onClick={()=>this.CerrarModalDireccion()}

                                                    >
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body p-0 h-100">
                                                    {/* <div className="h-100 w-100 position-absolute">
                                                        {/*modal map is defined here- custom styles and zoom are passed in*/}
                                                        <Map google={this.props.google}
                                                            center={{ lat: 19.524204, lng: -99.081846 }}
                                                            height='480px'
                                                            zoom={15}
                                                            margin='60px'></Map>
                                                    
                                                </div>
                                                {/* <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="mx-auto btn btn-secondary"
                                                        onClick={()=>this.CerrarModalDireccion()}
                                                    >
                                                        Close
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                            </Col>
                            <Col sm={9}>
                                <textarea style={{ marginTop: 20, width: '100%' }} value={this.state.direccion} placeholder='#N/D' onChange={this.handleDireccion} />
                            </Col>
                            <Col sm={2}>
                                {/* <img src={grupojumex} style={{ width: 180, float: 'center', marginTop: 10 }}></img> */}
                                <Button variant="success" style={{ marginTop: 19, width: '100%', backgroundColor: '#28a745' }} onClick={() => this.FinalizarEdicion()}>Editar</Button>
                            </Col>
                        </Row>
                        {this.state.redirect == true ?
                            <Redirect push to={'/administrador'}></Redirect>
                            : null
                        }
                        {this.state.redirect_cerrar == true ?
                            <Redirect push to={'/'}></Redirect>
                            : null
                        }
                    </Jumbotron>

                </Route>
            </>
        );
    }

    AbrirModalDireccion() {
        this.setState({
            showDireccion: true
        }, () => {
            if (navigator.geolocation) {

                navigator.geolocation.watchPosition(function (position) {
                    navigator.geolocation.getCurrentPosition(this.getCoordinates);
                }.bind(this),
                    function (error) {
                        console.log('pelusin', error);
                        if (error.code == error.PERMISSION_DENIED)
                            this.setState({
                                latitude: 19.524204,
                                longitude: -99.081846
                            })
                    }.bind(this)

                );
                console.log('errortxt');
            }
        })


    }

    CerrarModalDireccion() {
        this.setState({
            showDireccion: false
        })
    }

    FinalizarEdicion() {
        this.finalizar(localStorage.getItem("token")).then(item => {
            console.log("respuesta", item);
            if (item.Estatus === "Ok") {
                Swal.fire(
                    'Finalizado',
                    item.Mensaje,
                    'success'
                );
            }
            else {
                Swal.fire(
                    'Error',
                    item.Mensaje,
                    'warning'
                );
            }
            this.setState({ redirect: true })
        })
    }

    finalizar(token) {
        var datos = {
            "Id": this.state.id_editar,
            "CD": this.state.cd,
            "Responsable": this.state.responsable,
            "Contacto": this.state.contacto,
            "Correo": this.state.correo,
            "Linea1": this.state.telmexi1,
            "Linea2": this.state.telmexi2,
            "Linea3": this.state.telmexi3,
            "Linea4": this.state.telmexi4,
            "Voz1": this.state.telemxv1,
            "Voz2": this.state.telemxv2,
            "Voz3": this.state.telemxv3,
            "Voz4": this.state.telemxv4,
            "Cas_Correspondiente": this.state.cas,
            "Contacto_Cas": this.state.cascontact,
            "Velocidad_Enlace": this.state.velocidad,
            "Tipo_Enlace": this.state.tipo,
            "Referencia_Dedicado": this.state.observacion,
            "Contacto_CARE": this.state.contactocare,
            "Velocidad_Dedicado": this.state.velocidadde,
            "Direccion": this.state.direccion
        };
        var cedis = [];

        var q1 = new Promise(function (resolve, reject) {
            //const postUrl= "https://manzana.jumex.com.mx:4438/connector_jwt/api/login/authenticate";
            const postUrl = "http://192.168.14.68:5555/api/administrador/EditarCD"
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
                    resolve(response);
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
                nombreadmin: localStorage.getItem("nombre"),
                // latitude: 19.524204,
                // longitude: -99.081846
            })
        }
        this.CargarCedis(this.state.id_editar).then(item => {
            this.setState({
                cd: item[0].CD,
                responsable: item[0].Responsable,
                contacto: item[0].Contacto,
                telmexi1: item[0].Linea1,
                telmexi2: item[0].Linea2,
                telmexi3: item[0].Linea3,
                telmexi4: item[0].Linea4,
                correo: item[0].Correo,
                telemxv1: item[0].Voz1,
                telemxv2: item[0].Voz2,
                telemxv3: item[0].Voz3,
                telemxv4: item[0].Voz4,
                cas: item[0].Cas_Correspondiente,
                cascontact: item[0].Contacto_Cas,
                velocidad: item[0].Velocidad_Enlace,
                tipo: item[0].Tipo_Enlace,
                observacion: item[0].Referencia_Dedicado,
                contactocare: item[0].Contacto_CARE,
                velocidadde: item[0].Velocidad_Dedicado,
                direccion: item[0].Direccion


            }, () => { console.log('CEDIS_EDITAR', this.state.cd) })
        })
    }

    CargarCedis(Id) {
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