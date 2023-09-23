import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/settings";
import Header from "../Header";
import { LoginContext } from "../../Context/Settings/context";
import { When } from "react-if";

import "./form.scss";
export default function Form() {
  const state = useContext(SettingsContext);
  const Login = useContext(LoginContext);
  function HandleSubmit(e) {
    e.preventDefault();

    state.setItems(e.target.tasks.value);

    if (e.target.elements.complete.checked) {
      state.setCompleted(true);
    }
    else {
      state.setCompleted(false);
    }

    // e.target.reset();
  }

  return (
    <div className="settingForm">
      <When condition={Login.loggedIn}>
        <div className="paePage">
          <form onSubmit={HandleSubmit}>
            <label>Task per page: </label>
            <input type="text" name="tasks" defaultValue={state.items} />
            <label>Show Completed: </label>
            <input type="checkbox" name="complete" id="myCheckbox" defaultChecked={state.complete ? true : false}/>
            <input type="submit" />
          </form>
        </div>

        <div className="setSetting">
          <h2>Updated Settings</h2>
          <p>complete: {state.complete.toString()}</p>
          <p>items per page: {state.items}</p>
        </div>
      </When>
    </div>
  );
}
