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
import { useForm } from 'react-hook-form';
import "./styles.css";
import call from 'react-native-phone-call';

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
            cedis: []
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
                <form style={{ padding: 15 }}>
                <select name="Title" style={{ width: '100%', marginBottom: 15 }} onChange={this.handleChangeBuscar}>
                    {this.state.cedis.map(item => (

                        <option value={item.CD}>{item.CD}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Perfil</h6></div>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Colaborador" name="First name" disabled={true} value={this.state.responsable}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Número de Contacto" name="Last name" disabled={true} value={this.state.contacto}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Correo" name="Email" disabled={true} value={this.state.correo}/>
                <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Voz y Datos</h6></div>
                <div style={{textAlign:'center'}}><img src={telmex} style={{ width: 100 }}></img></div>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="First name" disabled={true} value={this.state.telmexi1}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Last name" disabled={true} value={this.state.telmexi2}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.telmexi3}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.telmexi4}/>
                <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Voz y Datos</h6></div>
                <div style={{textAlign:'center'}}><img src={telmex2} style={{ width: 100 }}></img></div>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="First name" disabled={true} value={this.state.telemxv1}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Last name" disabled={true} value={this.state.telemxv2}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.telemxv3}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.telemxv4}/>
                <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Voz y Datos</h6></div>
                <div style={{textAlign:'center'}}><img src={casetel} style={{ width: 100 }}></img></div>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="First name" disabled={true} value={this.state.cas}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Last name" disabled={true} value={this.state.cascontact} onClick={this.llamar()}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.velocidad}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="#N/D" name="Email" disabled={true} value={this.state.tipo}/>
                <div style={{ textAlign: 'center', backgroundColor: '#2f75b5', color: 'white' }}><h6>Servicio Dedicado</h6></div>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Observaciones" name="First name" disabled={true} value={this.state.observacion}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Número de contacto" name="Last name" disabled={true}/>
                <input type="text" style={{fontWeight:600, color:'black'}} placeholder="Velocidad" name="Email" disabled={true}/>
                <textarea style={{width:'100%', height:110}} type="text"  value={this.state.direccion} name="Email" disabled={true}/>
                <div style={{textAlign:'center'}}><img src={grupojumex} style={{ width: '80%' }}></img></div>
            </form>
           </div>
        );
    }

    llamar(){
        const args = {
            number: '9093900003', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
          }
           
        call(args).catch(console.error);
    }

    componentDidMount() {

        var cedis = [
            { 'CD': '----SELECCIONAR----' },
            { 'CD': 'ACAPULCO' },
            { 'CD': 'AGUASCALIENTES MN' },
            { 'CD': 'AGUASCALIENTES MY' },
            { 'CD': 'ATOTONILCO' },
            { 'CD': 'CANCUN' },
            { 'CD': 'CATEMACO' },
            { 'CD': 'CHETUMAL' },
            { 'CD': 'CHIHUAHUA' },
            { 'CD': 'CMA' },
            { 'CD': 'COLIMA' },
            { 'CD': 'CUAUTITLAN' },
            { 'CD': 'CUERNAVACA MN' },
            { 'CD': 'CUERNAVACA MY' },
            { 'CD': 'CULIACAN' },
            { 'CD': 'DURANGO' },
            { 'CD': 'ECATEPEC' },
            { 'CD': 'EL PERAL' },
            { 'CD': 'ESCARCEGA' },
            { 'CD': 'GUADALAJARA' },
            { 'CD': 'GUADALUPE' },
            { 'CD': 'HERMOSILLO' },
            { 'CD': 'HUAJUAPAN' },
            { 'CD': 'IRAPUATO' },
            { 'CD': 'JUAREZ' },
            { 'CD': 'LA JUNTA' },
            { 'CD': 'LA PAZ' },
            { 'CD': 'LA VILLA' },
            { 'CD': 'LEON MN' },
            { 'CD': 'LEON MY' },
            { 'CD': 'LOS REYES' },
            { 'CD': 'MATEHUALA' },
            { 'CD': 'MAZATLAN' },
            { 'CD': 'MERCED' },
            { 'CD': 'MERIDA' },
            { 'CD': 'MEXICALI' },
            { 'CD': 'MOCHIS' },
            { 'CD': 'MONTERREY' },
            { 'CD': 'MORELIA' },
            { 'CD': 'NAUCALPAN' },
            { 'CD': 'OAXACA' },
            { 'CD': 'OBREGON' },
            { 'CD': 'PACHUCA' },
            { 'CD': 'POLANCO' },
            { 'CD': 'POZARICA' },
            { 'CD': 'PROGRESO' },
            { 'CD': 'PT CD VALLES' },
            { 'CD': 'PT COZUMEL' },
            { 'CD': 'PT ENSENADA' },
            { 'CD': 'PT LAREDO' },
            { 'CD': 'PT MAGDALENA' },
            { 'CD': 'PT MONCLOVA' },
            { 'CD': 'PT PIEDRAS NEGRAS' },
            { 'CD': 'PT RIO VERDE' },
            { 'CD': 'PT VICTORIA' },
            { 'CD': 'PT ZAMORA' },
            { 'CD': 'PUEBLA' },
            { 'CD': 'QUERETARO' },
            { 'CD': 'REYNOSA' },
            { 'CD': 'SALTILLO' },
            { 'CD': 'SAN LUIS POTOSI MN' },
            { 'CD': 'SAN LUIS POTOSI MY' },
            { 'CD': 'SLRC' },
            { 'CD': 'TAMPICO' },
            { 'CD': 'TAPACHULA' },
            { 'CD': 'TECAMAC' },
            { 'CD': 'TEPIC' },
            { 'CD': 'TIJUANA' },
            { 'CD': 'TLAHUAC' },
            { 'CD': 'TLAJOMULCO' },
            { 'CD': 'TOLUCA' },
            { 'CD': 'TORREON MN' },
            { 'CD': 'TORREON MY' },
            { 'CD': 'TULPELTAC' },
            { 'CD': 'TUXTLA' },
            { 'CD': 'VERACRUZ' },
            { 'CD': 'VILLAHERMOSA' },
            { 'CD': 'XALOSTOC' },
            { 'CD': 'ZACATECAS' },
            { 'CD': 'TALLER CENTRAL' },

        ];

        this.setState({
            cedis: cedis
        });

    }

    LlenarCampos() {
        var datos = [
            {"CD":"ACAPULCO","DIRECCION":"BOULEVARD DE LAS NACIONES, LOTE 33-A INTERIOR B FRACCIONAMIENTO GRANJAS DEL MARQUÉS, MUNICIPIO DE ACAPULCO DE JUAREZ, GUERRERO, C.P. 39890","RESPONSABLE":"MONICO RAMIREZ","CONTACTO":"55 4332 9937","CORREO":"gaca@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE /  COBRE","LINEA1":"744 4502151","LINEA2":"744 4502152","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"15 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"AGUASCALIENTES MN","DIRECCION":"CIRCUITO AGUASCALIENTES SUR NÚMERO 100-A, PARQUE INDUSTRIAL VALLE DE AGUASCALIENTES, DE LA CIUDAD DE AGUASCALIENTES, C.P. 20358","RESPONSABLE":"MARIANA GARCIA","CONTACTO":"44 9930 3061","CORREO":"gags@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"449 9710257","LINEA2":"449 6885113","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"50 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"AGUASCALIENTES MY","DIRECCION":"CARRETERA PANAMERICANA SUR KM. 116 , COL. LOS ARELLANO, AGUASCALIENTES, C.P. 20290","RESPONSABLE":"ESTHELA ","CONTACTO":"44 9150 1559","CORREO":"0","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"449 9711127","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"ATOTONILCO","DIRECCION":"CALLE STEVE MATHIS 16 COL ALAMEDA, ATOTONILCO EL ALTO, JALISCO, C.P. 47750","RESPONSABLE":"JORGE GALLEGOS PEREZ","CONTACTO":"33 1285 6357","CORREO":"arato@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"391 9173861","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CANCUN","DIRECCION":"SÚPER MANZANA 104 MANZANA 26 LOTE 4 FRACCIÓN 001 BENITO JUAREZ QUINTANA ROO C.P.77500","RESPONSABLE":"VERONICA DE DIOS","CONTACTO":"99 8120 8857","CORREO":"gcan@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"998 8868118","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"998 8868119","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"15 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CATEMACO","DIRECCION":"MANUEL C. TELLO #28 COL. EL RODEO. CATEMACO, VER. C.P. 95870","RESPONSABLE":"PABLO BILLO","CONTACTO":"22 9526 8315","CORREO":"arcatemaco@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"294 9431228","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CHETUMAL","DIRECCION":"AVENIDA UNIVERSIDAD N° 283, COL. FRACCIONAMIENTO LAS BRISAS, MPO. OTHÓN P. BLANCO, CHETUMAL QUINTANA ROO, C.P. 77079","RESPONSABLE":"JAVIER MASABA","CONTACTO":"98 3133 1844","CORREO":"gche@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"983 2853145","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CHIHUAHUA","DIRECCION":"CALLE WHASHIGTON EXT. 3701 INT. 25 COL. COMPLEJO INDUSTRIAL LAS AMERICAS, CHIHUAHUA, CHIHUAHUA C.P. 31114","RESPONSABLE":"LETICIA ZAPATA","CONTACTO":"61 4233 6509","CORREO":"gchi@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE /  COBRE","LINEA1":"614 4260514","LINEA2":"614 4219671","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CHIHUAHUA","CONTACTOCAS":"800 1476500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CMA","DIRECCION":"AV. JARDINES S/N COL. JARDINES DE CASA NUEVA, C.P. 55430 ECATEPEC EDO. DE MEX.","RESPONSABLE":"MISAEL MARTINEZ","CONTACTO":"0","CORREO":"mamartinezc@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA / FIBRA","LINEA1":"55 57757829","LINEA2":"55 26464656","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"55 57749554","VOZ2":"55 57752372","VOZ3":"55 26464660","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"0","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"0","CONTACTOCARE":"0"},
            {"CD":"COLIMA","DIRECCION":"KM 6.5 CARRETERA COLIMA-GUADALAJARA S/N EL TRAPICHE, MUNICIPIO DE CUAUHTEMOC. COLIMA. C.P. 28550","RESPONSABLE":"GUSTAVO GUDIÑO ","CONTACTO":"31 2196 8521","CORREO":"cajacol@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"312 3075547","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CUAUTITLAN","DIRECCION":"ANTOINE LAVOISIER N° 45, COL. PARQUE INDUSTRIAL CUAMATLA, CUAUTITLAN, ESTADO DE MÉXICO, C.P. 54730","RESPONSABLE":"DOMINGO BARRETO","CONTACTO":"55 5870 3187","CORREO":"gmciz@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE / COBRE","LINEA1":"58 702396","LINEA2":"58 703187","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CUERNAVACA MN","DIRECCION":"PASEO CUAUHNAHUAC NO. 2004, COL. PROGRESO, JIUTEPEC, MORELOS C.P. 62574","RESPONSABLE":"VACANTE","CONTACTO":"-","CORREO":"gacva@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"777 6887777","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"777 1244109","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CUERNAVACA MY","DIRECCION":"PASEO CUAUHNAHUAC NO. 2004, COL. PROGRESO, JIUTEPEC, MORELOS C.P. 62574","RESPONSABLE":"LUIS IRVING LOPEZ","CONTACTO":"77 7183 1063","CORREO":"cdcva@jumex,com.mx","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"CULIACAN","DIRECCION":"CIRCUITO QUAZAR N° 5333 PONIENTE COL. FRACCIONAMIENTO DOS PUNTAS PARQUE INDUSTRIAL QUAZAR, CULIACÁN SINALOA, C.P. 80184","RESPONSABLE":"JANETT ROMERO","CONTACTO":"68 6288 9658","CORREO":"gcul@jumex.com.mx","SERVICIO":"IDE / INFINITUM / BLUETELECOMM","TIPO":"COBRE","LINEA1":"667 7602751","LINEA2":"6677642935","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"667 7602822","VOZ2":"667 7604671","VOZ3":"667 7602779","VOZ4":"0","VOZ5":"-","CAS":"CASE HERMOSILLO","CONTACTOCAS":"800 6273000","REFERENCIA":"C01-2003-0227","VELOCIDADDE":"10 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"DURANGO","DIRECCION":"SELENIO N° 126 ESQ. CON ESTAÑO, CIUDAD INDUSTRIAL, DURANGO, C.P. 34208","RESPONSABLE":"HADA NEVAREZ","CONTACTO":"61 8144 4270","CORREO":"cddgo@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"618 8141010","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CHIHUAHUA","CONTACTOCAS":"800 1476500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"ECATEPEC","DIRECCION":"-","RESPONSABLE":"JORGE ALBERTO ORTIZ","CONTACTO":"55 8510 3409","CORREO":"gcoa@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"EL PERAL","DIRECCION":"CAMINO A TEOLOYUCAN NUM. 90, COL. SANTA BARBARA, CP.54713 CUAUTITLÁN IZCALLI, MÉX","RESPONSABLE":"JONATHAN RODRIGUEZ","CONTACTO":"0","CORREO":"0","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"55 51244333","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"0","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"0","CONTACTOCARE":"0"},
            {"CD":"ESCARCEGA","DIRECCION":"CALLE 30-A LOTE 3 MANZANA 74 ZONA 1, ESCARCEGA, CAMPECHE CP 24350","RESPONSABLE":"FERNANDO PECH PECH","CONTACTO":"98 1750 2076","CORREO":"aresga@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"982 8240053","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"GUADALAJARA","DIRECCION":"CALLE OLEODUCTO NO.3045, COL. EL ÁLAMO INDUSTRIAL, TLAQUEPAQUE, JALISCO, C.P. 44490","RESPONSABLE":"VICTOR RANGEL","CONTACTO":"87 1131 4973","CORREO":"ggdl@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"FIBRA","LINEA1":"333 6663644","LINEA2":"333 6663589","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"333 6663641","VOZ2":"333 6663642","VOZ3":"333 6663643","VOZ4":"-","VOZ5":"-","CAS":"CASE GUADALAJARA","CONTACTOCAS":"800 3640500","REFERENCIA":"CB2-1509-0180","VELOCIDADDE":"2 MB","VELOCIDADEN":"50 MB","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"GUADALUPE","DIRECCION":"AVENIDA SAN RAFAEL N° 498, COL. ANGEL MARTINEZ VILLARREAL, GUADALUPE, NUEVO LEON, C.P. 67110","RESPONSABLE":"ROBERTO MIJES","CONTACTO":"81 1500 6817","CORREO":"ggpe@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"811 0861733","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"811 0861734","VOZ2":"811 0861735","VOZ3":"818 3799545","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"HERMOSILLO","DIRECCION":"CALLE LÁZARO MERCADO NO. 754  CASI ESQUINA CON LAZAR CÁRDENAS COLONIA EL CHAPARRAL HERMOSILLO SONORA  CP. 83179","RESPONSABLE":"ALFREDO PERALTA","CONTACTO":"68 6292 3441","CORREO":"ghms@jumex.com.mx","SERVICIO":"INFINITUM / ENINETWORK","TIPO":"COBRE - WIRELESS ","LINEA1":"662 2610976","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE HERMOSILLO","CONTACTOCAS":"800 6273000","REFERENCIA":"HMO3570","VELOCIDADDE":"0","VELOCIDADEN":"20 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"HUAJUAPAN","DIRECCION":"CALLE CAMINO A LA HACIENDA DEL CARMEN NÚM. 24 AGENCIA DE POLICÍA MUNICIPAL EL CARMEN, HUAJUAPAN DE LEON OAXACA C.P. 69007","RESPONSABLE":"LUCY RAMOS","CONTACTO":"28 3105 3403","CORREO":"arhjp@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"953 5301086","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"IRAPUATO","DIRECCION":"LIBRAMIENTO NORTE, LEON-QUERETARO KM 4.6 CALLE INTERIOR N° 304, BODEGA 6, PARQUE INDUSTRIAL APOLO, IRAPUATO, GUANAJUATO, C.P. 36546","RESPONSABLE":"IVAN LEON SALAZAR","CONTACTO":"46 2197 3536","CORREO":"girm@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"462 6066478","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"50 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"JUAREZ","DIRECCION":"BOULEVARD OSCAR FLORES SANCHEZ N° 8125, COL PUENTE ALTO, CIUDAD JUAREZ, CHIHUAHUA, C.P. 32695","RESPONSABLE":"ALFREDO RENTERIA","CONTACTO":"65 6440 5250","CORREO":"cdcdj@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"656 2588547","LINEA2":"656 6333389","LINEA3":"656 6333390","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CHIHUAHUA","CONTACTOCAS":"800 1476500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"LA JUNTA","DIRECCION":"CARRETERA CHIHUAHUA -HERMOSILLO KM 145, EL ROSARIO, CHIHUAHUA, C.P. 31690","RESPONSABLE":"ITZEL CORRAL","CONTACTO":"61 4184 7727","CORREO":"icorral@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"C02-1809-0056","VELOCIDADDE":"20 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"LA PAZ","DIRECCION":"AVENIDA INDUSTRIAL SN, ESQ. ELECTRICISTAS, COL. ZONA INDUSTRIAL, LA PAZ, B.C.S. C.P. 23050","RESPONSABLE":"ALFREDO TRUJILLO","CONTACTO":"61 2161 1653","CORREO":"cdlpz@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"612 1211900","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"2 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"LA VILLA","DIRECCION":"CALLE CUITLÁHUAC N° 100 Y 108, COL. ARAGÓN, DEL. GUSTAVO A. MADERO, DF, C.P. 07000","RESPONSABLE":"ALFREDO NEGRETE","CONTACTO":"55 5320 9132","CORREO":"glvi@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"55 55777567","LINEA2":"55 55778366","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"20 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"LEON MN","DIRECCION":"THOMAS ALBA EDISON #401, COL. EL PELUCHAN, LEÓN, GTO. C.P. 37119","RESPONSABLE":"MAURICIO VELAZQUEZ","CONTACTO":"47 7724 6513","CORREO":"cdleo@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"LEON MY","DIRECCION":"BOULEVARD HIDALGO N° 2505, COL. VALLE DEL SOL, LEON, GUANAJUATO, C.P. 37149","RESPONSABLE":"DENESI RAMIREZ","CONTACTO":"47 7231 2410","CORREO":"leomen@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"477 7741388","LINEA2":"477 7741389","LINEA3":"477 7741390","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"LOS REYES","DIRECCION":"AVENIDA ARIES NO. 12, COLONIA SAN ISIDRO ZONA INDUSTRIAL LA PAZ. ESTADO DE MEXICO. C.P. 56516","RESPONSABLE":"JAIME CASTILLO","CONTACTO":"55 2424 8881","CORREO":"glrp@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"55 13141507","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"555 9862530","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"20 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MATEHUALA","DIRECCION":"CALLE ARAMBERRI NO. 607C ZONA CENTRO MATEHUALA SLP, C.P. 78700","RESPONSABLE":"JAVIER DIAZ","CONTACTO":"48 8100 7103","CORREO":"armth@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"488 8817360","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"15 mb","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MAZATLAN","DIRECCION":"CARRETERA INTERNACIONAL NORTE KM. 1.5, BOD. 419 EL VENADILLO CENTRAL DE BODEGAS, MAZATLÁN, SINALOA, C.P. 82129","RESPONSABLE":"ALEXIS PARRA","CONTACTO":"68 6292 3449","CORREO":"germzt@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"669 9807694","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"669 9807246","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE HERMOSILLO","CONTACTOCAS":"800 6273000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MERCED","DIRECCION":"SAN ANTONIO TOMATLÁN N° 63 COL. MORELOS   DELEG. VENUSTIANO CARRANZA C.P. 15100 ","RESPONSABLE":"ARMANDO SANTOS","CONTACTO":"55 6973 6186","CORREO":"cdmrd@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"55 55422582","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"0","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MERIDA","DIRECCION":"CALLE 19 #318 X 42 Y 46 AMPLIACIÓN CIUDAD INDUSTRIAL UMÁN YUCATÁN C.P. 97390","RESPONSABLE":"FABIAN GUERRERO","CONTACTO":"55 4332 2425","CORREO":"gmer@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"999 9192370","LINEA2":"999 9192516","LINEA3":"999 9192515","LINEA4":"-","LINEA5":"-","VOZ1":"999 9190377","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MEXICALI","DIRECCION":"BLVD LÁZARO CÁRDENAS  NO. 4098, COL VILLAS DEL COLORADO, MEXICALI B.C., C.P. 21395","RESPONSABLE":"ENRIQUE GUTIERREZ","CONTACTO":"-","CORREO":"egutierrez@jumex.com.mx","SERVICIO":"-","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"0","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"0","CONTACTOCARE":"0"},
            {"CD":"MOCHIS","DIRECCION":"BOULEVARD ROSENDO G CASTRO N° 1950 ORIENTE BODEGA 11, COL. ALEJANDRO PEÑA, LOS MOCHIS, SINALOA, C.P. 81260","RESPONSABLE":"MARTIN FIERRO","CONTACTO":"68 6292 0436","CORREO":"cajamch@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"668 8243018","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"668 8243054","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE HERMOSILLO","CONTACTOCAS":"800 6273000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"MONTERREY","DIRECCION":"AVENIDA STIVA N° 400, PARQUE IND. STIVA BARRAGÁN, SAN NICOLAS DE LOS GARZA, MONTERREY, NUEVO LEON, C.P. 66422","RESPONSABLE":"ALBERTO HERNANDEZ","CONTACTO":"81 1080 7933","CORREO":"ahernandezr@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE","LINEA1":"818 3524777","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"818 3523894","VOZ2":"818 3526595","VOZ3":"818 3526659","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"MTY_C01-1704-0142","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"MORELIA","DIRECCION":"PERIFÉRICO PASEO DE LA REPUBLICA N° 1538, INTERIOR 7, COL EL REALITO MORELIA, MICHOACÁN, C.P. 58116","RESPONSABLE":"DANIEL MAGALLON","CONTACTO":"55 4332 5384","CORREO":"gmor@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"443 3272253","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"443 2041495","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"NAUCALPAN","DIRECCION":"CALLE CUATRO N°1 LOC.1, FRACC. INDUSTRIAL ALCE BLANCO, NAUCALPAN DE JUAREZ, ESTADO DE MÉXICO, C.P. 53370","RESPONSABLE":"EMMANUEL SALINAS","CONTACTO":"55 7990 2410","CORREO":"gnau@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE /  COBRE","LINEA1":"55 53583082","LINEA2":"55 53584940","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"0","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"OAXACA","DIRECCION":"AVENIDA FERROCARRIL N° 16, COL. GRANJAS Y HUERTOS DE BRENAMIEL, MUNICIPIO DE SAN JACINTO AMILPAS, OAXACA, C.P. 68285","RESPONSABLE":"RICANDO DURAN","CONTACTO":"95 1286 7499","CORREO":"goax@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"951 5493355","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"951 5492591","VOZ2":"951 5492592","VOZ3":"951 5492454","VOZ4":"951 5492534","VOZ5":"0","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"OBREGON","DIRECCION":"BODEGA #4 AV. DR. NORMAN E BORLAUG S/N ENTRE CALLES 500 Y 600 COL. GRUPO MÉXICO CIUDAD OBREGON, SONORA C.P. 85203","RESPONSABLE":"SAMUEL ROSSETE","CONTACTO":"68 6269 5070","CORREO":"gobr@jumex.com.mx","SERVICIO":"ENINETWORK","TIPO":"WIRELESS","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"CO2204 ","VELOCIDADDE":"0","VELOCIDADEN":"20 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PACHUCA","DIRECCION":"LOTE 6 AVENIDA B, COL. PARQUE INDUSTRIAL CANACINTRA, MUNICIPIO MINERAL DE LA REFORMA HIDALGO C.P. 42093","RESPONSABLE":"IGOR PEREZ","CONTACTO":"55 4332 6431","CORREO":"gpch@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"771 7163240","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"771 7163125","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE PUEBLA","CONTACTOCAS":"800 2261500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"POLANCO","DIRECCION":"MIGUEL DE CERVANTES SAAVEDRA #301 PISO 3 COL. AMPLIACION GRANADA  CP 11520, CDMX","RESPONSABLE":"JUAN CARLOS RAMOS","CONTACTO":"-","CORREO":"-","SERVICIO":"-","TIPO":"-","LINEA1":"555 2803433","LINEA2":"555 3955366","LINEA3":"55 25894316","LINEA4":"-","LINEA5":"55 52047508","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"0","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"0","CONTACTOCARE":"0"},
            {"CD":"POZARICA","DIRECCION":"POZO # 2 NO. 300 ESQ. CALLE VILLARREAL COL. DIVISIÓN DE ORIENTE, POZA RICA VERACRUZ C.P. 93350","RESPONSABLE":"JULIETA HERNANDEZ","CONTACTO":"78 2223 1323","CORREO":"gpzr@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA / FIBRA / FIBRA","LINEA1":"782 1190519","LINEA2":"782 8238772","LINEA3":"782 8244945","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE PUEBLA","CONTACTOCAS":"800 2261500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"50 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PROGRESO","DIRECCION":"CALLE RODRIGUEZ PUEBLA NO. 19, LETRA -A COL. CENTRO, MUNICIPIO PROGRESO DE OBREGON, HIDALGO, C.P. 42730","RESPONSABLE":"ALEXIS ANGELES","CONTACTO":"77 3174 6393","CORREO":"cajapch2@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"738 7253216","LINEA2":"738 7357095","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT CD VALLES","DIRECCION":"CARRETERA TAMPICO VALLES ESQ CON CALLE ARROYO S/N COL, RAFAEL CURIEL, CIUDAD VALLES, SLP, CP 79060","RESPONSABLE":"JUAN JESUS RAMIREZ TORRES","CONTACTO":"48 7109 8945","CORREO":"arval@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"481 3858276","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"15 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT COZUMEL","DIRECCION":"CALLE 8 NORTE 398, COL. EMILIANO ZAPATA, COZUMEL QUINTANA ROO CP 77620","RESPONSABLE":"JORGE FRANKLIN GARCIA","CONTACTO":"99 8321 0552","CORREO":"cozmen@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"987 8690434","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT ENSENADA","DIRECCION":"CALLE ESMERLADA 976, COL. VALLE DORADO, ENSENADA, BAJA CALIFORNIA CP 22890","RESPONSABLE":"OMAR GEOBANI DON CANET","CONTACTO":"64 6108 6187","CORREO":"arens@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT LAREDO","DIRECCION":"AV VENUSTIANO CARRANZA 4243 COL. SAN RAFAEL, NUEVO LAREDO, TAMAULIPAS CP 88242","RESPONSABLE":"ALVARO VALADEZ MARTINEZ","CONTACTO":"81 1285 2531","CORREO":"arlrd@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"867 7143288","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT MAGDALENA","DIRECCION":"AV CUAUHTEMOC 403 COL. DEL RIO, SANTA ANA, SONORA CP 84600","RESPONSABLE":"PAVEL FERNANDO PRECIADO RODRIGUEZ","CONTACTO":"63 1130 9349","CORREO":"armdk@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"641 3243595","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE HERMOSILLO","CONTACTOCAS":"800 6273000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT MONCLOVA","DIRECCION":"ENCINO 42-A COL. LA LOMA, MONCLOVA COAHUILA, CP 25770","RESPONSABLE":"LUIS DE LA CRUZ ZAVALA","CONTACTO":"-","CORREO":"armnc@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"866 6314496","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT PIEDRAS NEGRAS","DIRECCION":"BLVD. ELISEO MENDOZA BERRUETO NO. 924 C-2, COL. ALTAMIRA, PIEDRAS NEGRAS, COAHUILA, CP 26090","RESPONSABLE":"HERIBERTO MORALES","CONTACTO":"87 8140 0514","CORREO":"arpne@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"878 7861868","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT RIO VERDE","DIRECCION":"CARRETERA SAN LUIS - RIO VERDE KM 126, ZONA CENTRO RIO VERDE,SLP CP 79610 ","RESPONSABLE":"JUAN BERNARDO GUEVARA","CONTACTO":"48 7144 6662","CORREO":"arrve@jumex.com.mx","SERVICIO":"INFINITUM/TELCEL","TIPO":"WIRELESS","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"-","CONTACTOCAS":"-","REFERENCIA":"-","VELOCIDADDE":"-","VELOCIDADEN":"10 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT VICTORIA","DIRECCION":"C. LIBRAMIENTO NACIONES UNIDAS S/N, MZ 57 LOTE 7, COL, PRESITAS, CD VICTORIA CP 87278","RESPONSABLE":"JUAN ANTONIO PARTIDA CANTU","CONTACTO":"83 4145 6790","CORREO":"arvic@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"834 1520870","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PT ZAMORA","DIRECCION":"CARRETERA ZAMORA - LA BARCA KM 5.35 BODEGA 5, COL LAS HUERTAS DEL CERRITO, ZAMORA, MICHOACAN, CP 59617","RESPONSABLE":"JASIEL ESPINO","CONTACTO":"35 1125 3848","CORREO":"arzam@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"351 5176403","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE GUADALAJARA","CONTACTOCAS":"800 3640500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"PUEBLA","DIRECCION":"BOULEVARD GASODUCTO N° 25-1, PARQUE INDUSTRIAL PUEBLA 2000, PUEBLA, C.P. 72225","RESPONSABLE":"FERMIN MUÑOZ","CONTACTO":"55 4332 8510","CORREO":"gpue@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"222 2825036","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"222 2828889","VOZ2":"222 2828924","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE PUEBLA","CONTACTOCAS":"800 2261500","REFERENCIA":"FB2-1511-0006","VELOCIDADDE":"2 MB","VELOCIDADEN":"3 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"QUERETARO","DIRECCION":"CALLE TEÓFILO BICHARA ZIMERI S/N KM 13.7 CARRETERA LIBRE QUERETARO-CELAYA COL.SAN ISIDRO DEL LLANITO, MPIO, APASEO EL ALTO,GUANAJUATO C.P 38511","RESPONSABLE":"LOURDES MAGALLANES","CONTACTO":"55 4332 5730","CORREO":"gqro@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"?","LINEA1":"442 2253742","LINEA2":"442 688 4634","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"442 2253744","VOZ2":"442 2256035","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"C01-1805-0306","VELOCIDADDE":"10 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"REYNOSA","DIRECCION":"CARRETERA RIBEREÑA KM. 4.5, COL RIVERAS DE RANCHO GRANDE, MPO REYNOSA, TAMAULIPAS, C.P. 88615","RESPONSABLE":"YESSICA HERNANDEZ","CONTACTO":"83 3165 2369","CORREO":"grey@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE","LINEA1":"899 9538585","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"899 9538383","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"0","VELOCIDADDE":"0","VELOCIDADEN":"10 MB","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"SALTILLO","DIRECCION":"CALLE PROLONGACIÓN OTILIO GONZALEZ N° 2994, FRACCIONAMIENTO LA HERRADURA III, SALTILLO, COAHUILA, C.P. 25030","RESPONSABLE":"LUZ HERNANDEZ SUAREZ","CONTACTO":"81 1321 1478","CORREO":"cdsal@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"844 4143478","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"844 4149335","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"50 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"SAN LUIS POTOSI MN","DIRECCION":"EJE 122 NO 380 BODEGA 6 ZONA INDUSTRIAL SAN LUIS POTOSÍ, C.P. 78395","RESPONSABLE":"ALBETO GONZALEZ","CONTACTO":"47 7118 7965","CORREO":"gslp@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"444 7990220","LINEA2":"444 7990314","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"444 7990221","VOZ2":"0","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"SAN LUIS POTOSI MY","DIRECCION":"EJE 120 #470-A, ZONA INDISTRIAL, SAN LUIS POTOSI, SLP, CP 78395","RESPONSABLE":"MONICA BARBOSA","CONTACTO":"44 4309 4568","CORREO":"0","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"444 8248415","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE QUERETARO","CONTACTOCAS":"800 4040000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"SLRC","DIRECCION":"AV SINALOA Y PESQUEIRA NÚMERO 210 COL. RUIZ CORTINES CIUDAD SAN LUIS RIO COLORADO, SONORA C.P. 83439","RESPONSABLE":"MANUEL LOBATOS","CONTACTO":"68 6292 0864","CORREO":"gslp@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB ","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TAMPICO","DIRECCION":"AV DE LA INDUSTRIA 706 BODEGA F , COLONIA MONTE ALTO , ALTAMIRA TAMPS, CP 89605","RESPONSABLE":"JAVIER GUERRA","CONTACTO":"55 4332 7979","CORREO":"gtmp@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE","LINEA1":"833 2241516","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"833 2241528","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"CB2-1509-0201","VELOCIDADDE":"2 MB","VELOCIDADEN":"2 MB","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"TAPACHULA","DIRECCION":"AV. INDUSTRIAL ROBLES,, PARQUE INDUSTRIAL LOS MANGOS, EN EL LIBRAMIENTO SUR DE TAPACHULA KM 4000 , BODEGAS NO. 6 Y 7 C.P. 30575","RESPONSABLE":"MARCO PEREZ","CONTACTO":"96 2211 9313","CORREO":"cdtap@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE","LINEA1":"962 6282958","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TECAMAC","DIRECCION":"CARRETERA FEDERAL MÉXICO- PACHUCA NO 4072 LT. 39, COL. SAN NICOLAS LA REDONDA, TECÁMAC, ESTADO DE MÉXICO. C.P. 55743","RESPONSABLE":"RICARDO VENTURA","CONTACTO":"55 4129 4573","CORREO":"gtec@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE /  COBRE","LINEA1":"55 59342143","LINEA2":"55 59342924","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TEPIC","DIRECCION":"AVENIDA NIÑO OBRERO N°140, ESQ. INDUSTRIALES NAYARITAS, COL. CD. INDUSTRIAL, TEPIC, NAYARIT, C.P. 63173","RESPONSABLE":"YURIANA BENITEZ VAZQUEZ ","CONTACTO":"31 1103 6658","CORREO":"gtpc@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"COBRE / COBRE","LINEA1":"311 1290248","LINEA2":"311 2195000","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE GUADALAJARA","CONTACTOCAS":"800 3640500","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB ","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TIJUANA","DIRECCION":"CALLE SAN ANTONIO DE LOS BUENOS N° 8450 INTERIOR C, PARQUE INDUSTRIAL VALLE SUR II, TIJUANA, BAJA CALIFORNIA, C.P. 22637","RESPONSABLE":"VICTOR HUGO VALDEZ","CONTACTO":"68 6269 5071","CORREO":"gtij@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"TC2-1601-0002","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"TLAHUAC","DIRECCION":"AVENIDA LA PURÍSIMA N°212, COL. AMPLIACIÓN LEYES DE REFORMA, DEL. IZTAPALAPA, DF, C.P. 09310","RESPONSABLE":"CESAR DOMINGUEZ","CONTACTO":"55 7710 7420","CORREO":"gtla@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE","LINEA1":"55 56124857","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"55 56124996","VOZ2":"55 56125541","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"5 MB ","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TLAJOMULCO","DIRECCION":"PROLONGACIÓN LOPEZ MATEOS SUR # 18000, CALLE AV. PRIVADA DE LAS FLORES BODEGAS 48/50 FRACCIONAMIENTO INDUSTRIAL SANTA CRUZ, COL. SANTA CRUZ DE LAS FLORES, TLAJOMULCO DE ZUÑIGA JALISCO, C.P. 45640","RESPONSABLE":"JUAN CARLOS VARGAS","CONTACTO":"55 4596 3370","CORREO":"jcvargas@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA / FIBRA / FIBRA / FIBRA","LINEA1":"333 7964025","LINEA2":"333 7964026","LINEA3":"333 7964704","LINEA4":"333 7960241","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE GUADALAJARA","CONTACTOCAS":"800 3640500","REFERENCIA":"C02-2004-1987","VELOCIDADDE":"20 mb","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"TOLUCA","DIRECCION":"AVENIDA INDEPENDENCIA N° 1610, ZONA INDUSTRIAL TOLUCA, ESTADO DE MÉXICO, C.P. 50071","RESPONSABLE":"JOSE LUIS RAMIREZ","CONTACTO":"72 2394 0561","CORREO":"gtol@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"DEDICADO / COBRE","LINEA1":"722 1673497","LINEA2":"722 1673499","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"722 1673498","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE PUEBLA","CONTACTOCAS":"800 2261500","REFERENCIA":"CB2-1509-0175","VELOCIDADDE":"2 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"800 007 7700"},
            {"CD":"TORREON MN","DIRECCION":"ADOLFO AYMES 161-A CIUDAD INDUSTRIAL TORREON COAHUILA CP 27019","RESPONSABLE":"ADRIANA JACINTO","CONTACTO":"86 7148 4650","CORREO":"gatrn@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE /  COBRE","LINEA1":"871 7241703","LINEA2":"871 7500240","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"871 2096064","VOZ2":"0","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TORREON MY","DIRECCION":"BOULEVARD MÉXICO #102 BULEVAR MÉXICO #102 INTERIOR #2 PARQUE INDUSTRIAL HI TECH GÓMEZ PALACIO DGO C.P. 35140","RESPONSABLE":"OSIEL FLORES","CONTACTO":"87 1113 8897","CORREO":"-","SERVICIO":"INFINITUM","TIPO":"?","LINEA1":"871 6888205","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MONTERREY","CONTACTOCAS":"800 8322600","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TULPELTAC","DIRECCION":"ANTIGUA CARRETERA MEX-PACH KM 19.5 COL. TULPETLAC, ESTADO DE MEXICO,CP 55400","RESPONSABLE":"JUAN CARLOS RAMOS","CONTACTO":"-","CORREO":"-","SERVICIO":"INFINITUM","TIPO":"-","LINEA1":"55 115344","LINEA2":"55 51624746","LINEA3":"55 57741166","LINEA4":"55 57741327","LINEA5":"-","VOZ1":"55 57741556","VOZ2":"55 57743153","VOZ3":"55 59256659","VOZ4":"55 59256660","VOZ5":"55 59256661","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TUXTLA","DIRECCION":"CARRETERA PANAMERICANA NO. 5191 COL. PLAN DE AYALA, TUXTLA GUTIÉRREZ, CHIAPAS C.P. 29020","RESPONSABLE":"ARIOSTO GOMEZ","CONTACTO":"96 1579 4760","CORREO":"gtgz@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"961 6155181","LINEA2":"961 6155625","LINEA3":"961 6154818","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"50 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"VERACRUZ","DIRECCION":"COLORINES LOTE 52, 53 Y 54 MANZANA XIX (ENTRE PIRUL Y COLORINES) CD. INDUSTRIAL BRUNO PAGLIAI VERACRUZ, VERACRUZ. C.P. 91697","RESPONSABLE":"DIANA RAMOS","CONTACTO":"46 2171 5156","CORREO":"dramos@jumex.com.mx","SERVICIO":"INFINITUM","TIPO":"FIBRA","LINEA1":"229 9208062","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"229 9208120","VOZ2":"229 1550718","VOZ3":"229 9208119","VOZ4":"-","VOZ5":"-","CAS":"CASE PUEBLA","CONTACTOCAS":"800 2261500","REFERENCIA":"CB6-1708-0080","VELOCIDADDE":"6 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"01800 007 7700"},
            {"CD":"VILLAHERMOSA","DIRECCION":"AV. OXIGENO MANZANA 5 LT. 5, CD. INDUSTRIAL 2DA ETAPA MPO. CENTRO VILLAHERMOSA, TABASCO C.P. 86010","RESPONSABLE":"ARACELI CHAVEZ","CONTACTO":"9931594167","CORREO":"gvhs@jumex.com.mx","SERVICIO":"IDE / INFINITUM","TIPO":"COBRE?","LINEA1":"9933533481","LINEA2":"9933533482","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"9933532375","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"CASE MERIDA","CONTACTOCAS":"800 2011100","REFERENCIA":"CB4-1509-0028","VELOCIDADDE":"4 MB","VELOCIDADEN":"0","CARE":"UNINET","CONTACTOCARE":"01800 007 7700"},
            {"CD":"XALOSTOC","DIRECCION":"ANTIGUA CARRETERA MEX-PACH KM 12.5, COL. RUSTICA XALOSOTC, CP 55340, ECAPETEPEC EDO MEX.","RESPONSABLE":"JUAN CARLOS RAMOS","CONTACTO":"-","CORREO":"-","SERVICIO":"IDE / INFINITUM","TIPO":"","LINEA1":"55 55698721","LINEA2":"55 57550737","LINEA3":"55 57550787","LINEA4":"55 57550863","LINEA5":"-","VOZ1":"55 57550897","VOZ2":"55 57550907","VOZ3":"55 57551343","VOZ4":"-","VOZ5":"-","CAS":"CASE CENTRO","CONTACTOCAS":"55 54475000","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"ZACATECAS","DIRECCION":"CARRETERA PANMERICANA KM. 12.5, COL. LAS PILAS, MUNICIPIO MORELOS, ZACATECAS, C.P. 98100","RESPONSABLE":"PERLA ESQUIVEL","CONTACTO":"49 2102 2321","CORREO":"cdzacatecas@jumex.com.mx","SERVICIO":"-","TIPO":"-","LINEA1":"-","LINEA2":"-","LINEA3":"-","LINEA4":"-","LINEA5":"-","VOZ1":"-","VOZ2":"-","VOZ3":"-","VOZ4":"-","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"3 MB","CARE":"-","CONTACTOCARE":"-"},
            {"CD":"TALLER CENTRAL","DIRECCION":"AVE CENTRAL 150 SUBNUMERO EDIF COL. RUSTICA XALOSTOC ECATEPEC","RESPONSABLE":"-","CONTACTO":"-","CORREO":"-","SERVICIO":"-","TIPO":"-","LINEA1":"55 57550971","LINEA2":"55 57901759","LINEA3":"55 57904133","LINEA4":"55 57905782","LINEA5":"-","VOZ1":"5557550971","VOZ2":"5557901759","VOZ3":"5557904133","VOZ4":"5557905782","VOZ5":"-","CAS":"0","CONTACTOCAS":"0","REFERENCIA":"-","VELOCIDADDE":"0","VELOCIDADEN":"0","CARE":"-","CONTACTOCARE":"-"},
            
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
                responsable: result.RESPONSABLE,
                contacto: result.CONTACTO,
                correo: result.CORREO,
                telmexi1: result.LINEA1,
                telmexi2: result.LINEA2,
                telmexi3: result.LINEA3,
                telmexi4: result.LINEA4,
                telemxv1: result.VOZ1,
                telemxv2: result.VOZ2,
                telemxv3: result.VOZ3,
                telemxv4: result.VOZ4,
                cas: result.CAS,
                cascontact: result.CONTACTOCAS,
                velocidad: result.VELOCIDADEN,
                tipo: result.TIPO,
                observacion: result.REFERENCIA,
                direccion: result.DIRECCION
            })
        }
        console.log("resultado", result);
    }

}