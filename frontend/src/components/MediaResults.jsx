export default function MediaResults({ results }) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {results.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
  