import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const add = () => {
    setMovies([...movies, movieToadd]);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movieToadd, setmovieToadd] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });

  return (
    <div>
      <>
        <Button
          variant="dark"
          onClick={handleShow}
          style={{ marginTop: "30px" }}
        >
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="Title"
                  placeholder="Enter Title"
                  onChange={(e) =>
                    setmovieToadd({ ...movieToadd, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="Image Url"
                  placeholder="Image Url"
                  onChange={(e) =>
                    setmovieToadd({ ...movieToadd, posterurl: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="description"
                  onChange={(e) =>
                    setmovieToadd({
                      ...movieToadd,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type=""
                  placeholder="5"
                  onChange={(e) =>
                    setmovieToadd({ ...movieToadd, rating: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={add}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
