import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
function MyComponent() {
  const [data, setData] = useState(5600);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://website-counter-y1s1.onrender.com/api/v1/IncrementCounter")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data.counter);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <BeatLoader />
      </div>
    );
  }

  return (
    <div className="text-7xl font-bold">
      <h1>
        {data % 1 === 0 ? data.toLocaleString() : (data + 0.5).toLocaleString()}
      </h1>
    </div>
  );
}

export default MyComponent;
