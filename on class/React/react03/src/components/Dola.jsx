import React, { useEffect, useState } from "react";

export default function Dola() {
  const [dola, setDola] = useState(0);

  const handleChange = (e) => {
    setDola(e.target.value);
  };
  useEffect(() => {
    document.querySelector(".VND").value = dola * 24000;
  }, [dola]);
  return (
    <div>
      ${" "}
      <input
        type="number"
        value={dola}
        onChange={handleChange}
        className="dola"
      />
    </div>
  );
}
