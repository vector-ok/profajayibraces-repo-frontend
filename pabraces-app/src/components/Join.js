import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardText, MDBInput, MDBAlert } from 'mdbreact';
import axios from 'axios';
import hands from '../assets/images/hand-1917895_1280.png';

// email should forward to bracesprof@gmail.com

class Join extends Component {
  constructor(props){
    super(props);
    this.state= {
      membership: "Select Your Membership",
      memberType: "Individual membership",
      memberDesc: "The individual membership is available for individuals and volunteers who share and believe in the aims and objectives of the Foundation and desire to become a member. For example, students, young people, adults and professionals from various vocations, active and past orthodontic patients etc.",
      activeIn : true,
      activeFe : false,
      activeCo : false,
      activeHo : false,

      title: "",
      firstName: '',
      lastName: "",
      otherNames: "",
      age: "",
      occupation: "",
      addressWork: "",
      addressHome: "",
      phoneWhatsapp: "",
      checkboxIn: '',
      checkboxFe: '',
      checkboxCo: '',
      checkboxHo: '',
      checkboxAdmin: '',
      checkboxFinance: '',
      checkboxSponsor: '',
      checkboxPublicity: '',
      checkboxOutreach: '',
      otherSpecify: "",
      sign: "",
      formDate: new Date(),
      phone: "",
      email: '',
      doBirth: new Date(),
      validateAge: false,
      validatePhone: false,
      validatePhoneWhatsapp: false,
      validateInterestArea: false,
      validateMembershipType: false,
      sex: '',
      genderRadio: null,
      memberRadio: null,
      membershipType: '',
      dataSent: '',
      submitted: false,
      validationError: false
    }
  }

    memberHandle = (nr) => () => {
      // e.preventDefault();
      if(nr===1){
        this.setState({
          membership: "Individual member",
          memberType: "Individual membership",
          memberDesc: "The individual membership is available for individuals and volunteers who share and believe in the aims and objectives of the Foundation and desire to become a member. For example, students, young people, adults and professionals from various vocations, active and past orthodontic patients etc.",
          activeIn : true,
          activeFe : false,
          activeCo : false,
          activeHo : false
        })
      }

      if(nr===2){
        this.setState({
          membership: "Fellow",
          memberType: " Fellowship",
          memberDesc: "The Fellowship of the Foundation will be accorded the Professionals who have attained a high or highest level of scholarship and expertise in their various chosen careers and vocations, and who share and believe in the aims and objectives of the Foundation and desire to become a member.",
          activeIn : false,
          activeFe : true,
          activeCo : false,
          activeHo : false
        })
      }

      if(nr===3){
        this.setState({
          membership: "corporate member",
          memberType: "Corporate membership",
          memberDesc: "The Corporate membership is available for the corporate bodies, manufacturing industries, Medical and Dental facilities, Pharmaceuticals companies, Laboratories,  Societies, Associations, Government and non-governmental organisations who share and believe in the aims and objectives of the Foundation and desire to partner with the Foundation in realisation of its aims and objectives.",
          activeIn : false,
          activeFe : false,
          activeCo : true,
          activeHo : false
        })
      }

      if(nr===4){
        this.setState({
          membership: "honorary member",
          memberType: "Honorary  membership",
          memberDesc: "The Honorary membership of the Foundation is by conferment on the well deserving and outstanding individuals in the Society who have demonstrated a reasonable level of philanthropic gestures and services in the Community / Nation, and share and believe in the aims and objectives of this Foundation and desire to partner with the Foundation in realisation of its aims and objectives.",
          activeIn : false,
          activeFe : false,
          activeCo : false,
          activeHo : true
        })
      }
    }

  handleRadio = (nr) => () => {
    if(nr === 1){
      this.setState({
        genderRadio: 1,
        sex: 'male',
        validateSex: false
      });
    }
    else {
      this.setState({
        genderRadio: 2,
        sex: 'female',
        validateSex: false
      });
    }
  }

  handleMembershipType = (nr) => () => {
    // e.preventDefault();
    if(nr === 1){
      this.setState({
        memberRadio: 1,
        membershipType: 'Individual membership',
        validateMembershipType: false
      });
    }
    if(nr === 2) {
      this.setState({
        memberRadio: 2,
        membershipType: 'Fellowship membership',
        validateMembershipType: false
      });
    }
    if(nr === 3) {
      this.setState({
        memberRadio: 3,
        membershipType: 'Corporate membership',
        validateMembershipType: false
      });
    }
    if(nr === 4) {
      this.setState({
        memberRadio: 4,
        membershipType: 'Honorary membership',
        validateMembershipType: false
      });
    }
  }

  membershipSubmit = (e) => {
    e.preventDefault();

    if(this.state.age < 13 || this.state.age > 120){
      this.setState({
        validateAge: true,
        validationError: true
      })
    }

    if (this.state.sex === "") {
      this.setState({
        validateSex: true,
        validationError: true
      })
    }

    // if (this.state.phone.length > 14) {
    //   this.setState({
    //     validatePhone: true,
    //     validationError: true
    //   })
    // }

    if(this.state.membershipType === "") {
      this.setState({
        validateMembershipType: true,
        validationError: true
      })
    }

    if(this.state.checkboxAdmin === '' && this.state.checkboxFinance === '' && this.state.checkboxSponsor === '' && this.state.checkboxPublicity === '' && this.state.checkboxOutreach === '' &&
    this.state.otherSpecify === '') {
      this.setState({
        validateInterestArea: true
      })
    }
    else {
    this.setState({
      submitted: true,
      validationError: false
    });
    console.log(this.state);
    const API_PATH = 'http://profajayibraces.org/formProcessors/membership_form.php';
    axios({
      method: 'post',
      url: API_PATH,
      headers: {
        'content-type': 'application/json'
      },
      data: this.state
    })
    .then(result => {
      console.log(result.data);
      this.setState({
        dataSent: result.data.sent
      });
    })
    .catch(error => this.setState({
      error: error.message
    }));
    }
  }


  render() {
    return(
      <Router exact>
        <div>
          <MDBContainer className="bg-info pt-2 pt-sm-1 pl-0" fluid>
            <div className="row my-5 pt-5">
              <div className="col-12 d-flex">
                <img className="d-none d-sm-block img-fluid w-25 float-left border-right border-light" src={hands} alt="hands joined" />
                <img className="d-block d-sm-none img-fluid img-xs float-left border-right border top border-light pl-0 mt-4" src={hands} alt="hands joined" />
                <div className="align-self-center text-center">
                  <h1 className="d-none d-sm-block display-4 pl-4">Join The Cause</h1>
                  <h2 className="d-block d-sm-none display-5-responsive pl-2">Join The Cause</h2>
                </div>
              </div>
            </div>
          </MDBContainer>

          <MDBContainer fluid className="mt-0 mb-5 pb-5">
            <MDBRow className="bg-half-dark-alt my-5 mx-auto">
              <MDBCol md="6">
                <MDBDropdown className="my-2">
                  <MDBDropdownToggle outline color="primary" className="text-capitalize rounded d-flex justify-content-center px-3">
                    <h4 className="h2-responsive pt-1">{this.state.membership}</h4>
                    <MDBIcon icon="angle-down" size="2x" className="py-2 pl-3" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="primary">
                    <MDBDropdownItem className="text-capitalize" onClick={this.memberHandle(1)}> Individual  member </MDBDropdownItem>
                    <MDBDropdownItem  className="text-capitalize" onClick={this.memberHandle(2)}> Fellow  </MDBDropdownItem>
                    <MDBDropdownItem className="text-capitalize" onClick={this.memberHandle(3)}> Corporate  member </MDBDropdownItem>
                    <MDBDropdownItem className="text-capitalize"  onClick={this.memberHandle(4)}> Honorary  member </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <h2 className="ml-2">
                  {this.state.memberType}
                </h2>
                <p className="ml-2">{this.state.memberDesc}</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="my-5">
              <MDBCol md="6" className='mx-auto'>
                <MDBCard>
                  <MDBCardBody>
                    <div color="" tag="" className="modal-header z-depth-2  primary-color white-text text-capitalize">
                      <h3 className="mt-2">
                        <MDBIcon icon="user-plus" className="mr-2" /> Membership Form
                      </h3>
                    </div>
                    <MDBCardText>
                      <p className="text-small mb-3">Kindly fill out this membership form and submit. <br/> Membership form can also be downloaded
                        <a href="http://profajayibraces.org/docs/membership_form.docx" download="membership_form_PEOAOAF.docx"> here </a> and submitted at <a href="/contact">our secretariat</a>. </p>

                      <form onSubmit={this.membershipSubmit}>
                        <div className="text-left">
                          <MDBInput
                            label="Title" className="pr-5"
                            name="title"
                            type="text"
                            iconClass="dark-grey"
                            value={this.state.title}
                            onChange={e => this.setState({title: e.target.value})}
                            required
                          />

                          <fragment className="">
                            { this.state.validateSex ?
                              <MDBAlert color="danger" dismiss>
                                <strong> Gender status is NOT accepted  </strong>. Please indicate your sex.
                              </MDBAlert> : '' }
                            <p class="mr-3 pt-1"> Gender: </p>
                            <div className="custom-control custom-radio">
                              <input name="radio1"
                                type="radio"
                                id="radio1" className="custom-control-input"
                                value={this.state.sex}
                                checked={this.state.genderRadio === 1 ? true : false }
                                onClick={this.handleRadio(1)}
                              />
                              <label for="radio1" className="custom-control-label"> Male
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input name="radio2"
                                type="radio"
                                id="radio2" className="custom-control-input"
                                value={this.state.sex}
                                checked={this.state.genderRadio === 2 ? true : false }
                                onClick={this.handleRadio(2)}
                              />
                              <label for="radio2" className="custom-control-label"> Female
                              </label>
                            </div>
                          </fragment>

                          <MDBInput
                            label="Family/ Surname"
                            name="lastName"
                            type="text"
                            iconClass="dark-grey"
                            value={this.state.lastName}
                            onChange={e => this.setState({
                              lastName: e.target.value
                            })}
                            required
                          />

                          <MDBInput
                            label="First name"
                            name="firstName"
                            type="text"
                            iconClass="dark-grey"
                            value={this.state.firstName}
                            onChange={e => this.setState({
                              firstName: e.target.value
                            })}
                            required
                          />

                          <MDBInput
                            label="Other names"
                            name="otherNames"
                            type="text"
                            iconClass="dark-grey"
                            value={this.state.otherNames}
                            onChange={e => this.setState({
                              otherNames: e.target.value
                            })}
                          />

                          { this.state.validateAge ?
                            <MDBAlert color="danger" dismiss>
                              <strong> Given age is NOT eligible. </strong> Age must not be less than 13 or greater than 120.
                            </MDBAlert> : '' }

                          <label className="pr-2 pt-3">Date of Birth: </label>
                          <input className="mr-5 pt-2 border-top-0 border-left-0 border-right-0 border-bottom" type="date" name="doBirth"
                            value={this.state.doBirth}
                            onChange={e => {
                              let dob = new Date(e.target.value);
                              let ageDifference = Date.now() - dob.getTime();
                              let newDate = new Date(ageDifference);
                              let currentAge = Math.abs(newDate.getUTCFullYear() - 1970);
                              this.setState({
                                doBirth: e.target.value,
                                age: currentAge,
                              })
                              if(currentAge < 13 || currentAge > 120) {
                                this.setState({ validateAge: true})
                              }
                              else {
                                this.setState({ validateAge: false})
                              }
                            }}
                            required
                          />
                          <MDBInput label="Age" type="number" name="age"
                            value={this.state.age}
                            disabled
                          />

                          <MDBInput label="Occupation" type="text" name="occupation"
                            value={this.state.occupation}
                            onChange={e => this.setState({
                              occupation: e.target.value
                            })}
                            required
                          />

                          <MDBInput label="Office/ Work address" type="text" name="addressWork"
                            value={this.state.addressWork}
                            onChange={e => this.setState({
                              addressWork: e.target.value
                            })}
                            required
                          />

                          <MDBInput label="Residential address (optional)" type="text" name="addressHome"
                            value={this.state.addressHome}
                            onChange={e => this.setState({
                              addressHome: e.target.value
                            })}
                          />

                          {/* <fragment className="form-inline"> */}
                          { this.state.validatePhone ?
                            <MDBAlert color="danger" dismiss>
                              <strong> Invalid phone number </strong>. Number must not be greater than 13.
                            </MDBAlert> : '' }
                          <MDBInput
                            label="Phone number (eg: +234xxxxxxxxxx)"
                            name="phone"
                            type="tel"
                            pattern="[+][0-9]{13}"
                            iconClass="dark-grey"
                            value={this.state.phone}
                            onChange={e =>
                              this.setState({
                                  phone: e.target.value
                              })
                            }
                            required
                          />
                          {/* </fragment> */}

                          <MDBInput
                            label="Whatsapp number (eg: +234xxxxxxxxxx)"
                            name="phoneWhatsapp"
                            type="tel"
                            pattern="[+][0-9]{13}"
                            iconClass="dark-grey"
                            value={this.state.phoneWhatsapp}
                            onChange={e => this.setState({
                              phoneWhatsapp: e.target.value
                            })}
                            required
                          />

                          <MDBInput
                            label="Email address"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({
                              email: e.target.value
                            })}
                            required
                          />
                          <fragment className="">
                            { this.state.validateMembershipType ?
                              <MDBAlert color="danger" dismiss>
                                <strong> Membership status is NOT accepted </strong>. Please indicate your membership.
                              </MDBAlert> : '' }
                            <p class="mr-3 pt-1"> Type of Membership: </p>
                            <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" name="checkboxIn" id="checkboxIn"
                                value={this.state.membershipType}
                                checked={this.state.memberRadio === 1 ? true : false }
                                onClick={this.handleMembershipType(1)}
                              />
                              <label for="checkboxIn" className="custom-control-label"> Individual
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" name="checkboxFe" id="checkboxFe" value={this.state.membershipType}
                                checked={this.state.memberRadio === 2 ? true : false }
                                onClick={this.handleMembershipType(2)}/>
                              <label for="checkboxFe" className="custom-control-label"> Fellowship</label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" name="checkboxCo"  id="checkboxCo" value={this.state.membershipType}
                                checked={this.state.memberRadio === 3 ? true : false }
                                onClick={this.handleMembershipType(3)}
                              />
                              <label for="checkboxCo" className="custom-control-label"> Corporate </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input " name="checkboxHo"  id="checkboxHo" value={this.state.membershipType}
                                checked={this.state.memberRadio === 4 ? true : false }
                                onClick={this.handleMembershipType(4)}/>
                              <label for="checkboxHo" className="custom-control-label"> Honorary </label>
                            </div>
                          </fragment>


                          { this.state.validateInterestArea ?
                            <MDBAlert color="danger" dismiss>
                              <strong> Area of Interest status is NOT accepted  </strong>. Please indicate your area of interest.
                            </MDBAlert> : '' }
                          <p class="mt-5"> Special area(s) of interest where I want to support the Foundation's activities: </p>
                          {/* <fragment className=" d-flex align-items-start"> */}
                          <div className="custom-control custom-checkbox align-start">
                            <input type="checkbox" className="custom-control-input " name="checkboxAdmin" id="checkboxAdmin" value={this.state.checkboxAdmin}
                              onChange={e => e.target.checked ? this.setState({
                                checkboxAdmin: 'Administration',
                                validateInterestArea: false
                              }) : this.setState({
                                checkboxAdmin: ''
                              }) }/>
                            <label for="checkboxAdmin" className="custom-control-label "> Administration
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input " name="checkboxFinance" id="checkboxFinance" value={this.state.checkboxFinance}
                              onChange={e => e.target.checked ? this.setState({
                                checkboxFinance: 'Financial Support',
                                validateInterestArea: false
                              }) : this.setState({
                                checkboxFinance: ''
                              }) } />
                            <label for="checkboxFinance" className="custom-control-label "> Financial support</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="checkboxSponsor"  id="checkboxSponsor" value={this.state.checkboxSponsor}
                              onChange={e => e.target.checked ? this.setState({
                                checkboxSponsor: 'Sponsorship',
                                validateInterestArea: false
                              }) : this.setState({
                                checkboxSponsor: ''
                              }) } />
                            <label for="checkboxSponsor" className="custom-control-label"> Sponsorship </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input " name="checkboxPublicity"  id="checkboxPublicity" value={this.state.checkboxPublicity}
                              onChange={e => e.target.checked ? this.setState({
                                checkboxPublicity: 'Publicity / Public Relations',
                                validateInterestArea: false
                              }) : this.setState({
                                checkboxPublicity: ''
                              }) } />
                            <label for="checkboxPublicity" className="custom-control-label"> Publicity / Public relations </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input " name="checkboxOutreach"  id="checkboxOutreach" value={this.state.checkboxOutreach}
                              onChange={e => e.target.checked ? this.setState({
                                checkboxOutreach: 'Outreach',
                                validateInterestArea: false
                              }) : this.setState({
                                checkboxOutreach: ''
                              }) } />
                            <label for="checkboxOutreach" className="custom-control-label"> Outreach </label>
                          </div>

                          {/* </fragment> */}
                          <MDBInput type="textarea" label="Other area(s) (specify)" rows="2"
                            name="otherSpecify"
                            value={this.state.otherSpecify}
                            onChange={e => this.setState({
                              otherSpecify: e.target.value,
                              validateInterestArea: false
                            })}
                          />
                          <MDBInput label="Signature" type="text" name="sign"
                            value={this.state.sign}
                            onChange={e => this.setState({
                              sign: e.target.value
                            })}
                          />
                          <label hidden className="pt-1">Date of Submission: </label>
                          <input hidden className="mb-5 border-top-0 border-left-0 border-right-0 border-bottom" type="date"
                            name="formDate" value={this.state.value}
                          />

                          { this.state.submitted ?
                            <MDBAlert color="success" dismiss>
                              <strong>SUCCESS!</strong> Your submission was successful. Thank you.
                            </MDBAlert> : '' }

                          { this.state.validationError ?
                            <MDBAlert color="danger" dismiss>
                              <strong> An error occured. </strong> Please ensure all fields are properly filled.
                            </MDBAlert> : '' }



                          <div className="text-center mt-1-half">
                            <MDBBtn
                              color="info"
                              className="mb-2"
                              name="submit"
                              type="submit"
                            >
                              Submit
                              <MDBIcon icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                          </div>
                        </div>
                      </form>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </div>
      </Router>
    )
  }
}

export default Join
