/* import { Link } from 'react-router-dom'; */
import React, { useEffect, useState } from 'react';
import './index.css';
import { BsBrightnessHighFill, BsFillCircleFill, BsPersonBoundingBox } from "react-icons/bs";
import { AiOutlineStar, AiOutlineCalendar, AiOutlineCheckCircle, AiOutlineUnorderedList, AiOutlinePlus } from "react-icons/ai";
import { GiInfinity } from "react-icons/gi";
import { BiUser, BiListPlus, BiSearchAlt2, BiEdit } from "react-icons/bi";
import { RiMailOpenLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";
import CreateTask from '../modals/createTask';
import EditTask from '../modals/EditTask';

function Index() {
  const [modal, setModal] = useState(false);
  const [modals, setModals] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")

    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }

  }, [])

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
  }
  const toggles = () => {
    setModals(!modals);
  }

  const editdetails =(data) => {
    console.log(data);
    localStorage.setItem("details", JSON.stringify(data)) 
    setModals(true)
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setModal(false)
    setTaskList(tempList)
  }

  const updateTask = () => {
    updateListArray()
  }

  const handleDelete = () => {
    deleteTask()
  }


  return (
    <div className="App">
      <html>
        <head>
          <title>Dev-Academy</title>
          <meta charSet="UTF-8" />
          <meta name="Description" content="Full stack development" />
          <meta name="author" content="Ngoako Masekela" />
          <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS" />
          <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
          <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
        </head>
        <body>
          <div className='container'>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md flex-md-nowrap p-0">

              <div className='d-md-flex'>
                <p className="navbar-brand col-sm-4 col-md-3 mr-0"><span className='icon'><BsFillCircleFill color='pink' size={40} /></span><span className='initials'>NM</span></p>
                <div>
                  <h5 className='name'>Ngoako Masekela</h5><br />
                  <h6 className="text-small text-muted position">Full Stack developer</h6>
                </div>
              </div>

              <span className='search'><BiSearchAlt2 size={30} /></span><input className="form-control form-control-dark" type="text" />

              <button className="btn btn-secondary d-flex text-nowrap" onClick={() => setModal(true)}><span className='icon adding'><AiOutlinePlus /></span><small className="nav-link addingtask">Add a Task</small></button>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu"><span className="navbar-toggler-icon"></span></button>
            </nav>

            <div className='row'>
              <nav className='col-md-3 d-none d-md-block bg-light sidebar'>
                <p className="navbar-brand col-sm-4 col-md-4 mr-0"><span className='icon'><BsFillCircleFill color='pink' /></span><span className='icon'><BsFillCircleFill color='pink' /></span><span className='icon'><BsFillCircleFill color='pink' /></span></p>
                <div className='sidebar-sticky'>
                  <ul className='nav flex-column'>
                    <li className='nav-item'>
                      <p className='nav-link active'><span className='icon'><BsBrightnessHighFill color='gold' /></span>My Day</p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link '><span className='icon'><AiOutlineStar color='blue' /></span>Important</p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link sidebar-heading d-flex'><span className='icon'><AiOutlineCalendar color='purple' /></span>Planned<span className='numbers'>4</span></p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link sidebar-heading d-flex'><span className='icon'><GiInfinity color='blue' /></span>All<span className='numberss'>5</span></p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link '><span className='icon'><AiOutlineCheckCircle color='green' /></span>Completed</p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link '><span className='icon'><BiUser color='red' /></span>Assigned to me</p>
                    </li>
                    <li className='nav-item'>
                      <p className='nav-link sidebar-heading d-flex'><span className='icon'><RiMailOpenLine color='darkgreen' /></span>Tasks<span className='numbersss'>1</span></p>
                    </li>
                    <hr className='line'></hr>
                    <li className='nav-item'>
                      <p className='nav-link sidebar-heading d-flex'><span className='icon'><BsPersonBoundingBox color='blue' /></span>Development</p>
                      <div>
                        <p className='title'><span className='icon'><AiOutlineUnorderedList color='maroon' /></span>Work</p>
                      </div>
                    </li>
                  </ul>
                  <div className='footbot'><span className='icon'><AiOutlinePlus color='red' /></span>Tasks<span className='lasticon'><BiListPlus color='green' /></span></div>
                </div>
              </nav>

              <main role="main" className="col-md-9 ml-sm-auto col-lg-9 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 className="h2">Work</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                      <button className="btn btn-sm btn-outline-secondary mybuttons">Share</button>
                      <button className="btn btn-sm btn-outline-secondary mybuttons">Export</button>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-sm">
                    <tbody>
                      {taskList.map((obj, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <div className='d-md-flex'>
                                <p className="navbar-brand col-sm-4 col-md-3 mr-0"><span className='icon'><BsFillCircleFill color='pink' size={25} /></span></p>
                                <div>
                                  <h5 className='name'>{obj.Activity}</h5><br />
                                  <h6 className="text-small positions"><span><AiOutlineCalendar color='maroon' /></span>{obj.StartDate}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p><span><GoPrimitiveDot /></span>{obj.Description}<span></span></p>
                            </td>
                            <td>
                              <p><span><BiEdit color='orange' size={20} cursor="pointer" onClick={() => editdetails(obj) /* setModals(true) */} />&nbsp;&nbsp;<MdDeleteForever color='red' size={20} cursor="pointer" onClick={handleDelete} /></span></p>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <CreateTask toggle={toggle} modal={modal} save={saveTask} ></CreateTask>
                    <EditTask toggle={toggles} modal={modals} updateTask={updateTask} ></EditTask>
                    {/* <EditTask toggle={toggles} modal={modals} updateListArray={updateListArray} ></EditTask> */}
                  </table>
                </div>
              </main>

            </div>

          </div>


          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        </body>
      </html>
    </div>
  );
}

export default Index;