import { useRef, useState, useEffect } from 'react';
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, POSITION_RIGHT, POSITION_BOTTOM } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader } from 'react-svg-pan-zoom-loader'

export default function MapSvg() {
  const Viewer = useRef(null);
  const [tool, setTool] = useState(TOOL_NONE)
  const [value, setValue] = useState(INITIAL_VALUE)

  useEffect(() => {
    Viewer.current.fitToViewer();
  }, []);

  return (
    <div>

      <ReactSvgPanZoomLoader src="/bd-svg/main.svg" render={(content) => (
        <ReactSVGPanZoom
          ref={Viewer}
          width={500} height={500}
          tool={tool} onChangeTool={setTool}
          value={value} onChangeValue={setValue}
          detectAutoPan={false}
          toolbarProps={{ position: POSITION_RIGHT }}
          onClick={event => console.log('click', event.originalEvent, event.originalEvent.target.parentElement.id)}
        >
          <svg width={500} height={500} >
            {content}
          </svg>
        </ReactSVGPanZoom>
      )} />
    </div>
  );
}
