import "./Achievements.css";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="achievements mt-5 mb-5">
      <h2 className="mb-5">
        <i style={{ color: "#FFD700" }} className="fa-solid fa-trophy"></i> Achieve<span>ments</span>
      </h2>
      <Row>
        {[
          { icon: "fa-solid fa-code", count: "650", text: "Problem Solving" },
          { icon: "fa-brands fa-html5", count: "45", text: "Html & Css Projects" },
          { icon: "fa-brands fa-square-js", count: "17", text: "Javascript Projects" },
          { icon: "fa-brands fa-react", count: "22", text: "React Projects" },
        ].map((achievement, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index}>
            <motion.div
              className="box text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <i className={achievement.icon}></i>
              <h5>
                <span>{achievement.count}</span> {achievement.text}
              </h5>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Achievements;