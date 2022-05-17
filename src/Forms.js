import "./App.css"
import { ThemeProvider } from 'react-bootstrap';
 import React from 'react'
 import { Form ,Row,Col,InputGroup,Button,Modal } from 'react-bootstrap';
 import {useState} from 'react'



 function Forms() {
    const [title, setTitle] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [city, setCity] = useState('')
    const [etat, setEtat] = useState('')
    const [zip, setZip] = useState('')
    const [check, setCheck] = useState('')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
    

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      console.log(title);
      console.log(lastname);
      console.log(username)
      console.log(city);
      console.log(etat);
      console.log(zip);
      console.log(check);
      setValidated(true);
      event.preventDefault()
    };

    const modal=(    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>)
  
    return (
      <>
     {modal}
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{widht:'300px' , resize:'both'}} id='mod' >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
            style={{ resize:'both'}} 
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              onChange={event => setTitle(event.target.value)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02" >
            <Form.Label>Last name</Form.Label>
            <Form.Control
            style={{ resize:'both'}} 
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              onChange={event => setLastname(event.target.value)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
              style={{ resize:'both'}} 
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                onChange={event => setUsername(event.target.value)} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required  onChange={event => setCity(event.target.value)} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required     style={{ resize:'both'}}  onChange={event => setEtat(event.target.value)} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid"  style={{ resize:'both'}} onChange={event => setZip(event.target.value)}  >
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
          style={{ resize:'both'}} 
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            onChange={event => setCheck(event.target.value)} 

          />
        </Form.Group>
        <Button type="submit"    onClick={handleShow}>Submit form</Button>
      </Form>
      
      </>
    );
  }
 
 export default Forms



