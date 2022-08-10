import React from "react";
import "../ComponentsCSS/TodoList.css";
import axios from "axios";
import remove from "../remove.png";
import edit from "../edit.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

function Todolist() {
  const [loading, setLoading] = React.useState(true);
  const [TodoData, setTodoData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://62e10e64fa99731d75cca409.mockapi.io/Todo`)
      .then((response) => {
        setLoading(false);
        setTodoData(response.data);
      });
  });

  const showDeleteToast = () => toast.success("Item Deleted");

  function SendData(Data) {
    let { id, Title, Description, DueDate, StartDate } = Data;
    console.log("StartDate");
    console.log(Data);
    localStorage.setItem("ID", id);
    Title
      ? localStorage.setItem("TITLE", Title)
      : localStorage.setItem("TITLE", "None");
    Description
      ? localStorage.setItem("DESCRPITION", Description)
      : localStorage.setItem("DESCRPITION", "None");
    localStorage.setItem("DUE DATE", DueDate);
    localStorage.setItem("START DATE", StartDate);
  }

  const getData = () => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setTodoData(getData.data);
      });
    setLoading(false);
  };

  // function Load() {
  //   setLoading(false);
  // }
  function DeleteData(id) {
    debugger;
    axios.delete(`https://62e10e64fa99731d75cca409.mockapi.io/Todo/${id}`);
    setLoading(true);
    showDeleteToast();
    getData();
  }
  console.log(TodoData.length);
  return (
    <div className="Lander">
      <div className={loading ? "Loading" : "Done"}>
        <Triangle className="LoadingSpinner" />
      </div>
      <div className={TodoData.length > 12 ? "ItemsBodyPerc" : "ItemsBodyvh"}>
        <div className="container">
          <div className="row">
            {TodoData.map((data) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 text-center ItemTable"
                  key={data.id}
                >
                  <div
                    className={
                      "card " +
                      (data.DueDate > data.StartDate ? "Boxes" : "Expired")
                    }
                  >
                    <h5 className="Deadliner">
                      DueDate: {data.DueDate ? data.DueDate : "None"}
                    </h5>
                    <h3 className="TodoTitle">
                      Title: {data.Title ? data.Title : "None"}
                    </h3>
                    <p>
                      Description:
                      {data.Description ? data.Description : "None"}
                    </p>
                    <h6>
                      StartDate: {data.StartDate ? data.StartDate : "None"}
                    </h6>
                  </div>
                  <div className="Icons">
                    <Link
                      to="/"
                      className="RemoveIcon"
                      onClick={() => DeleteData(data.id)}
                    >
                      <img className="RemoveIconIcon" src={remove} alt="" />
                    </Link>
                    <Link
                      to="/Update"
                      onClick={() => SendData(data)}
                      className="UpdateIcon"
                    >
                      <img className="UpdateIcon" src={edit} alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="AddBtn">
          <Link to="/Add" className="additem">
            Add an item
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
