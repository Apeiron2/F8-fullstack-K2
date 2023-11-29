import { FloatButton, DatePicker } from "antd";
import Button from "./(client)/components/Button";

export const metadata = {
  title: "Trang chủ",
};

const home = () => {
  return (
    <main>
      <h1>Hello F8</h1>
      <Button />
      <DatePicker />
    </main>
  );
};

export default home;
