import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.getNews} style={{ marginBottom: "2rem" }}>
      <input className="form__input" type="text" name="newsName" />
      <button className="form__button">Search</button>
    </form>
  );
}
