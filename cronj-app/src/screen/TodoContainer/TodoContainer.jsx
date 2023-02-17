import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import TotalCart from "../../components/totalcart/TotalCart";
import "./todocontainer.css";
import {
  IoIosAddCircle,
  IoIosCloseCircle,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import {
  getAlltodo,
  completetodo,
  filtertodo,
  deleteAction,
  createAction,
  updateAction,
} from "../../redux/actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "../../components/createtodo/CreateTodo";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const { todos, dashboard } = useSelector((state) => state.Todoreducer);
  const [isSearch, setisSearch] = useState("");
  const [istodotext, setistodotext] = useState("");
  const [isUpdateid, setisUpdateid] = useState("");
  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel(!showModel);
    setistodotext("");
  };
  
  const clearsearch = () => dispatch(getAlltodo());
  useEffect(() => {
    dispatch(getAlltodo());
  }, []);

  const completetodos = (data) => {
    dispatch(completetodo({ TODO_STATUS: true, TODO_ID: data.TODO_ID }));
    dispatch(getAlltodo());
    dispatch(getAlltodo());
  };
  const deletetodo = (data) => {
    dispatch(deleteAction({ TODO_ID: data.TODO_ID }));
    dispatch(getAlltodo());
    dispatch(getAlltodo());
  };
  const searchtodo = () => {
    if (isSearch) {
      dispatch(filtertodo({ TODO_TASK: isSearch }));
    }
  };

  const createTodo = () => {
    if (istodotext == "") {
      alert("please enter your todo");
    } else if (isUpdateid !== "") {
      dispatch(updateAction({ TODO_TASK: istodotext, TODO_ID: isUpdateid }));
      dispatch(getAlltodo());
      handleModel();
    } else {
      dispatch(createAction({ TODO_TASK: istodotext }));
      dispatch(getAlltodo());
      handleModel();
    }
  };

  return (
    <>
      <Container fluid className="containermain">
        <div
          className="adminActions"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          onClick={handleModel}
        >
          <input type="checkbox" name="adminToggle" className="adminToggle" />
          <a className="adminButton" href="#!">
            <h5>
              <IoIosAddCircle style={{ fontSize: "55px" }} />
            </h5>
          </a>
        </div>

        <Row>
          <Col lg={3} className="totalcontainer">
            <TotalCart todos={todos.length} title="total todos" />
            <TotalCart
              todos={dashboard?.completetodo}
              title="total todos completed "
            />
            <TotalCart
              todos={dashboard?.pandingtodo}
              title="total panding todos "
            />
            <TotalCart
              todos={dashboard?.deltdtodoss}
              title="total deleted todos"
            />
          </Col>

          <Col lg={9} className="mainsection">
            <div className="vr changevr"></div>
            <div className="contanthead">
              <Card body className="cbd">
                <InputGroup
                  className="ipsearch mb-3 "
                  style={{ width: "55vw" }}
                >
                  <Form.Control
                    placeholder="search your todo"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      setisSearch(e.target.value);
                    }}
                  />
                  <Button
                    variant="outline-light"
                    style={{ backgroundColor: "#9088D4" }}
                    id="button-addon2"
                    onClick={searchtodo}
                  >
                    search
                  </Button>

                  <Button
                    variant="outline-light"
                    style={{ backgroundColor: "#9088D4" }}
                    id="button-addon2"
                    onClick={clearsearch}
                  >
                    Clear Search
                  </Button>
                </InputGroup>
              </Card>
              <div className="todolist">
                {todos.length > 0 &&
                  todos.map((data, index) => (
                    <Card
                      key={index}
                      body
                      className=" dct"
                      style={{ marginBottom: "10px" }}
                    >
                      <div className="todoflex">
                        <div className="todo">
                          <h5>{data.TODO_TASK}</h5>
                        </div>
                        {data.TODO_STATUS ? (
                          <h6 className="text-success">completed</h6>
                        ) : (
                          <div className="todoicon">
                            <IoIosAddCircle
                              className="icon successicon"
                              onClick={() => {
                                handleModel();
                                setisUpdateid(data.TODO_ID);
                                setistodotext(data.TODO_TASK);
                              }}
                            />
                            <IoIosCloseCircle
                              className="icon deleteicon"
                              onClick={() => deletetodo(data)}
                            />
                            <IoIosCheckmarkCircle
                              className="icon completeicon"
                              onClick={() => completetodos(data)}
                            />
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <CreateTodo
        showModel={showModel}
        handleModel={handleModel}
        istodotext={istodotext}
        setistodotext={setistodotext}
        createTodo={createTodo}
      />
    </>
  );
};

export default TodoContainer;
