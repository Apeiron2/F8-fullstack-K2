import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "../core/hook";

const Profile = () => {
  const dispatch = useDispatch();
  const { emailjsService } = useSelector();
  const { serviceID, tempalteID, publicKey } = emailjsService;
  const { logout, user } = useAuth0();
  const { picture, name, nickname, email } = user;
  const [_email, setEmail] = useState(email);
  const form = useRef();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "loading",
      payload: true,
    });
    emailjs
      .sendForm(
        serviceID ? serviceID : "service_7hk7car",
        tempalteID ? tempalteID : "template_0t1lazb",
        e.target,
        publicKey ? publicKey : "E2lR4MIOs9Ki2ha4v"
      )
      .then((result) => {
        alert(result.text);
      })
      .catch((err) => {
        alert(err.text);
      });
    form.current.reset();
    dispatch({
      type: "loading",
      payload: false,
    });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center mx-auto round border p-3 gap-3"
      style={{ width: "400px" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center rounded border p-3 gap-3">
        <h1>Xin chào!</h1>
        <div className="d-flex align-items-center gap-4">
          <img
            src={picture}
            alt="Avatar"
            className="rounded-circle border border-info"
            style={{ maxWidth: "60px", height: "100%" }}
          />
          <div className="name">
            <h3 className="text-center">{name}</h3>
            {nickname ? (
              <h5 className="text-muted">{`(${nickname})`}</h5>
            ) : null}
          </div>
        </div>
        <form
          className="d-flex flex-column gap-3"
          onSubmit={handleSubmit}
          ref={form}
        >
          <input
            type="text"
            className="d-none"
            name="from_name"
            value={name}
            onChange={() => {}}
          />
          <div>
            <label className="form-label">Email của bạn:</label>
            <input
              type="email"
              className="form-control p-3"
              name="to_email"
              value={_email ? _email : ""}
              placeholder={_email ? "" : "example@gmail.com"}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="form-label">Nội dung</label>
            <textarea
              name="message"
              cols="30"
              rows="5"
              className="form-control rounded border p-3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Gửi
          </button>
        </form>
      </div>
      <button onClick={logout} className="btn btn-danger">
        Đăng xuất
      </button>
    </div>
  );
};

export default Profile;
