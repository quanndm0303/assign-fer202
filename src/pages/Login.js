import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { Form, Button, Container, Card, Image } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("ĐÀ NẴNG");
  const { login } = UseAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:9999/users?username=${username}&password=${password}&campus=${campus}`
      );
      const user = response.data[0];
      if (user) {
        login(user.role);
        navigate("/management");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <Card className="shadow">
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <Image
              src="https://btec.fpt.edu.vn/wp-content/uploads/2019/04/Logo-FE.png"
              alt="FPT Education"
              height="50"
              fluid
            />
            <h5 className="mt-2">The social constructive learning tool</h5>
          </div>

          {/* <div className="d-flex justify-content-between mb-3">
            <Button variant="outline-secondary" size="sm">
              Sign in with Google
            </Button>
            <Button variant="outline-secondary" size="sm">
              Sign in FEID
            </Button>
          </div> */}

          <h6 className="text-center mb-4">
            Select a campus before sign in to the system with type username
          </h6>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicCampus">
              <Form.Select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                required
              >
                <option value="dn">ĐÀ NẴNG</option>
                <option value="hl">HÀ NỘI</option>
                <option value="qn">QUY NHƠN</option>
                <option value="ct">CẦN THƠ</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{ paddingLeft: "30px" }}
                />
                <FaUser
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    color: "#aaa",
                  }}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="position-relative">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingLeft: "30px" }}
                />
                <FaLock
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    color: "#aaa",
                  }}
                />
              </div>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
