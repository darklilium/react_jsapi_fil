import React from 'react';
import mymap from '../services/map-service';
import {addCertainLayer} from '../services/layers-service';
import formatDate from '../utils/milliSecondsToDate';
import StatisticsToolbar from './StatisticsToolbar.jsx';
import SearchBar from './Searchbar.jsx';
import StatisticsSummary from './Statistics-summary.jsx';
import GriddleGrid from './GriddleGrid-component.jsx';
import {getClieInterruptionsByExtent} from '../services/getInterruptionsByExtent-service';
import {getSEDByExtent} from '../services/getInterruptionsByExtent-service';
import token from '../services/token-service';
import LayerList from './LayerList.jsx';
import cookiehandler from 'cookie-handler';
import $ from 'jquery';
import {changeMapCenter} from '../services/map-service';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton,FormGroup,FormControl,Button, MenuItem,Breadcrumb, CollapsibleNav} from 'react-bootstrap';
import Point from 'esri/geometry/Point';

function createDataObject(){
  return {
    'Tipo' : 0 ,
    'ID Orden': 0,
    'ID Incidencia': 0,
    'Estado':0,
    'Fecha creacion': 0 ,
    'Causa': 0,
    'Comentario': 0,
    'Tiempo': 0,
    'ETR': 0,
    'Alimentador': 0,
    'Comuna' : 0,
    'Cantidad': 0,
    'Geometry': 0
  };
}

class POParral extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      xCoor: 0,
      yCoor: 0
    };
  }

  componentWillMount(){

    if (!cookiehandler.get('tkn')){
        window.location.href = "index.html";
        return;
    }

    // if you are going to use the same object to represent both values
    // use a factory function to create both objects

    this.state = {
      mydatanis:[createDataObject()],
      mydatased:[createDataObject()],
      xCoor: -71.901871,
      yCoor: -35.49456
    };
  }

  componentDidMount(){

    var map = mymap.createMap("map_div","topo",this.state.xCoor ,this.state.yCoor,11);
    map.disableKeyboardNavigation();

    addCertainLayer('po_interrupciones',9,"");

    map.on('extent-change', ()=>{

      getClieInterruptionsByExtent((map.extent), (myresultsNis)=>{
        //console.log(myresultsNis);
        let nisresults = myresultsNis.map((result)=>{

          let mynewNis = {
            'Tipo': 'DOM',
            'ID Orden': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.id_orden'],
            'ID Incidencia': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.id_incidencia'],
            'Estado': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.estado_orden'],
            'Fecha Creacion': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_creacion']),
            'Fecha Asignacion': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_asignacion']),
            'Fecha Despacho': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_despacho']),
            'Fecha Ruta': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_ruta']),
            'Fecha Llegada': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_llegada']),
            'Causa': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.causa'],
            'Comentario': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.comentario'],
            'Tiempo': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.TIEMPO_TRA'],
            'ETR': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.etr']),
            'Alimentador': 'Por definir',
            'Comuna' : 'Por definir',
            'Cantidad': 1,
            'Geometry': result.geometry
          }

          return mynewNis;
        });
        this.setState({mydatanis:nisresults});
      });

      getSEDByExtent((map.extent), (myresultsSed)=>{
          let sedresults = myresultsSed.map((result)=>{

          let mynewSed = {
            'Tipo': 'RED',
            'ID Orden': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.id_orden'],
            'ID Incidencia': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.id_incidencia'],
            'Estado': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.estado_orden'],
            'Fecha Creacion': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_creacion']),
            'Fecha Asignacion': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_asignacion']),
            'Fecha Despacho': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_despacho']),
            'Fecha Ruta': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_ruta']),
            'Fecha Llegada': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.fecha_llegada']),
            'Causa': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.causa'],
            'Comentario': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.comentario'],
            'Tiempo': result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.TIEMPO_TRA'],
            'ETR': formatDate(result.attributes['ARCGIS.DBO.%view_tiempo_order_po_3_1.etr']),
            'Alimentador': result.attributes['ARCGIS.DBO.SED_006.alimentador'],
            'Comuna' : result.attributes['ARCGIS.DBO.SED_006.comuna'],
            'Cantidad' : 'Por definir',
            'Geometry': result.geometry
          }
          return mynewSed;
        });
        this.setState({mydatased:sedresults});
      });
    });

  }



  render(){
    return (
    <div className="interruptions__wrapper">

    <div className="interruptions__symbology"><img className="interruptions__symbology-img"/></div>
      <div className="interruptions__header">
      <div className="interruptions_chooseFilial">
        <Breadcrumb className="dashboard_breadcrum">
          <Breadcrumb.Item href="chilquinta.html">
            Chilquinta
          </Breadcrumb.Item>
          <Breadcrumb.Item href="casablanca.html" >
            Casablanca
          </Breadcrumb.Item>
          <Breadcrumb.Item href="casablanca.html">
            Linares
          </Breadcrumb.Item>
          <Breadcrumb.Item href="litoral.html">
            Litoral
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Parral
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
        {/*Search nis and orders with statistics button and table*/}
        <SearchBar data ={[...this.state.mydatased,...this.state.mydatanis]} />
        {/* StatisticsToolbar on top*/}
        <StatisticsToolbar />
      </div>
      {/* Layer List */}
      <LayerList show={["check_alimentador","check_SSEE"]}/>
      {/* The map*/}
      <div className="map_div" id="map_div">

      </div>
      {/*Statistics per Region(qtty and percentual), office*/}
        <StatisticsSummary />
      {/*  <MyGrid /> */}
      <GriddleGrid data={[...this.state.mydatased,...this.state.mydatanis]}/>
    </div>
    );
  }
}

export default POParral;
