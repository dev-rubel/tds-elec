import { Link } from "react-router-dom";

export default function RightTop({ item, parties, checkIfExceptionExist }) {

  const getPartieName = (name) => {
    let temp;
    let tname = name.replaceAll('_',' '); 
    if(name.length > 3 && tname.split(' ').length > 1) {
      let matches = tname.match(/\b(\w)/g); // ['J','S','O','N']
      let acronym = matches.join(''); // JSON
      temp = acronym.toUpperCase();
      return checkIfExceptionExist(temp)  
    }
    temp = name.substring(0,3).toUpperCase();
    return checkIfExceptionExist(temp)
  }


  return (    
    <>
      <div className="cell small-12 medium-6 offset-medium-2">
        <div className="card">
          <div className="card-section">
            <p className="seat-no hide">Seat no. {item.seat_no}</p>
            <p className="title">{item.name}</p>
            <div className="parti-list">
              <div className="grid-x grid-margin-x">
                {Object.keys(parties).length !== 0 &&
                  Object.entries(parties).map(([key, value]) => {
                    return (
                      <div className="cell small-6 medium-4" key={key}>
                        <p>{getPartieName(value)}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <p className="description hide">{item.short_des}</p>
            <div className="details">
              <Link to={`seat/${item.key}`} className="details-link">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
