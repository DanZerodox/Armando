import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
import cobre from './images/cobre.PNG';
import libro from './images/libro.PNG';
import ubicacion from './images/ubicacion.PNG';
import grupojumex from './images/grupojumex.PNG';
import conserv from './images/conservlogo.png';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import "./styles.css";

export class FormularioMovil extends React.Component {
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
            contactocare: ''
        }

        this.handleChangeBuscar = this.handleChangeBuscar.bind(this);

    }
    handleChangeBuscar(event) {
        this.setState({ buscar: event.target.value }, () => {
            this.LlenarCampos();
        })
    }

    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <img src={conserv} style={{ width: 130, float: 'center', marginTop:20 }}></img>
                </div>
                <form style={{ padding: 15 }}>
                    <select name="Title" style={{ width: '100%', marginBottom: 15 }} onChange={this.handleChangeBuscar}>
                        <option value="0">----Selecciona un CD----</option>
                        {this.state.cedis.map(item => (
                            <option value={item.Id}>{item.CD}</option>
                        ))}
                    </select>
                    <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Perfil</h6></div>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Colaborador" name="First name" disabled={true} value={this.state.responsable} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Número de Contacto" name="Last name" disabled={true} value={this.state.contacto} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Correo" name="Email" disabled={true} value={this.state.correo} />
                    <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Datos</h6></div>
                    <div style={{ textAlign: 'center' }}><img src={telmex} style={{ width: 100 }}></img></div>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="First name" disabled={true} value={this.state.telmexi1} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Last name" disabled={true} value={this.state.telmexi2} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.telmexi3} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.telmexi4} />
                    <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Voz</h6></div>
                    <div style={{ textAlign: 'center' }}><img src={telmex2} style={{ width: 100 }}></img></div>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="First name" disabled={true} value={this.state.telemxv1} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Last name" disabled={true} value={this.state.telemxv2} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.telemxv3} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.telemxv4} />
                    <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Reporte Infinitum</h6></div>
                    <div style={{ textAlign: 'center' }}><img src={casetel} style={{ width: 100 }}></img></div>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="First name" disabled={true} value={this.state.cas} />
                    <a href={"tel://" + this.state.cascontact}><input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Last name" disabled={true} value={this.state.cascontact} /></a>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.velocidad} />
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="#N/D" name="Email" disabled={true} value={this.state.tipo} />
                    <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Reporte Dedicado</h6></div>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Observaciones" name="First name" disabled={true} value={this.state.observacion} />
                    <a href={"tel://" + this.state.contactocare}><input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Número de contacto" name="Last name" disabled={true} value={this.state.contactocare} /></a>
                    <input type="text" style={{ fontWeight: 600, color: 'black' }} placeholder="Velocidad" name="Email" disabled={true} value={this.state.velocidadde} />
                    <textarea style={{ width: '100%', height: 110 }} type="text" value={this.state.direccion} name="Email" disabled={true} />
                    <div style={{ textAlign: 'center' }}><img src={grupojumex} style={{ width: '80%' }}></img></div>
                </form>
            </div>
        );
    }

    llamar() {

    }

    componentDidMount() {

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
                    contactocare: result[0].Contacto_CARE
                })
            }
        });


        // var result = datos.find(x => x.CD == this.state.buscar.toUpperCase());


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