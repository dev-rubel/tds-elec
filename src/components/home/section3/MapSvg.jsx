import bangladeshMap from "/bd-svg/main.svg";
export default function MapSvg() {
  return (
    <>
      <img 
        src={bangladeshMap} 
        className="bangladesh-map" 
        alt="Bangladesh Map" 
        style={{
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "630px",
          width: "100%",
        }} 
      />
    </>
  );
}
