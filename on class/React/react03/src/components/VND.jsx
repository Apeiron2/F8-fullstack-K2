import React, { useState, useEffect } from "react";

export default function VND() {
  const [VND, setVND] = useState(0);

  const handleChange = (e) => {
    setVND(e.target.value);
  };
  useEffect(() => {
    document.querySelector(".dola").value = VND / 24000;
  }, [VND]);
  return (
    <div>
      VND{" "}
      <input
        type="number"
        value={VND}
        onChange={handleChange}
        className="VND"
      />
    </div>
  );
}
