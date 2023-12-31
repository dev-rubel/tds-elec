import {useRef, useState, useEffect, useContext} from 'react';
import {INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, POSITION_RIGHT, POSITION_BOTTOM} from 'react-svg-pan-zoom';
import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

function Map({selectedSeat, mapSrc}) {
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
      if(mapSrc.length > 0 && Object.keys(selectedSeat).length > 0) {
        let seatid = selectedSeat.name.toLowerCase()
        seatid = seatid.replaceAll("cox's bazar", "cox_s_bazar"); // only for coxs bazar
        let seatdom = document.getElementById(seatid)
        if (seatdom) {
          seatdom.childrens('polygon','fill','tomato');
          seatdom.childrens('path','fill','tomato');
          seatdom.childrens('polyline','fill','tomato');
        }  
      }
    }, 1000);
  }, [selectedSeat, mapSrc])
  
  
  return (
    <>
      {mapSrc.length > 0 &&     
        <ReactSvgPanZoomLoader src={mapSrc} render= {(content) => (
          <ReactSVGPanZoom
              ref={Viewer}
              width={360} height={500}
              tool={tool} onChangeTool={setTool}
              value={value} onChangeValue={setValue}
              detectAutoPan={false}
              toolbarProps={{position: POSITION_RIGHT}}
              onClick={event => console.log('click', event.originalEvent, event.originalEvent.target.parentElement.id)}
            >
            <svg width={360} height={500}>
              {content}
            </svg>
          </ReactSVGPanZoom>
        )} />
      }
    </>
  )
}

export default Map