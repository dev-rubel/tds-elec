export default function TopTotal({ item }) {
  return (
    <div
      className="cell medium-3 large-3 small-6"
    >
      <div className="card">
        <div className="card-section section1-top">
          <section className="grid-x">
            <div className="cell medium-4 icon">
              <p>{item.icon}</p>
            </div>
            <div className="cell medium-8 text">
              <p>{item.title}</p>
              <p>{item.count}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
