import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Geocode from "react-geocode";
import Media from 'react-media';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// import * as Constantes from '../componentes/Constantes';


var url_general = '';
Geocode.setApiKey("AIzaSyB_Dpl0sPNY7SnumRJvxAMAhonX9Bfi_3k");
Geocode.enableDebug();
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            area: '',
            state: '',
            cp: '',
            referencia: '',
            mensaje: '',
            mensajeError: '',
            error: false,
            municipio: '',
            longitud: '',
            latitud: '',
            nocasa:'',
            referencias: "",
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }

        }
        this.handleChangeCalles = this.handleChangeCalles.bind(this);
        this.handleChangeNoCasa = this.handleChangeNoCasa.bind(this);
        this.handleChangeReferencias = this.handleChangeReferencias.bind(this);
        this.handleChangeColonia = this.handleChangeColonia.bind(this);
        this.handleChangeCodigo = this.handleChangeCodigo.bind(this);

    }

    handleChangeCalles(event) {
        this.setState({ address: event.target.value }, () =>{
            var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencias, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
            console.log("mi direccion citch", datos);
            localStorage.setItem('insertar_direccion', JSON.stringify(datos));
        })
    }
    handleChangeNoCasa(event) {
        this.setState({ nocasa: event.target.value }, () => console.log(this.state.nocasa))
        var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencias, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
        console.log("mi direccion citch", datos);
        localStorage.setItem('insertar_direccion', JSON.stringify(datos));
    }
    handleChangeReferencias(event) {
        this.setState({ referencias: event.target.value }, () => console.log(this.state.referencias))
        var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencias, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
        console.log("mi direccion citch", datos);
        localStorage.setItem('insertar_direccion', JSON.stringify(datos));
    }
    handleChangeColonia(event) {
        this.setState({ area: event.target.value }, () => console.log(this.state.colonia))
        var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencias, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
        console.log("mi direccion citch", datos);
        localStorage.setItem('insertar_direccion', JSON.stringify(datos));
    }
    handleChangeCodigo(event) {
        this.setState({ cp: event.target.value }, () => console.log(this.state.cp))
        var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencias, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
        console.log("mi direccion citch", datos);
        localStorage.setItem('insertar_direccion', JSON.stringify(datos));
    }

    /**
      * Get the current address from the default map position and set those values in the state
      */
    componentDidMount() {
        console.log("datos_lib",this.state.mapPosition.lat);
        Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    geometry = response.results[0].geometry.location,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray),
                    cp = this.getCP(addressArray),
                    municipio = this.getMunicipio(addressArray),
                    longitud = this.getLongitud(geometry),
                    latitud = this.getLatitud(geometry)
                    ;

                console.log('city', city, area, state);

                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    cp: (cp) ? cp : '',
                    municipio: (municipio) ? municipio : '',
                    longitud: (longitud) ? longitud : '',
                    latitud: (latitud) ? latitud : '',
                    nocasa: ''
                }, () => {
                    var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencia, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
                    console.log("mi direccion citch", datos);
                    localStorage.setItem('insertar_direccion', JSON.stringify(datos));
                })
            },
            error => {
                console.error(error);
            }
        );
    };
    /**
      * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
      *
      * @param nextProps
      * @param nextState
      * @return {boolean}
      */
    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if (this.props.center.lat === nextProps.center.lat) {
            return false
        }
    }
    /**
      * Get the city and set the city input value to the one selected
      *
      * @param addressArray
      * @return {string}
      */
    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                console.log('ciudad', city);
                return city;
            }

        }
    };
    /**
      * Get the area and set the area input value to the one selected
      *
      * @param addressArray
      * @return {string}
      */
    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };
    /**
      * Get the address and set the address input value to the one selected
      *
      * @param addressArray
      * @return {string}
      */
    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };
    /**
     * 
     * @param addressArray
     * @return {string} 
     */
    getCP = (addressArray) => {
        let cp = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] === 'postal_code') {
                cp = addressArray[i].long_name;
                return cp;
            }
        }
    }
    /**
     * 
     * @param geometry
     * @return {string} 
     */
    getLongitud = (geometry) => {
        console.log('goemtria', geometry);
        let longitud = geometry.lat;
        return longitud;
    }
    /**
     * 
     * @param geometry
     * @return {string} 
     */
    getLatitud = (geometry) => {
        let latitud = geometry.lng;
        return latitud;
    }
    /**
     * 
     * @param addressArray
     * @return {string} 
     */
    getMunicipio = (addressArray) => {
        let municipio = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0] === 'locality') {
                municipio = addressArray[index].long_name;
                return municipio;
            }
        }
    }
    /**
      * And function for city,state and address input
      * @param event
      */
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    /**
     * 
     * @param  event 
     */
    handleChangeReferencia = (event) => {
        this.setState({ referencia: event.target.value }, () => console.log(this.state.referencia))
    }
    /**
      * This Event triggers when the marker window is closed
      *
      * @param event
      */
    onInfoWindowClose = (event) => {
    };
    /**
      * When the user types an address in the search box
      * @param place
      */
    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            geometry = place.geometry.location,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            cp = this.getCP(addressArray),
            longitud = this.getLongitud(geometry),
            latitud = this.getLatitud(geometry),
            municipio = this.getMunicipio(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            cp: (cp) ? cp : '',
            longitud: (longitud) ? longitud : '',
            latitud: (latitud) ? latitud : '',
            municipio: (municipio) ? municipio : '',
            nocasa:'',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        }, () => {
            localStorage.removeItem("insertar_direccion");
            var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencia, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
            console.log("mi direccion citch", datos);
            localStorage.setItem('insertar_direccion', JSON.stringify(datos));
        })
    };
    /**
      * When the marker is dragged you get the lat and long using the functions available from event object.
      * Use geocode to get the address, city, area and state from the lat and lng positions.
      * And then set those values in the state.
      *
      * @param event
      */
    onMarkerDragEnd = (event) => {
        console.log('event', event);
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng(),
            addressArray = [];
        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    geometry = response.results[0].geometry.location,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray),
                    cp = this.getCP(addressArray),
                    longitud = this.getLongitud(geometry),
                    latitud = this.getLatitud(geometry),
                    municipio = this.getMunicipio(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    cp: (cp) ? cp : '',
                    longitud: (longitud) ? longitud : '',
                    latitud: (latitud) ? latitud : '',
                    municipio: (municipio) ? municipio : '',
                }, () => {
                    localStorage.removeItem("insertar_direccion");
                    var datos = { "Direccion": this.state.address+", Casa/Depto: "+this.state.nocasa, "Municipio": this.state.municipio, "CP": this.state.cp, "Estado": this.state.state, "Colonia": this.state.area, "Referencia": this.state.referencia, "Longitud": this.state.longitud.toString(), "Latitud": this.state.latitud.toString() }
                    console.log("mi direccion citch", datos);
                    localStorage.setItem('insertar_direccion', JSON.stringify(datos));
                })
            },
            error => {
                console.error(error);
            }
        );
    };
    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/* For Auto complete Search Box */}
                        <Media queries={{ small: { maxWidth: 480 } }}>
                            {matches =>
                                matches.small ? (
                                    <Autocomplete
                                        style={{
                                            width: '100%',
                                            height: '40px',
                                            paddingLeft: '16px',
                                            marginTop: '2px',
                                            marginBottom: '100px',
                                            position: 'absolute',
                                            top: 72
                                        }}
                                        onPlaceSelected={this.onPlaceSelected}
                                        types={['geocode']}
                                        componentRestrictions={{ country: "mx" }}
                                    />
                                )
                                    : (
                                        <Autocomplete
                                            style={{
                                                width: '100%',
                                                height: '40px',
                                                paddingLeft: '16px',
                                                marginTop: '2px',
                                                // marginBottom: '100px',
                                                // position:'absolute',
                                                // top:72
                                             

                                            }}
                                            onPlaceSelected={this.onPlaceSelected}
                                            types={['geocode']}
                                            componentRestrictions={{ country: "mx" }}
                                        />
                                    )
                            }
                        </Media>
                        {/*Marker*/}
                        <Marker google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <Marker />
                        {/* InfoWindow on top of marker */}
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>
                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>
                <div>
                    {/* <div className="form-group">
       <label htmlFor="">Ciudad</label>
       <input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
      </div> */}
                    <AsyncMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_Dpl0sPNY7SnumRJvxAMAhonX9Bfi_3k&libraries=places"
                        loadingElement={
                            <div style={{ height: `100%` }} />
                        }
                        containerElement={
                            <div style={{ height: this.props.height }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />

                    <Media queries={{ small: { maxWidth: 480 } }}>

                        {matches =>
                            matches.small ? (
                                null
                            )
                                : (
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="">Dirección</label>
                                            <input type="text" name="area" className="form-control" onChange={this.handleChangeCalles} value={this.state.address} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="area" className="form-control" onChange={this.handleChangeColonia} value={this.state.area} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="area" className="form-control" onChange={this.handleChangeCodigo} value={this.state.cp} />
                                        </div>
                                        <Button variant="contained" style={{ width: '100%', backgroundColor: 'red' }} onClick={() => this.IniciarSesion()} >Ingresar</Button>
                                    </>
                                )
                        }

                    </Media>

                    {/* <div className="form-group" style={{marginTop:60}}>
       <label htmlFor="">Colonia</label>
       <input type="text" name="area" className="form-control" onChange={ this.onChange } value={ this.state.area }/>
      </div>
      <div className="form-group">
       <label htmlFor="">Estado</label>
       <input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
      </div>
      <div className="form-group">
       <label htmlFor="">Dirección</label>
       <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
      </div>
      <div className="form-group">
          <label htmlFor="">Referencia</label>
          <textarea type="text" name="" className="form-control" onChange={ this.handleChangeReferencia } ></textarea>
      </div> */}

                </div>

            </div>
        } else {
            map = <div style={{ height: this.props.height, marginTop: 50 }} />
        }
        return (
            <Route>
                {map}

            </Route>
        )
    }

    ValidarDireccion() {
        var token = localStorage.getItem("token");
        this.RegistrarDireccion(token).then(item => {
            this.setState({
                mensaje: item
            }, () => {
                if (this.state.mensaje.Estatus == "OK") {
                    this.ProcesoInicial(token);
                    this.setState({
                        mostrar: false,
                        mostrarError: false
                    })
                }
                else {
                    this.setState({
                        error: true,
                        mensajeError: this.state.mensaje.Mensaje
                    }, () => {
                        console.log('mensaje direccion', this.state.mensajeError);
                    })
                }

            })
        })
    }
    RegistrarDireccion(token) {
        var pro;
        const data = {
            "Direccion": this.state.address,
            "Municipio": this.state.city,
            "CP": this.state.cp,
            "Estado": this.state.state,
            "Colonia": this.state.area,
            "Referencia": this.state.referencia
        };
        console.log("mi array", data);
        const posturl = url_general + "api/Usuario/direccion/agregar";
        var result = new Promise(function (resolve, reject) {
            fetch(posturl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(
                (res) => res.json()
            )
                .catch(error => console.log('Error', error))
                .then(resp => {

                    resolve(resp);
                });

        });

        return result;
    }
}
export default Map