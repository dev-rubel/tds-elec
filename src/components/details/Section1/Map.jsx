import {useRef, useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, POSITION_RIGHT, POSITION_BOTTOM} from 'react-svg-pan-zoom';
import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

function Map({selectedSeat, mapSrc, divid}) {
  const location = useLocation();

  const Viewer = useRef(null);
  const [tool, setTool] = useState(TOOL_NONE)
  const [value, setValue] = useState(INITIAL_VALUE) 
  
  Node.prototype.childrens = function(cName,prop,val){
    var cDiv = this.children;
    for (var i = 0; i < cDiv.length; i++) {
      var div = cDiv[i];
      if (div.tagName.toUpperCase() == cName.toUpperCase()) {
          div.style[prop] = val;
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {      
      let urlSegment = location.pathname.split("/").pop();
      let urlExpload = urlSegment.split(/\_(?=[^\_]+$)/)      
      if(mapSrc.length > 0 && urlExpload[0].length > 0) {        
        let seatid = urlExpload[0]+(urlExpload[1] !== undefined ? '-'+urlExpload[1] : '');
        let seatdom = document.getElementById(seatid)
        if (seatdom) {
          seatdom.childrens('polygon','fill','tomato');
          seatdom.childrens('path','fill','tomato');
          seatdom.childrens('polyline','fill','tomato');
        }  
      }
    }, 1000);
  }, [selectedSeat, mapSrc, location])
  
  
  return (
    <div id={divid}>
      {mapSrc.length > 0 &&     
        <ReactSvgPanZoomLoader src={mapSrc} render= {(content) => (
          <ReactSVGPanZoom
              ref={Viewer}
              width={360} height={500}
              tool={tool} onChangeTool={setTool}
              value={value} onChangeValue={setValue}
              detectAutoPan={false}
              detectWheel={false}
              detectPinchGesture={false}
              toolbarProps={{position: POSITION_RIGHT}}
              miniatureProps={{position: 'none'}}
              onClick={event => {
                // console.log('click', event.originalEvent, event.originalEvent.target.parentElement.id)
                let seat = event.originalEvent.target.parentElement.id
                let seatid = seat.toLowerCase()
                seatid = seatid.replaceAll("-", "_"); // only for coxs bazar
                seatid = seatid.replaceAll("cox's bazar", "cox_s_bazar"); // only for coxs bazar
                // navigate(`/seat/${seatid}`)
              }}
            >
            <svg width={360} height={500}>
              {content}
            </svg>
          </ReactSVGPanZoom>
        )} />
      }
    </div>
  )
}

export default Map