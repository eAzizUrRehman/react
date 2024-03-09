import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000");

  const colors = [
    {
      id: 1,
      name: "Black",
      hex: "#000000",
    },
    {
      id: 2,
      name: "Red",
      hex: "#8b0000",
    },
    {
      id: 3,
      name: "Green",
      hex: "#004d00",
    },
    {
      id: 4,
      name: "Blue",
      hex: "#00004d",
    },
    {
      id: 5,
      name: "Yellow",
      hex: "#666600",
    },
    {
      id: 6,
      name: "Orange",
      hex: "#804c00",
    },
    {
      id: 7,
      name: "Purple",
      hex: "#330033",
    },
    {
      id: 8,
      name: "Cyan",
      hex: "#006666",
    },
    {
      id: 9,
      name: "Magenta",
      hex: "#660066",
    },
    {
      id: 10,
      name: "Gray",
      hex: "#bfbfbf",
    },
  ];

  return (
    <div
      className="h-screen w-screen flex flex-col justify-end py-10"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex flex-wrap justify-center bg-white gap-5 items-center py-5 px-10">
        {colors.map((color) => (
          <button
            key={color.id}
            className="  shadow-lg border-none outline-none text-white px-4 py-2 rounded-lg"
            style={{
              backgroundColor: color.hex,
            }}
            onClick={() => setColor(color.hex)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
