import { Link } from "react-router-dom";

export default function RightTop({ item, perties }) {
  return (
    <>
      <div className="cell small-12 medium-6 offset-medium-2">
        <div className="card">
          <div className="card-section">
            <p className="seat-no">Seat no. {item.seat_no}</p>
            <p className="title">{item.name}</p>
            <div className="parti-list">
              <div className="grid-x grid-margin-x">
                {Object.keys(perties).length !== 0 &&
                  Object.entries(perties).map(([key, value]) => {
                    return (
                      <div className="cell small-6 medium-auto" key={key}>
                        <p>{value}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <p className="description">{item.short_des}</p>
            <div className="details">
              <Link to={`seat/1`} className="details-link">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
