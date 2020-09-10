import React, { useState } from "react";
import "../components/Form/Form.css";
import Calendar from "../components/Calendar/Calendar";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
// import {bookingReducer} from "../reducers/Bookings"
import API from "../utils/API";

// DISPATCH
// export const handleSubmit = (e) => {
//   e.preventDefault();
//   const action = {
//     type: "NEW_BOOKING",
//     payload: {
//       day: this.day.current.value,
//       guest: this.guest.current.value,
//       menu: this.menu.current.value,
//       bookingDate: Date.now(),
//     },
//   };
//   const newState = bookingReducer(this.state, action);
//   this.setState(newState);
// };

// const [state, setState] = useState({});

function Booking() {
  const [form, setForm] = useState({});
  const [booking, setBooking] = useState({});

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);

    if (!form.date || !form.menu) {
      alert(`All fields are required.`);
      return;
    }
    console.log({ form });

    // API.saveBooking({
    //   day: form.date,
    //   guest: form.guest,
    //   characters: form.character,
    //   menu: form.menu,
    //   note: form.note,
    // })
    //   .then((res) => {
    //     console.log(res.data._id);
    //     loadBookings(res.data._id)
    //     window.location.href = "/bookings/" + res.data._id;

    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function loadBookings() {
    API.getBooking()
      .then((res) => {
        setBooking(res.data);
        // console.log({ booking });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="container box" id="bookingForm">
      <Row>
        <Col>
          <Form>
            <h1>Book With Us</h1>
            <p class="text-center w-responsive mx-auto mb-5">
              Please answer the questions below to book!
            </p>
            <FormGroup>
              <Label for="Date">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="MM/DD/YYYY"
                onChange={handleForm}
                valid={form.date}
              />
              <Label for="menuSelect">Menu Style</Label>
              <Input
                type="select"
                name="menu"
                id="menuSelect"
                onChange={handleForm}
              >
                <option>Menu 1</option>
                <option>Menu 2</option>
                <option>Menu 3</option>
              </Input>
              <Label for="characterSelect">Character Option</Label>
              <Input
                type="select"
                name="characters"
                id="characterSelect"
                onChange={handleForm}
              >
                <option>Character 1</option>
                <option>Character 2</option>
                <option>Character 3</option>
                <option>Character 3</option>
                <option>Character 3</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="guestSelect">Number of Guest</Label>
              <Input
                type="select"
                name="guest"
                id="guestSelect"
                onChange={handleForm}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="notes">Notes and food restrictions</Label>
              <Input
                type="textarea"
                name="note"
                id="notes"
                onChange={handleForm}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>Book Party!</Button>
          </Form>
        </Col>
        <Col>
          <Calendar events={[]} />
        </Col>
      </Row>
    </div>
  );
}

export default Booking;
