import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCard, MDBCardTitle, MDBCardBody, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBAlert, MDBInput,  } from "mdbreact";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import calendar from '../assets/images/calendar-cube.png'


class Publications extends Component {
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
      uploadFile: "",
      date: null,
      created: new Date(),
      createdby: "Admin",
      submitError: false,
      dataSent: '',
      publications: [],
      name: 'joe great',
      email: 'jjc@example.com',
      feedback: 'test db connection feedback'
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
  this.getPublications();
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

// nr represents modal number
toggle = (nr) => (e) => {
  // 1 represents toggling for Add new publication form modal
  if (nr === 1) {
    this.setState({
      modal1: !this.state.modal1,
    });
  }

  // 2 represents toggling for Update publication form modal
   else if (nr === 2) {
     // console.log('inside toggle 2', publication.title);
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
    uploadFile: "",
    date: null,
    created: new Date(),
    createdby: "Admin",
    submitError: false
  });
  console.log('inside new form');
}

newPublicationSubmit = (e) => {
  axios({
          method: 'post',
          url: 'https://profajayibraces.org/formProcessors/publication.php',
          headers: {
              'content-type': 'application/json'
          },
          data: this.state
      })
      .then(result => {
          console.log("publication sent to db", result.data)
          this.setState({
              dataSent: result.data.sent,
          })
          console.log(this.state)
      })
      .catch(error => this.setState({
          error: error.message
      }));

  // let tokenId = JSON.parse(localStorage.getItem("localData"));
  // const token = tokenId.token;
  //   e.preventDefault();
  //   // axios.post('https://pabraces.herokuapp.com/publications/new', this.state,
  //   axios.post('https://pabraces.herokuapp.com/publications/new', this.state,
  //   {
  //     headers: {"Access-Control-Allow-Origin": "*",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   }
  // )
  //   .then(response => {
  //     if(response.status === 200) {
  //       this.setState({
  //         publicationsError: false,
  //         modal1: false
  //       });
  //       console.log('post succesful ', response.data);
  //       this.toastProgramPost();
  //       setTimeout(() => {
  //         this.getPublications();
  //       }, 500);
  //     }
  //     else {
  //       console.log('issue: there was a problem');
  //       this.setState({
  //         submitError: true
  //       });
  //     }
  //   })
  //   .catch( error => {
  //     console.log('error msg: something went wrong! ');
  //     console.error(error);
  //     // new Error(error);
  //     this.setState({
  //       submitError: true
  //     });
  //   });
  }

toastProgramPost = () => {
  toast.success('Program added successful!');
  return;
  // toast.error('Subscription failed!');
}

getPublications = () => {
  {setTimeout(() => {
    console.log('adminIn is ', this.state.adminId);
  }, 1000);}
  // axios.get('https://profajayibraces.org/apis/publications.json')
  // console.log('inside get frontend');
  axios.get('https://pabraces.herokuapp.com/publications')
  // axios.get('http://localhost:3000//publications')
  .then(response => {
    console.log('response is ', response.data);
    if (response.status === 200){
      this.setState({
        publications: response.data.publications
      });
    } else {
      console.log('something went wrong');
    }
  })
  .catch( error => error);
}

// getPublications = () => {
//   // axios.get('https://profajayibraces.org/apis/publications.json')
//   axios.get('http://localhost:4000/publications')
//   .then(response => {
//     if (response.status === 200){
//       // console.log('response is ', response.data);
//       this.setState({
//         publications: response.data
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
  // axios.delete(`https://pabraces.herokuapp.com/publications/${grabProgram.id}`
  axios.delete(`https://pabraces.herokuapp.com/publications/${grabProgram.id}`,
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
        this.getPublications();
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
  const { id, year, title, description, uploadFile, date, publications } = this.state;
    return (
      <div className="pb-5">
        <MDBContainer className="bg-info pt-1 mb-5" fluid>
          <div className="row my-5 pt-5">
            <div className="col-12 d-flex px-0">
              <img className="d-none d-sm-block img-fluid w-25 float-left" src={calendar} alt="calendar cube" />
              <img className="d-block d-sm-none img-fluid img-xs-publications float-left mt-3" src={calendar} alt="calendar cube" />
              <div className="align-self-center text-center">
                <h1 className="d-none d-sm-block display-4 pl-4">Publications</h1>
                <h2 className="d-block d-sm-none display-5-responsive pl-2 mt-3">Publications</h2>
              </div>
            </div>
          </div>
        </MDBContainer>

        <MDBContainer className="my-5">
          <p className="h5 text-center mx-auto mb-5">
            <strong className="font-weight-bold">Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation</strong> publications.
          </p>
          {/* <MDBBtn color="primary" className="btn mt-5 mb-1 mx-auto d-block" onClick={this.newPublicationSubmit}> Add publication
            <MDBIcon icon="plus" className="ml-2" />
          </MDBBtn> */}

          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" xl="8" className="">

              {/* <div className="box feedback-form">
                {this.state.dataSent ?
                <p className="msg">
                SUCCESS<br/><br/>
                Publication created.
                </p>
                :
                <p>something went wrong!</p>
                }
              </div> */}


              <MDBContainer className="accordion md-accordion accordion-5">
                <MDBCard className="mb-4">
                  <MDBCardBody className="rgba-grey-slight z-depth-1">
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
                    {
                      // publications.map( publication => {
                      //   return <div>
                      //     <MDBCol key={publication.id} className="rgba-black-light text-center py-2 mb-3">
                      //       {/* {console.log(publication)} */}
                      //       <h3 className="mb-0 text-info" > { publication.title } </h3>
                      //       <p className="px-md-4 mb-1">
                      //         {publication.description}
                      //       </p>
                      //       { publication.uploadFile ? <p className="px-md-4 mb-1">
                      //         <MDBIcon icon="map-marker-alt" className=" px-2" />
                      //         {publication.uploadFile}
                      //       </p> : ''}
                      //       { publication.date ? <p className="px-md-4 mb-1">
                      //         <MDBIcon icon="clock" className=" px-2" />
                      //         {publication.date}
                      //       </p> : ''}
                      //       {/* { publication.createdby ? <p className="px-md-4 mb-1">
                      //         <small> Added by: &nbsp;
                      //         {publication.createdby} </small>
                      //       </p> : ''} */}
                      //
                      //       { this.state.loggedIn === false ? '' : <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
                      //         <ul className="list-unstyled list-inline font-small">
                      //           <li className="list-inline-item pr-2 white-text float-left pl-1">
                      //             <MDBIcon far icon="clock" /> {publication.created}
                      //           </li>
                      //
                      //           <li className="list-inline-item float-right pr-1">
                      //             <MDBIcon far icon="trash-alt" className="red-text" onClick={(e) => {
                      //               const grabProgram = publication;
                      //               if (window.confirm('Are you sure you want to delete this item?')) this.deleteProgram(e, grabProgram);
                      //               return
                      //             }}/>
                      //           </li>
                      //
                      //           <li className="list-inline-item float-right pr-4">
                      //             <MDBIcon icon="pencil-alt" className="white-text" onClick={(e) => {
                      //               return (
                      //                 this.updateForm(e, publication)
                      //               )}} />
                      //           </li>
                      //         </ul>
                      //       </div>
                      //       }
                      //
                      //       {/* delete event button.  Display restricted to Admin */}
                      //       {/* { JSON.parse(localStorage.getItem("localData")).role === "admin" ?
                      //         <li className="list-inline-item float-right pr-1">
                      //         <a href="#" className="white-text" onClick={(e) => {
                      //         const eventId = event;
                      //         return (
                      //         this.deleteEvent(e, eventId)
                      //         )}}>
                      //         <MDBIcon far icon="trash-alt" />
                      //         </a>
                      //       </li>  : null } */}
                      //
                      //
                      //       {/* share button */}
                      //       {/* <li className="list-inline-item pl-2 float-right">
                      //         <a href="#!" className="white-text">
                      //         <MDBIcon icon="share-alt" className="mr-2" />
                      //         Share
                      //         </a>
                      //       </li> */}
                      //       {/* </ul> */}
                      //       {/* </div> */}
                      //     </MDBCol>
                      //
                      //     {/* modal for ADD NEW publication start */}
                      //     <MDBModal
                      //       isOpen={this.state.modal1}
                      //       toggle={this.toggle(1)}
                      //       size="lg"
                      //       cascading
                      //     >
                      //       <MDBModalHeader
                      //         toggle={this.toggle(1)}
                      //         titleClass="d-inline title"
                      //         className="text-center light-blue darken-3 white-text"
                      //       >
                      //         <MDBIcon icon="plus" className="px-3" />
                      //         Add Program
                      //       </MDBModalHeader>
                      //       <MDBModalBody>
                      //         <form>
                      //           <div className="text-left">
                      //             {/* <MDBInput
                      //               name="year"
                      //               label="Year"
                      //               type="number"
                      //               iconClass="dark-grey"
                      //               onChange={this.changeHandler}
                      //               value={year}
                      //             /> */}
                      //             <MDBInput
                      //               name="title"
                      //               label="Title"
                      //               type="text"
                      //               iconClass="dark-grey"
                      //               onChange={this.changeHandler}
                      //               value={title}
                      //             />
                      //             <MDBInput
                      //               name="description"
                      //               label="Description"
                      //               type="textarea"
                      //               rows="2"
                      //               iconClass="pencil-alt"
                      //               onChange={this.changeHandler}
                      //               value={description}
                      //             />
                      //             <MDBInput
                      //               name="uploadFile"
                      //               label="File"
                      //               type="file"
                      //               iconClass="dark-grey"
                      //               onChange={this.changeHandler}
                      //               value={uploadFile}
                      //             />
                      //             <MDBInput
                      //               name="date"
                      //               label="Date"
                      //               type="date"
                      //               iconClass="dark-grey"
                      //               onChange={this.changeHandler}
                      //               value={date}
                      //             />
                      //             <div className="text-center mt-1-half">
                      //               {
                      //                 this.state.submitError === true ?
                      //                   <MDBAlert color="danger">
                      //                     <strong>Oops!</strong> Something went wrong
                      //                   </MDBAlert> : null
                      //               }
                      //               <MDBBtn
                      //                 color="primary"
                      //                 type="submit"
                      //                 className="mb-2"
                      //                 onClick={this.newProgramSubmit}
                      //               >
                      //                 Send
                      //                 <MDBIcon icon="paper-plane" className="ml-1" />
                      //               </MDBBtn>
                      //             </div>
                      //           </div>
                      //         </form>
                      //         <ToastContainer pauseOnFocusLoss={true} />
                      //       </MDBModalBody>
                      //     </MDBModal>
                      //     {/* modal for Add New publication end */}
                      //   </div>
                      // })
                    }
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    );
  }
}

export default Publications;
