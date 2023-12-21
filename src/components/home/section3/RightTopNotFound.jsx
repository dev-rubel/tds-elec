export default function RightTopNotFound({ selectedDistrict }) {

  return (
    <>
      {selectedDistrict.data !== undefined &&
        selectedDistrict.data.seats.length === 0 && (
          <div className="cell small-12 medium-12 offset-medium-2 right-top-not-found">
            <div className="card">
              <div className="card-section">
                <p>No Data Found</p>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
