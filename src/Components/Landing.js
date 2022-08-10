import React, { useState } from "react";
import "../ComponentsCSS/App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

export default function Landing() {
  var StartDate = new Date();
  var dd = String(StartDate.getDate()).padStart(2, "0");
  var mm = String(StartDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = StartDate.getFullYear();
  StartDate = yyyy + "-" + mm + "-" + dd;
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [DueDate, setDueDate] = React.useState("");

  function handleSubmit(event) {
    // event.preventDefault();
    console.log(StartDate);
    axios.post(`https://62e10e64fa99731d75cca409.mockapi.io/Todo`, {
      Title,
      Description,
      DueDate,
      StartDate,
    });
    notify();
  }
  const notify = () => toast.success("Task is Added");

  return (
    <div className="Landing">
      <div className="container-fluid m-auto">
        <h3 className="text-center">Enter a task to be scheduled</h3>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form>
              <label>Title</label>
              <input
                className="inputter"
                type="text"
                name="TaskTitle"
                placeholder="Title"
                // onChange={ChangeState}
                onChange={(e) => setTitle(e.target.value)}
                // value={Item.TaskTitle}
              />
              <label>Description</label>
              <input
                className="inputter"
                type="comment"
                name="TaskDescribe"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Due Date</label>
              <input
                className="inputter"
                type="date"
                name="DueDate"
                placeholder="Hello"
                onChange={(e) => setDueDate(e.target.value)}
              />

              <Link
                to="/"
                onClick={handleSubmit}
                className="inputter btn-primary Submit mt-4"
              >
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// <div className="Liner" />
// <h3>Enter a task to be scheduled</h3>
// <div className="ScheduleCard">
//   <form onSubmit={handleSubmit}>
//     <input
//       className="inputter"
//       type="text"
//       name="TaskTitleSch"
//       placeholder="Title"
//       // onChange={ChangeState}
//       onChange={(e) => setTitleSch(e.target.value)}
//       // value={Item.TaskTitle}
//     />
//     <input
//       className="inputter"
//       type="comment"
//       name="TaskDescribe"
//       placeholder="Description"
//       // onChange={ChangeState}
//       onChange={(e) => setDescriptionSch(e.target.value)}
//       // value={Item.TaskDescribe}
//     />
//     {/* <input type="date" name="TaskStartDate"/> */}
//     <input
//       className="inputter"
//       type="date"
//       name="DueDate"
//       // onChange={ChangeState}
//       onChange={(e) => setDateSch(e.target.value)}
//     />
//     <input
//       className="inputter"
//       type="time"
//       name="StartTime"
//       // onChange={ChangeState}
//       onChange={(e) => setStartTime(e.target.value)}
//     />
//     <input
//       className="inputter"
//       type="time"
//       name="EndTime"
//       // onChange={ChangeState}
//       onChange={(e) => setEndTime(e.target.value)}
//     />

//     <button className="inputter">Submit!!</button>
//   </form>
// </div>
