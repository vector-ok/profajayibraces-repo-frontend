import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCard, MDBCardTitle, MDBCardBody, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBAlert, MDBInput,  } from "mdbreact";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import calendar from '../assets/images/calendar-cube.png'


class Programs extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: false,
      modal1: false,
      modal2: false,
      adminId: localStorage.getItem('localData') ? JSON.parse(localStorage.getItem('localData')).adminId : null,
      collapseID: "collapse1",
      id: null,
      year: new Date().getFullYear(),
      title: "",
      description: "",
      location: "",
      date: null,
      created: new Date(),
      createdby: "Admin",
      submitError: false,
      dataSent: '',
      programs: []
    }
  }

componentDidMount = () => {
  if (this.props.dataToChild !== null) {
    this.setState({
      loggedIn: true
    });
  } else {
      this.setState({
        loggedIn: false
      })
  }
  this.getPrograms();
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

// nr represents modal number
toggle = (nr) => (e) => {
  // 1 represents toggling for Add new program form modal
  if (nr === 1) {
    this.setState({
      modal1: !this.state.modal1,
    });
  }

  // 2 represents toggling for Update program form modal
   else if (nr === 2) {
     // console.log('inside toggle 2', program.title);
    this.setState({
      modal2: !this.state.modal2,
    });
  }
}

changeHandler = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}

newForm = (e) => {
  e.preventDefault();
  this.setState({
    modal1: true,
    id: null,
    year: new Date().getFullYear(),
    title: "",
    description: "",
    location: "",
    date: null,
    created: new Date(),
    createdby: "Admin",
    submitError: false
  });
  console.log('inside new form');
}

newProgramSubmit = (e) => {
  // axios({
  //         method: 'post',
  //         url: 'https://profajayibraces.org/apis/program.php',
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         data: this.state
  //     })
  //     .then(result => {
  //         console.log(result.data)
  //         this.setState({
  //             dataSent: result.data.sent,
  //         })
  //         console.log(this.state)
  //     })
  //     .catch(error => this.setState({
  //         error: error.message
  //     }));

  let tokenId = JSON.parse(localStorage.getItem("localData"));
  const token = tokenId.token;
    e.preventDefault();
    // axios.post('https://pabraces.herokuapp.com/programs/new', this.state,
    axios.post('https://pabraces.herokuapp.com/programs/new', this.state,
    {
      headers: {"Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${token}`
      }
    }
  )
    .then(response => {
      if(response.status === 200) {
        this.setState({
          programsError: false,
          modal1: false
        });
        console.log('post succesful ', response.data);
        this.toastProgramPost();
        setTimeout(() => {
          this.getPrograms();
        }, 500);
      }
      else {
        console.log('issue: there was a problem');
        this.setState({
          submitError: true
        });
      }
    })
    .catch( error => {
      console.log('error msg: something went wrong! ');
      console.error(error);
      // new Error(error);
      this.setState({
        submitError: true
      });
    });
  }

toastProgramPost = () => {
  toast.success('Program added successful!');
  return;
  // toast.error('Subscription failed!');
}

updateForm = (e, program) => {
  e.preventDefault();
  this.setState({
    modal2: true,
    year: program.year,
    id: program.id,
    title: program.title,
    description: program.description,
    location: program.location,
    date: program.date,
    createdby: program.createdby,
    created: program.created,
    submitError: false
  });
}

toastProgramUpdate = () => {
  toast.success('Program update successful!');
}

updateProgram = (e) => {
  e.preventDefault();
  let token = JSON.parse(localStorage.getItem("localData")).token;
  console.log('token is ', token);
  // const token = tokenId.user.token;
  axios.put(`https://pabraces.herokuapp.com/programs/${this.state.id}`,this.state, {
    headers: {
        "Authorization": `Bearer ${token}`
    }

  // axios.put(`https://pabraces.herokuapp.com/programs/${this.state.id}`, this.state, {
    // headers: {
    //     "Authorization": `Bearer ${token}`
    // }
  })
  .then(response => {
    console.log(response);
    if(response.status === 201) {
      this.toastProgramUpdate();
      this.getPrograms();
      setTimeout(() => {
        this.setState({
            // eventsError: false,
            modal2: !this.state.modal2
        })
      }, 500)
        // window.location.reload(true);
    }
    else {
      this.setState({
          eventsError: true,
      })
    }
    // window.location.reload(true);
    // this.getEvents();
    // this.setState({
    //   modal5: false
    // });
  })
  .catch( error => {
    this.setState({
        eventsError: true,
    })
    new Error(error)
  });
}

toastEventUpdate = () => {
    toast.info("Program updated successfully!");
}


getPrograms = () => {
  {setTimeout(() => {
    console.log('adminIn is ', this.state.adminId);
  }, 1000);}
  // axios.get('https://profajayibraces.org/apis/programs.json')
  // console.log('inside get frontend');
  axios.get('https://pabraces.herokuapp.com/programs')
  // axios.get('http://localhost:3000//programs')
  .then(response => {
    console.log('response is ', response.data);
    if (response.status === 200){
      this.setState({
        programs: response.data.programs
      });
    } else {
      console.log('something went wrong');
    }
  })
  .catch( error => error);
}

// getPrograms = () => {
//   // axios.get('https://profajayibraces.org/apis/programs.json')
//   axios.get('http://localhost:4000/programs')
//   .then(response => {
//     if (response.status === 200){
//       // console.log('response is ', response.data);
//       this.setState({
//         programs: response.data
//       });
//     } else {
//       console.log('something went wrong');
//     }
//   })
//   .catch( error => error);
// }

toastProgramDelete = () => {
  toast.success("Program deleted successfully!");
}

//  delete Event function
deleteProgram = (e, grabProgram) => {
  e.preventDefault();
  let token = JSON.parse(localStorage.getItem("localData")).token;
  // const token = tokenId.user.token;
  // axios.delete(`https://pabraces.herokuapp.com/programs/${grabProgram.id}`
  axios.delete(`https://pabraces.herokuapp.com/programs/${grabProgram.id}`,
    {
    headers: {
        "Authorization": `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.status === 200) {
      // console.log('frontend response is ', response);
      // this.setState({
      //   eventsError: false
      // });
      this.toastProgramDelete();
      setTimeout(() => {
        this.getPrograms();
      }, 1000);
    }
    else {
      // this.setState({
      //     eventsError: true
      // })
    }
  })
  .catch( error => {
    console.log(error);
    throw error
    // new Error(error);
    // this.setState({
    //     eventsError: true
    // });
  });
}

render() {
  const { id, year, title, description, location, date, programs } = this.state;
    return (
      <div className="pb-5">
        <MDBContainer className="bg-info pt-1 mb-5" fluid>
          <div className="row my-5 pt-5">
            <div className="col-12 d-flex px-0">
              <img className="d-none d-sm-block img-fluid w-25 float-left" src={calendar} alt="calendar cube" />
              <img className="d-block d-sm-none img-fluid img-xs-programs float-left mt-3" src={calendar} alt="calendar cube" />
              <div className="align-self-center text-center">
                <h1 className="d-none d-sm-block display-4 pl-4">Programs</h1>
                <h2 className="d-block d-sm-none display-5-responsive pl-2 mt-3">Programs</h2>
              </div>
            </div>
          </div>
        </MDBContainer>

        <MDBContainer className="my-5 py-5">
          <p className="border rounded-pill py-3 h5 text-center mx-auto mb-5">
            Programs are designed in consistence with the aims and objectives of <br/> <strong className="font-weight-bold">Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation</strong>.
          </p>

          <MDBCard
            className="card-image bg-calendar"
          >
            <div className="rgba-black-strong py-5 px-4">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8">
                    <h1 className="text-lora text-capitalize text-center white-text mb-2">  Programs</h1>

                    <div className=" box feedback-form">
    {this.state.dataSent ?
    <p className="msg">
    SUCCESS<br/><br/>
    Thanks for submitting your feedback.<br/>
    We appreciate your time.
    </p>
    :
    <p>something went wrong php</p>
    }
  </div>


                  <MDBContainer className="accordion md-accordion accordion-5">
                    <MDBCard className="mb-4">
                      <div
                        onClick={this.toggleCollapse("collapse2")}
                        className="p-0 z-depth-1 primary-color text-uppercase white-text mb-0 d-flex justify-content-start align-items-center font-weight-bold"
                        tag="display-2"
                      >
                        <div
                          className="d-flex justify-content-center align-items-center mr-4 program-alt"
                        >
                          <MDBIcon
                            icon="calendar-alt"
                            size="2x"
                            className="m-2 white-text"
                          />
                        </div>
                        <p className="h2 my-auto">2021</p>
                      </div>

                      <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-strong white-text z-depth-1">
                          {
                            this.state.loggedIn === false ? ''
                            :
                          <div>
                            <p>
                              <MDBBtn color="white" className="w-100 blue-text" onClick={(e) => {
                                return (
                                  this.newForm(e)
                                )}}> Add new
                                <MDBIcon icon="plus" className="px-2" />
                              </MDBBtn>
                            </p>
                          </div>
                        }
                          { programs.map( program => {
                            return <div>
                            <MDBCol key={program.id} className="rgba-black-light text-center py-2 mb-3">
                              {/* {console.log(program)} */}
                              <h3 className="mb-0 text-info" > { program.title } </h3>
                            <p className="px-md-4 mb-1">
                              {program.description}
                            </p>
                            { program.location ? <p className="px-md-4 mb-1">
                            <MDBIcon icon="map-marker-alt" className=" px-2" />
                              {program.location}
                            </p> : ''}
                            { program.date ? <p className="px-md-4 mb-1">
                              <MDBIcon icon="clock" className=" px-2" />
                              {program.date}
                            </p> : ''}
                            {/* { program.createdby ? <p className="px-md-4 mb-1">
                              <small> Added by: &nbsp;
                              {program.createdby} </small>
                            </p> : ''} */}

              { this.state.loggedIn === false ? '' : <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
                  <ul className="list-unstyled list-inline font-small">
                    <li className="list-inline-item pr-2 white-text float-left pl-1">
                      <MDBIcon far icon="clock" /> {program.created}
                    </li>

                    <li className="list-inline-item float-right pr-1">
                      <MDBIcon far icon="trash-alt" className="red-text" onClick={(e) => {
                        const grabProgram = program;
                          if (window.confirm('Are you sure you want to delete this item?')) this.deleteProgram(e, grabProgram);
                           return
                      }}/>
                    </li>

                    <li className="list-inline-item float-right pr-4">
                      <MDBIcon icon="pencil-alt" className="white-text" onClick={(e) => {
                        return (
                          this.updateForm(e, program)
                        )}} />
                    </li>
                  </ul>
                </div>
              }

                   {/* delete event button.  Display restricted to Admin */}
                   {/* { JSON.parse(localStorage.getItem("localData")).role === "admin" ?
                     <li className="list-inline-item float-right pr-1">
                       <a href="#" className="white-text" onClick={(e) => {
                         const eventId = event;
                         return (
                           this.deleteEvent(e, eventId)
                         )}}>
                         <MDBIcon far icon="trash-alt" />
                       </a>
                     </li>  : null } */}


                   {/* share button */}
                   {/* <li className="list-inline-item pl-2 float-right">
                     <a href="#!" className="white-text">
                       <MDBIcon icon="share-alt" className="mr-2" />
                       Share
                     </a>
                   </li> */}
                 {/* </ul> */}
               {/* </div> */}
            </MDBCol>

            {/* modal for ADD NEW program start */}
              <MDBModal
                isOpen={this.state.modal1}
                toggle={this.toggle(1)}
                size="lg"
                cascading
                >
                <MDBModalHeader
                  toggle={this.toggle(1)}
                  titleClass="d-inline title"
                  className="text-center light-blue darken-3 white-text"
                >
                  <MDBIcon icon="plus" className="px-3" />
                  Add Program
                </MDBModalHeader>
                <MDBModalBody>
                  <form>
                    <div className="text-left">
                      <MDBInput
                        name="year"
                        label="Year"
                        type="number"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={year}
                      />
                      <MDBInput
                        name="title"
                        label="Title"
                        type="text"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={title}
                      />
                      <MDBInput
                        name="description"
                        label="Description"
                        type="textarea"
                        rows="2"
                        iconClass="pencil-alt"
                        onChange={this.changeHandler}
                        value={description}
                      />
                      <MDBInput
                        name="location"
                        label="Location"
                        type="text"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={location}
                      />
                      <MDBInput
                        name="date"
                        label="Date"
                        type="date"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={date}
                      />
                      <div className="text-center mt-1-half">
                        {
                          this.state.submitError === true ?
                            <MDBAlert color="danger">
                              <strong>Oops!</strong> Something went wrong
                            </MDBAlert> : null
                        }
                        <MDBBtn
                          color="primary"
                          type="submit"
                          className="mb-2"
                          onClick={this.newProgramSubmit}
                        >
                          Send
                          <MDBIcon icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </div>
                  </form>
                  <ToastContainer pauseOnFocusLoss={true} />
                </MDBModalBody>
              </MDBModal>
              {/* modal for Add New program end */}

              {/* modal for UPDATE PROGRAM start */}
              <MDBModal
               isOpen={this.state.modal2}
               toggle={this.toggle(2)}
               size="lg"
               cascading
               >
               <MDBModalHeader
                 toggle={this.toggle(2)}
                 titleClass="d-inline title"
                 className="text-center light-blue darken-3 white-text"
               >
                 <MDBIcon icon="pencil-alt" className="px-3" />
                 Update Program
               </MDBModalHeader>
               <MDBModalBody>
                 <form>
                   <div className="text-left">
                     <MDBInput
                       name="year"
                       label="Year"
                       type="number"
                       iconClass="dark-grey"
                       onChange={this.changeHandler}
                       value={year}
                       // value={() => {
                       //   if (this.state.date === null){
                       //     return this.state.year
                       //   }
                       //   else {
                       //    const dateVal = this.state.date
                       //    dateVal.split('-')
                       //    const year = dateVal[0]
                       //    return year
                       //   }
                       // }}
                     />
                     <MDBInput
                       name="title"
                       label="Title"
                       type="text"
                       iconClass="dark-grey"
                       onChange={this.changeHandler}
                       value={title}
                     />
                     <MDBInput
                       name="description"
                       label="Description"
                       type="textarea"
                       rows="2"
                       iconClass="pencil-alt"
                       onChange={this.changeHandler}
                       value={description}
                     />
                     <MDBInput
                       name="location"
                       label="Location"
                       type="text"
                       iconClass="dark-grey"
                       onChange={this.changeHandler}
                       value={location}
                     />
                     <MDBInput
                       name="date"
                       label="Date"
                       type="date"
                       iconClass="dark-grey"
                       onChange={this.changeHandler}
                       value={date}
                     />
                     <div className="text-center mt-1-half">
                       {
                         this.state.submitError === true ?
                           <MDBAlert color="danger">
                             <strong>Oops!</strong> Something went wrong
                           </MDBAlert> : null
                       }
                       <MDBBtn
                         color="primary"
                         type="submit"
                         className="mb-2"
                         onClick={this.updateProgram}
                       >
                         Send
                         <MDBIcon icon="paper-plane" className="ml-1" />
                       </MDBBtn>
                     </div>
                   </div>
                 </form>
                 <ToastContainer pauseOnFocusLoss={true} />
               </MDBModalBody>
             </MDBModal>
             {/* modal for UPDATE program end */}
            </div>
            })}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

                    {/* <MDBCard className="mb-4">
                      <div
                        onClick={this.toggleCollapse("collapse3")}
                        className="p-0 z-depth-1 primary-color text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                        tag="h4"
                      >
                        <div
                      className="d-flex justify-content-center align-items-center mr-4"
                      style={{ backgroundColor: "#fff", minWidth: "100px" }}
                        >
                      <MDBIcon
                      icon="cogs"
                      size="2x"
                      className="m-3 black-text"
                      />
                        </div>
                        Item #3
                      </div>

                      <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high
                      life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute, non cupidatat skateboard dolor brunch.
                      Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et.
                      </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard> */}
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBContainer>

      </div>
    );
  }
}

export default Programs;
