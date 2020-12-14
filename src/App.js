import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const url = 'https://classmarker-app.herokuapp.com/mockData/'

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  },[]);

  const renderTable = () => {
    return data.map(user => {
      if (user.id >= page+1 && page >= 0 && user.id <= page + 20) {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{user.job}</td>
            <td>{user.city}</td>
            <td>{user.phone}</td>
            <td>{user["Fav Movie"]}</td>
          </tr>
        )
      }
    });
  };

  const previousValue = () => {
    if (page === 0) {
      let previous = document.getElementsByClassName("previous");
      previous.disabled = true;
    } else {
      setPage(page - 20);
    }
  };

  const nextValue = () => {
    if (page >= 180) {
      let next = document.getElementsByClassName("next");
      next.disabled = true;
    } else {
      setPage(page + 20);
    }
  };

  const numberEvent = (event) => {
    if(event.target.id === "1") {
      setPage(0);
    } else if(event.target.id === "2") {
      setPage(20);
    } else if (event.target.id === "3") {
      setPage(40);
    } else if (event.target.id === "4") {
      setPage(60);
    } else if (event.target.id === "5") {
      setPage(80);
    } else if (event.target.id === "6") {
      setPage(100);
    } else if (event.target.id === "7") {
      setPage(120);
    } else if (event.target.id === "8") {
      setPage(140);
    } else if (event.target.id === "9") {
      setPage(160);
    } else if (event.target.id === "10") {
      setPage(180);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="display-3 text-center">API Table</h1>
        <div className="d-flex justify-content-center m-3">


          <button className="highlight previous btn btn-lg btn-info rounded-circle mr-2" onClick={previousValue}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>

          <div className="btn-group" role="group">
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="1">1</button>
            <button type="button" className=" highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="2">2</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="3">3</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="4">4</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="5">5</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="6">6</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="7">7</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="8">8</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="9">9</button>
            <button type="button" className="highlight next btn btn-lg btn-info rounded mr-2" onClick={numberEvent} id="10">10</button>
          </div>

          <button className="highlight next btn btn-lg btn-info rounded-circle" onClick={nextValue}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>

        </div>


        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Job</th>
              <th>City</th>
              <th>Phone</th>
              <th>Favourite Movie</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  )
}

export default App;
