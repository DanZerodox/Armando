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
import Swal from 'sweetalert2'


export class Inicio extends React.Component {
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
            observacion: ''
        }

        this.handleChangeBuscar = this.handleChangeBuscar.bind(this);

    }
    handleChangeBuscar(event) {
        this.setState({ buscar: event.target.value })
    }

    render() {
        return (
            <Jumbotron style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', backgroundColor: 'white' }}>
                <Row>
                    <Col sm={6}>
                        <img src={home} style={{ width: 70, float: 'right' }}></img>
                    </Col>
                    <Col sm={6}>
                        
                        {/* <input style={{ marginTop: 25 }} placeholder='Buscar...' onChange={this.handleChangeBuscar} onKeyPress={event => { if (event.key === 'Enter') { this.LlenarCampos() } }} value={this.state.buscar}></input> */}
                        <select>
                            <ol>Acapulco</ol>
                        </select>                        
                        </Col>
                </Row>
                <br></br>
                <hr></hr>
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
                <div style={{ width: '100%', backgroundColor: '#2f75b5', textAlign: 'center', fontStyle: 'italic' }}>
                    <label style={{ color: 'white' }}>SERVICIO VOZ Y DATOS</label>
                </div>
                <br></br>
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
                        <img src={cobre} style={{ width: 110, float: 'center', marginTop: 16 }}></img>
                    </Col>
                    <Col sm={2}>
                        <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' value={this.state.tipo} disabled={true}></input>
                    </Col>
                </Row>
                <br></br>
                <div style={{ width: '100%', backgroundColor: '#2f75b5', textAlign: 'center', fontStyle: 'italic' }}>
                    <label style={{ color: 'white' }}>SERVICIO DEDICADO</label>
                </div>
                <br></br>
                <Row>
                    <Col sm={1}>
                        <img src={libro} style={{ width: 100, float: 'center', marginTop: 10 }}></img>
                    </Col>
                    <Col sm={3}>
                        <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' disabled={true}></input>
                    </Col>
                    <Col sm={1}>
                        <img src={telefono} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                    </Col>
                    <Col sm={3}>
                        <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' disabled={true}></input>
                    </Col>
                    <Col sm={1}>
                        <img src={lector} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                    </Col>
                    <Col sm={3}>
                        <input style={{ marginTop: 25, width: '100%' }} placeholder='#N/D' disabled={true}></input>
                    </Col>

                </Row>
                <Row>
                    <Col sm={1}>
                        <img src={ubicacion} style={{ width: 80, float: 'center', marginTop: 10 }}></img>
                    </Col>
                    <Col sm={9}>
                        <input style={{ marginTop: 35, width: '100%' }} value={this.state.observacion} placeholder='#N/D' disabled={true}></input>
                    </Col>
                    <Col sm={2}>
                        <img src={grupojumex} style={{ width: 180, float: 'center', marginTop: 10 }}></img>
                    </Col>


                </Row>
            </Jumbotron>

        )
    }

    LlenarCampos() {
        var datos = [
            { "CD": "ACAPULCO", "ZONA": "CENTRO", "TIPO": "PROPIO", "RAZON": "COMERCIALIZADORA ELORO", "DIRECCION": "BOULEVARD DE LAS NACIONES, LOTE 33-A INTERIOR B FRACCIONAMIENTO GRANJAS DEL MARQUÉS, MUNICIPIO DE ACAPULCO DE JUAREZ, GUERRERO, C.P. 39890", "RESPONSABLE": "MONICO RAMIREZ", "CONTACTO": "55 4332 9937", "CORREO": "gaca@jumex.com.mx", "SERVICIO": "INFINITUM", "TIPO": "COBRE/COBRE", "LINEA1": "744 4502151", "LINEA2": "744 4502152", "LINEA3": "-", "LINEA4": "-", "LINEA5": "-", "LINEA1V": "-", "LINEA2V": "-", "LINEA3V": "-", "LINEA4V": "-", "LINEA5V": "-", "CORRESPONDIENTE": "CASE CENTRO", "CONTACTOCASE": "55 54475000", "REFERENCIA": "-", "VELOCIDAD": "-", "ENLACE": "15MB", "CARE": "-", "CONTACTOCARE": "-", "COD": "10001", "OBSERVACION": "APAGAR WIFI Y REVISAR OTRO MODEM" },
            { "CD": "AGUASCALIENTES MN", "ZONA": "BAJIO", "TIPO": "PROPIO", "RAZON": "COMERCIALIZADORA ELORO", "DIRECCION": "CIRCUITO AGUASCALIENTES SUR NÚMERO 100-A, PARQUE INDUSTRIAL VALLE DE AGUASCALIENTES, DE LA CIUDAD DE AGUASCALIENTES, C.P. 20358", "RESPONSABLE": "MARIANA GARCIA", "CONTACTO": "44 9930 3061", "CORREO": "gags@jumex.com.mx", "SERVICIO": "INFINITUM", "TIPO": "FIBRA", "LINEA1": "449 9710257", "LINEA2": "449 6885113", "LINEA3": "-", "LINEA4": "-", "LINEA5": "-", "LINEA1V": "-", "LINEA2V": "-", "LINEA3V": "-", "LINEA4V": "-", "LINEA5V": "-", "CORRESPONDIENTE": "CASE QUERETARO", "CONTACTOCASE": "800 4040000", "REFERENCIA": "-", "VELOCIDAD": "-", "ENLACE": "50MB", "CARE": "-", "CONTACTOCARE": "-", "COD": "10002", "OBSERVACION": "APAGAR WIFI" },
            { "CD": "AGUASCALIENTES MY", "ZONA": "BAJIO", "TIPO": "COMISIONISTA", "RAZON": "COMERCIALIZADORA ESTRADA", "DIRECCION": "CARRETERA PANAMERICANA SUR KM. 116 , COL. LOS ARELLANO, AGUASCALIENTES, C.P. 20290", "RESPONSABLE": "ESTHELA", "CONTACTO": "44 9150 1559", "CORREO": "-", "SERVICIO": "INFINITUM", "TIPO": "COBRE", "LINEA1": "449 9711127", "LINEA2": "-", "LINEA3": "-", "LINEA4": "-", "LINEA5": "-", "LINEA1V": "-", "LINEA2V": "-", "LINEA3V": "-", "LINEA4V": "-", "LINEA5V": "-", "CORRESPONDIENTE": "CASE QUERETARO", "CONTACTOCASE": "800 4040000", "REFERENCIA": "-", "VELOCIDAD": "-", "ENLACE": "", "CARE": "-", "CONTACTOCARE": "-", "COD": "10003", "OBSERVACION": "APAGAR WIFI, FOTO ATRÁS MODEM, REVISAR SPEEDTEST" },
            { "CD": "ATOTONILCO", "ZONA": "BAJIO", "TIPO": "PROPIO", "RAZON": "COMERCIALIZADORA ELORO", "DIRECCION": "CALLE STEVE MATHIS 16 COL ALAMEDA, ATOTONILCO EL ALTO, JALISCO, C.P. 47750", "RESPONSABLE": "JORGE GALLEGOS PEREZ", "CONTACTO": "33 1285 6357", "CORREO": "arato@jumex.com.mx", "SERVICIO": "INFINITUM", "TIPO": "COBRE", "LINEA1": "391 9173861", "LINEA2": "-", "LINEA3": "-", "LINEA4": "-", "LINEA5": "-", "LINEA1V": "-", "LINEA2V": "-", "LINEA3V": "-", "LINEA4V": "-", "LINEA5V": "-", "CORRESPONDIENTE": "CASE QUERETARO", "CONTACTOCASE": "800 4040000", "REFERENCIA": "-", "VELOCIDAD": "-", "ENLACE": "", "CARE": "-", "CONTACTOCARE": "-", "COD": "10004", "OBSERVACION": "FALTA INFORMACION" },
            { "CD": "CANCUN", "ZONA": "SURESTE", "TIPO": "PROPIO", "RAZON": "COMERCIALIZADORA ELORO", "DIRECCION": "SÚPER MANZANA 104 MANZANA 26 LOTE 4 FRACCIÓN 001 BENITO JUAREZ QUINTANA ROO C.P.77500", "RESPONSABLE": "VERONICA DE DIOS", "CONTACTO": "99 8120 8857", "CORREO": "gcan@jumex.com.mx", "SERVICIO": "INFINITUM", "TIPO": "FIBRA", "LINEA1": "998 8868118", "LINEA2": "-", "LINEA3": "-", "LINEA4": "-", "LINEA5": "-", "LINEA1V": "998 8868119", "LINEA2V": "-", "LINEA3V": "-", "LINEA4V": "-", "LINEA5V": "-", "CORRESPONDIENTE": "CASE MERIDA", "CONTACTOCASE": "800 2011100", "REFERENCIA": "-", "VELOCIDAD": "-", "ENLACE": "15MB", "CARE": "-", "CONTACTOCARE": "-", "COD": "10005", "OBSERVACION": "ACTUALIZAR FOTO SIN MODEM AXTEL" }
        ];

        var result = datos.find(x => x.CD == this.state.buscar.toUpperCase());

        if (result === undefined) {
            Swal.fire(
                'Sin Datos',
                'No se han encontrado registros para ' + this.state.buscar,
                'warning'
            );
            this.setState({
                responsable: '',
                contacto: '',
                correo: '',
                telmexi1:'',
                telmexi2: '',
                telmexi3: '',
                telmexi4: '',
                telemxv1:'',
                telemxv2: '',
                telemxv3: '',
                telemxv4: '',
                cas: '',
                cascontact: '',
                velocidad: '',
                tipo: '',
                observacion: ''
            })
        }
        else {
            this.setState({
                responsable: result.RESPONSABLE,
                contacto: result.CONTACTO,
                correo: result.CORREO,
                telmexi1: result.LINEA1,
                telmexi2: result.LINEA2,
                telmexi3: result.LINEA3,
                telmexi4: result.LINEA4,
                telemxv1: result.LINEA1V,
                telemxv2: result.LINEA2V,
                telemxv3: result.LINEA3V,
                telemxv4: result.LINEA4,
                cas: result.CORRESPONDIENTE,
                cascontact: result.CONTACTOCASE,
                velocidad: result.VELOCIDAD,
                tipo: result.TIPO,
                observacion: result.OBSERVACION
            })
        }
        console.log("resultado", result);
    }
}