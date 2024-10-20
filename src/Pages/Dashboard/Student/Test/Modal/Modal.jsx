import React from "react";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { logOutAction } from "../../../../../redux/actions";

export default ({ text, setLogOutModal, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut_action = () => dispatch(logOutAction());
  const logOut = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACK_END}/api/signOut`,
        withCredentials: true,
      });
      if (!data.user) {
        logOut_action();
        history.replace("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="modal">
      <div className="modal-header">
        <span className="warning">Warning</span>
      </div>
      <div className="modal-content">
        {parse(text)}
        <section>
          <section className="buttonSection">
            <button onClick={() => logOut()}>Logout</button>
            <button onClick={() => setLogOutModal(false)}>Cancel</button>
          </section>
        </section>
      </div>
    </section>
  );
};
