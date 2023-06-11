import React from "react";
import("../styles/contactdealer.css");

function ContactDealer() {
  return (
    <div>
      <form style={{ width: 600, marginLeft: 300, marginTop: 100 }}>
        <div class="mb-3">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput"> Email address :</label>
          </div>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
          <br />
          <br />

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput"> Model name you interested in :</label>
          </div>

          <br />
          <div class="input-group">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
              ></textarea>
              <label for="floatingTextarea2">Describe your options :</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary form-submit-button "
          style={{ backgroundColor: "#d61a3c", border: "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactDealer;
