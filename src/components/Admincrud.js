import { React, useState } from "react";

const Admincrud = () => {
  const [name, setname] = useState("");
  const [link, setlink] = useState("");
  const handleadd = async () => {
    const response = await fetch("http://localhost:5000/api/meetinglinks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        src: link,
      }),
    });
    const json = await response.json();
    console.log(json)
    alert("added");
  };
  const handledelete = async () => {
    const response = await fetch("http://localhost:5000/api/meetinglinks/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        src: link,
      }),
    });
    console.log(response);
    alert("deleted");
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setname(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Please enter name and source of the meeting
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Link
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setlink(e.target.value)}
          />
        </div>
        <div className="flex">
          <button type="button" className="btn btn-primary text-black" onClick={handleadd}>
            ADD
          </button>
          <button
            type="button"
            className="btn btn-primary text-black"
            onClick={handledelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admincrud;
