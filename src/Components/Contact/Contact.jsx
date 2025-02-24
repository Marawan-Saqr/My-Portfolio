import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from '../../animations/contact.json';
import "./Contact.css";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  // Component States
  const [state, handleSubmit] = useForm("xgvozqey");

  return (
    <div className="contact mt-5">
      <h2>
        <i class="fa-regular fa-envelope"></i> Contact <span>Me</span>
      </h2>
      <Row className="align-items-center">
        <Col lg={7}>
          <p>Contact Me for any idea you want</p>
          <div class="form-container">
            <form class="form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required="" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div class="form-group">
                <label for="textarea">How Can I Help You?</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  required=""
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                class="form-submit-btn"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
              {state.succeeded && (
                <div className="message-after-send d-flex align-items-center">
                  <Lottie
                    style={{ height: "55px" }}
                    animationData={doneAnimation}
                  />
                  <h5 style={{ margin: "0px" }} className="d-flex">
                    Thanks I Will Be In Touch Soon
                  </h5>
                </div>
              )}
            </form>
          </div>
        </Col>
        <Col lg={5}>
          <Lottie animationData={contactAnimation} />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
