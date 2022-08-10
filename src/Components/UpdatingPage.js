import React from "react";
import "../ComponentsCSS/UpdatingPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatingPage() {
  const [id, setID] = React.useState(null);
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [DueDate, setDueDate] = React.useState("");
  const [StartDate, setStartDate] = React.useState("");

  React.useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("TITLE"));
    setDescription(localStorage.getItem("DESCRPITION"));
    setDueDate(localStorage.getItem("DUE DATE"));
    setStartDate(localStorage.getItem("START DATE"));
  }, []);

  const notify = () => toast.success("Updated Successfully");

  function handleUpdate(event) {
    console.log(Title);
    event.preventDefault();
    axios.put(`https://62e10e64fa99731d75cca409.mockapi.io/Todo/${id}`, {
      Title,
      Description,
      DueDate,
      StartDate,
    });
    notify();
  }

  return (
    <div className="Update">
      <div className="TaskCardUpdate">
        <form onSubmit={handleUpdate}>
          <label>Title</label>
          <input
            className="input"
            type="text"
            name="TaskTitle"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <input
            className="input"
            type="text"
            name="TaskDescribe"
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <input type="date" name="TaskStartDate"/> */}
          <label>Due Date</label>
          <input
            className="input"
            type="date"
            name="DueDate"
            onChange={(e) => setDueDate(e.target.value)}
            value={DueDate}
          />
          <label>Start Date</label>
          <input
            className="input"
            type="date"
            name="StartDate"
            onChange={(e) => setStartDate(e.target.value)}
            value={StartDate}
          />
          <button onClick={handleUpdate} className="NoBtn">
            <Link
              to="/"
              className="btn-primary UpadteSubmit"
              // onClick={handleUpdate}
            >
              Update
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatingPage;
