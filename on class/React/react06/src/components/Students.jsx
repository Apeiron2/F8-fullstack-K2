import React, {
  startTransition,
  useCallback,
  useState,
  useTransition,
} from "react";
import students from "./db.json";
const Students = () => {
  const [keyWord, setKeyWord] = useState("");
  const [pending, startTransition] = useTransition();
  const handleChange = (e) => {
    startTransition(() => {
      setKeyWord(e.target.value);
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Từ khóa"
        style={{ padding: "10px" }}
        onChange={handleChange}
      />
      <h2 style={{ margin: "10px" }}>Danh sách sinh viên</h2>
      {pending && <h3>Loading...</h3>}
      <ul>
        {students.map(({ id, fullName }) => {
          const index = fullName.toLowerCase().indexOf(keyWord.toLowerCase());
          if (index !== -1) {
            return (
              <li key={id}>
                {fullName.slice(0, index)}
                <span style={{ background: "yellow" }}>
                  {fullName.slice(index, index + keyWord.length)}
                </span>
                {fullName.slice(index + keyWord.length)}
              </li>
            );
          }
          //   return <li key={id}>{fullName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Students;
