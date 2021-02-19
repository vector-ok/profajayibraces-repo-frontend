import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBMask, MDBView, MDBBtn, MDBIcon, MDBAnimation, MDBBtnGroup, MDBRow, MDBCol, MDBTypo} from 'mdbreact';
import '../App.css';
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import "../extra-styling/gallery.css";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import serve from "../assets/images/service1.png";
import serveBg from "../assets/images/service1b.png";
import counsel from "../assets/images/counsel5.png";
import educate from "../assets/images/presentation6.png";
import studentsBg from "../assets/images/students1.png";
import profPresent from "../assets/images/presentationProf.png";
import child from "../assets/images/child_smile.png";
import aim from "../assets/images/aim.png";
import researchBg from "../assets/images/dentist-chair.jpg";
import dentalLight from "../assets/images/dentist-light.png";
import bannerImg from "../assets/images/banner-re2.png";
import bannerImg3 from "../assets/images/banner-re2-lg.png";
import bannerImg2 from "../assets/images/banner-re2-md.png";
import cdcLogo from "../assets/images/cdc_logo.png";

const images = [
  "http://profajayibraces.org/malocclusion/crowding.png",
  "http://profajayibraces.org/malocclusion/diastema.png",
  "http://profajayibraces.org/malocclusion/anterior_open.png",
  // "http://profajayibraces.org/malocclusion/anterior_cross.png",
  "http://profajayibraces.org/malocclusion/unerupted.png",
  "http://profajayibraces.org/malocclusion/anterior_open2.jpg"
]

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

      render() {
        const { photoIndex, isOpen } = this.state;
        const gallery_settings = {
          dots: false,
          centerMode: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          rtl: true
        };
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };

        return (
            // <Router>
              <div>
                {/* for extra large screens only */}
                <MDBView src={bannerImg} className="d-none d-xl-block img-fluid text-center" fixed>
                  <MDBMask overlay="" className="d-flex flex-column justify-content-center align-items-start text-white text-center px-5">
                    <h1 className="text-lora text-capitalize display-5 mb-0">Healthy, beautiful smile for everyone </h1>
                    <p className="mb-0">We partner with you to straighten teeth, restore oral health and give back smiles.</p>
                    {/* <p className="mb-0">"Always find opportunities to make some smile, and to offer random acts of kindness in everyday life."  </p>
                    <p className="small pr-1">- Roy T. Bennet</p> */}
                    <MDBAnimation type="pulse" infinite>
                      <MDBBtn gradient="blue" className="shadow rounded mb-5 mb-sm-0" href="/Join" > Join The Cause
                        <MDBIcon icon="users" className="ml-2" />
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBMask>

                  <div className="bottom-aligned align-items-center w-100">
                    <MDBBtnGroup className="w-100">
                      <MDBBtn className="text-capitalize ml-0 mb-0 blue lighten-1 border-top-left" href="/about">
                        <p className="h4"> Who We Are
                          <MDBIcon icon="user-md" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mb-0 blue-custom" href="/why">
                        <p className="h4"> Why Join Us
                          <MDBIcon icon="user-friends" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mr-0 mb-0 light-blue darken-2 border-top-right" href="/join"> <p className="h4"> Join Us
                        <MDBIcon icon="users" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                    </MDBBtnGroup>
                  </div>
                </MDBView>

                {/* for large screens only */}
                <MDBView src={bannerImg3} className="d-none d-lg-block d-xl-none img-fluid text-center" fixed>
                  <MDBMask overlay="" className="d-flex flex-column justify-content-center align-items-start text-white text-center px-4">
                    <h2 className="text-lora text-capitalize display-5 mb-0">Healthy, beautiful smile for everyone </h2>
                    <p className="mb-0">We partner with you to straighten teeth, restore oral health and give back smiles.</p>
                    {/* <p className="mb-0">"Always find opportunities to make some smile, and to offer random acts of kindness in everyday life."  </p>
                    <p className="small pr-1">- Roy T. Bennet</p> */}
                    <MDBAnimation type="pulse" infinite>
                      <MDBBtn gradient="blue" className="shadow rounded mb-5 mb-sm-0" href="/Join" > Join The Cause
                        <MDBIcon icon="users" className="ml-2" />
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBMask>

                  <div className="bottom-aligned align-items-center w-100">
                    <MDBBtnGroup className="w-100">
                      <MDBBtn className="text-capitalize ml-0 mb-0 blue lighten-1 border-top-left" href="/about">
                        <p className="h4"> Who We Are
                          <MDBIcon icon="user-md" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mb-0 blue-custom" href="/why">
                        <p className="h4"> Why Join Us
                          <MDBIcon icon="user-friends" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mr-0 mb-0 light-blue darken-2 border-top-right" href="/join"> <p className="h4"> Join Us
                        <MDBIcon icon="users" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                    </MDBBtnGroup>
                  </div>
                </MDBView>

                {/* for screens less than large */}
                <MDBView src={bannerImg2} className="d-block d-lg-none img-fluid" fixed>
                  <MDBMask overlay="red-light" className="d-flex flex-column justify-content-center align-items-start text-white px-2 px-md-3 pb-5">
                    <h3 className="text-lora text-capitalize display-5 mb-0">Healthy, beautiful smile for everyone </h3>
                    <p className="mb-0">We partner with you to straighten teeth, restore oral health and give back smiles.</p>

                    <MDBAnimation type="pulse" infinite>
                      <MDBBtn gradient="blue" className="shadow rounded mb-5 mb-sm-5 " href="/Join" > Join The Cause
                        <MDBIcon icon="users" className="ml-2" />
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBMask>

                  {/* for screens greater than xs  */}
                  <div className="bottom-aligned align-items-center w-100 d-none d-sm-block">
                    <MDBBtnGroup className="w-100">
                      <MDBBtn className="text-capitalize ml-0 mb-0 blue lighten-1 border-top-left" href="/about">
                        <p className="h4"> Who We Are
                          <MDBIcon icon="user-md" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mb-0 blue-custom" href="/why">
                        <p className="h4"> Why Join Us
                          <MDBIcon icon="user-friends" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mr-0 mb-0 light-blue darken-2 border-top-right" href="/join"> <p className="h4"> Join Us
                        <MDBIcon icon="users" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                    </MDBBtnGroup>
                  </div>

                  {/* *********************** for  xs screens  **************** */}
                  <div className="bottom-aligned align-items-center d-block d-sm-none w-100">
                    <MDBBtnGroup className="w-100" vertical>
                      <MDBBtn className="text-capitalize ml-0 mb-0 blue lighten-3" href="/about">
                        <p className="h4"> Who We Are
                          <MDBIcon icon="user-md" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mb-0 blue lighten-2" href="/why">
                        <p className="h4"> Why Join Us
                          <MDBIcon icon="user-friends" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                      <MDBBtn className="text-capitalize mr-0 mb-0 blue lighten-1" href="/join"> <p className="h4"> Join Us
                        <MDBIcon icon="users" className="ml-2" size="1x" /> </p>
                      </MDBBtn>
                    </MDBBtnGroup>
                  </div>
                </MDBView>

                {/* ****************************************************************************** */}



                <main>
                  <MDBContainer className="text-center my-5">
                    <MDBRow className="mb-5">
                      <MDBCol md="10" className="mx-auto mt-5">
                        <h4> <MDBIcon icon="quote-right" className="" size="2x" /> </h4>
                        <MDBTypo align="center" tag="h5" variant="display-5" className="display-5 text-lora"> We are committed to the promotion of highest levels of excellence in orthodontic education, research and management of patients by advancing the use of most contemporary knowledge in orthodontics, technology and materials to provide orthodontic care for the less privileged, elderly and the society.</MDBTypo>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="my-5">
                      <MDBCol md="12" className="d-flex flex-row justify-content-center mx-auto">
                        <MDBCol md="6" className="offset-md-1 d-flex flex-column justify-content-center">
                          <MDBView hover zoom waves className="border-bottom-left">
                            <img src={educate} className="img-fluid border-top-left border-bottom-left" alt="We educate" />
                            <MDBMask overlay="blue-slight"></MDBMask>
                          </MDBView>
                          <small className="d-block d-md-none text-small">We educate</small>
                          <div className=" d-none d-md-block bottom-aligned rgba-blue-light border-bottom-left border-top-right ml-3 px-5 py-5">
                            <p className="text-lora white-text h2">We educate</p>
                          </div>
                        </MDBCol>
                        <MDBCol md="6" className="">
                          <MDBCol md="10" className="mb-3 align-left">
                            <MDBView hover zoom waves className="border-top-right">
                              <img src={counsel} className="img-fluid border-top-right" alt="We counsel" />
                              <MDBMask overlay="blue-slight"></MDBMask>
                            </MDBView>
                            <small className="d-block d-md-none text-small">We counsel</small>
                            <div className=" d-none d-md-block top-right-aligned rgba-black-strong border-bottom-left border-top-right mr-3 px-4 py-4">
                              <p className="text-lora white-text h2">We counsel</p>
                            </div>
                          </MDBCol>
                          <MDBCol md="10" className="align-left">
                            <MDBView hover zoom waves className="border-bottom-right">
                              <img src={serve} className="img-fluid border-bottom-right" alt="We serve" />
                              <MDBMask overlay="blue-slight"></MDBMask>
                            </MDBView>
                            <small className="d-block d-md-none text-small">We serve</small>
                            <div className=" d-none d-md-block bottom-right-aligned rgba-cyan-strong border-bottom-right border-top-left mr-3 px-4 py-4">
                              <p className="text-lora white-text h2">We serve</p>
                            </div>
                          </MDBCol>
                        </MDBCol>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>

                  <MDBContainer fluid className="my-5">
                    <MDBRow className="">
                      <div className="col-12 my-5 text-center">
                        <h1 className="text-lora text-capitalize"> Matters dear to us</h1>
                        <hr class="mb-2 mx-5 px-5" />
                      </div>

                      {/* Section awareness */}
                      <div className="col-12 bg-half-dark mb-5">
                        <p class="d-none d-sm-block display-3 text-capitalize mt-0 ml-1 ml-sm-5 text-primary"> awareness</p>

                        {/* for extra small screens only (xs) */}
                        <p className="d-block d-sm-none h1 text-capitalize mt-0 ml-1 ml-sm-5 text-primary"> awareness</p>
                        {/* xs ended */}

                        {/* img  for large screens and above (lg) */}
                        <img src={profPresent} className="img-present d-none d-lg-block img-jumbo-1" alt="Professor holding model of teeth" />
                        <div className="col-12 col-sm-10">
                          <div className="col-12 pl-0 col-sm-6">
                            <img src={aim} alt="aim" className="float-left mr-2 ml-0 ml-sm-2 ml-lg-4 mr-sm-2" />
                            <p class="lead mb-0 mt-2">To create awareness</p>
                            {/* <hr class="my-4" /> */}
                            <p className="ml-lg-4">  on the importance of orthodontic care to the general populace and
                              facilitate the provision of quality orthodontic care.
                            </p>
                          </div>

                          {/* for small screens and above (sm) */}
                          <div className="d-none d-sm-block col-sm-8 col-md-7 col-lg-7 box-right-2 rounded text-left rgba-blue-grey-strong white-text mt-5 mx-3 pt-3">
                            <img src={aim} alt="aim" className="float-left mr-1 mr-sm-2" />
                            <p class="lead mb-0">To partner with individuals, </p>
                            <p className=""> societies, associations and organisations that share similar 	objectives with the foundation and also support other worthy causes that will lead to 	advancement of the arts and sciences of orthodontics as determined by the trustees of 	the foundation.
                            </p>
                          </div>
                          {/* sm screens ended */}

                          {/* for extra small screens only (xs) */}
                          <div className="d-block d-sm-none text-left mt-1 mx-1 pt-2">
                            <img src={aim} alt="aim" className="float-left mr-1" />
                            <p class="lead mb-0">To partner with individuals, </p>
                            <p className=""> societies, associations and organisations that share similar 	objectives with the foundation and also support other worthy causes that will lead to 	advancement of the arts and sciences of orthodontics as determined by the trustees of 	the foundation.
                            </p>
                          </div>
                          {/* xs screens ended */}


                          <ScrollAnimation animateIn="fadeIn">
                            <div className="d-none d-sm-block col-7 col-sm-7 col-md-5 col-lg-8 box-left-2 rounded text-left rgba-blue-grey-strong white-text mt-5 mx-3 pt-3">
                            <img src={aim} alt="aim" className="float-left img-fluid mr-1 mr-sm-2" />
                            <p class="lead mb-0">To promote, </p>
                            {/* <hr class="my-4" /> */}
                            <p className=""> facilitate and organise scientific conferences, seminars, colloquiums and 	workshops in orthodontics, orthodontic management of patients and related subjects.
                            </p>
                          </div>
                        </ScrollAnimation>
                          <img src={studentsBg} className="pb-2 img-fluid" alt="students" />
                          {/* for xs screens */}
                          <div className="d-block d-sm-none mt-1 mx-1 pt-3">
                            <img src={aim} alt="aim" className="float-left img-fluid mr-1 mr-sm-2" />
                            <p class="lead mb-0">To promote, </p>
                            {/* <hr class="my-4" /> */}
                            <p className=""> facilitate and organise scientific conferences, seminars, colloquiums and 	workshops in orthodontics, orthodontic management of patients and related subjects.
                            </p>
                          </div>
                          {/* xs screens ended */}

                          <MDBBtn color="blue" size="lg" className="mr-sm-5" href="/About">Learn more
                            <MDBIcon className="ml-2" icon="lightbulb" />
                          </MDBBtn>
                        </div>
                      </div>

                      {/* section care */}
                      <div className="col-sm-12 bg-half-dark-alt text-right my-5">
                        <p class="d-none d-sm-block display-3 text-capitalize mt-0 mr-5 text-primary"> care</p>
                        <p class="d-block d-sm-none h1 text-capitalize mt-0 mr-3 text-primary"> care</p>
                        <img src={child} className="img-present-alt img-jumbo-2 d-none d-lg-block" alt="Child pose" />
                        <div className="col-12 float-right">
                          <div className="col-12 col-sm-5 mr-0 float-right">
                            <img src={aim} alt="aim" className="float-right mr-0 mr-sm-4 ml-2" />
                            <p class="lead mb-0 mr-0 mr-sm-4">To partner with industries,</p>
                            {/* <hr class="my-4" /> */}
                            <p className="mr-o mr-sm-4"> corporate bodies and well-meaning individuals to 	facilitate the provision of quality orthodontic care for the needy individuals.
                            </p>
                          </div>

                          <div className="d-none d-sm-block col-6 col-md-5 box-right rounded text-right rgba-blue-grey-strong white-text mt-5 mx-4 pt-3">
                            <img src={aim} alt="aim" className="float-right ml-2" />
                            <p class="lead mb-0">To partner with industries</p>
                            {/* <hr class="my-4" /> */}
                            <p className="">  in the designing and manufacturing of medical and dental 	equipments  and related accessories to facilitate the provision of quality  orthodontic care to the less privileged and the populace.
                            </p>
                          </div>
                          {/* for xs screens */}
                          <div className="d-block d-sm-none mr-2">
                            <img src={aim} alt="aim" className="float-right ml-2" />
                            <p class="lead mb-0">To partner with industries</p>
                            {/* <hr class="my-4" /> */}
                            <p className="">  in the designing and manufacturing of medical and dental 	equipments  and related accessories to facilitate the provision of quality  orthodontic care to the less privileged and the populace.
                            </p>
                          </div>
                          {/* xs screens ended */}

                          <div className="d-none d-sm-block col-sm-7 col-md-5 box-left rounded text-right rgba-blue-grey-strong white-text mt-5 mx-3 pt-3">
                            <img src={aim} alt="aim" className="float-right ml-2" />
                            <p class="lead mb-0"> To institute prizes</p>
                            <p className="">  and awards to orthodontic students and post-graduate residents to 	inspire scholarships and excellences for the advancement of orthodontic care.
                            </p>
                          </div>

                          <img src={serveBg} className="pb-2 img-fluid height-75" alt="man examining pupil" />

                          {/* for xs screens */}
                          <div className="d-block d-sm-none mt-1">
                            <img src={aim} alt="aim" className="float-right ml-2" />
                            <p class="lead mb-0"> To institute prizes</p>
                            <p className="">  and awards to orthodontic students and post-graduate residents to 	inspire scholarships and excellences for the advancement of orthodontic care.
                            </p>
                          </div>
                          {/* xs screens ended */}

                          <MDBBtn color="blue" size="lg" className="mr-2" href="/About">Learn more
                            <MDBIcon className="ml-2" icon="lightbulb" />
                          </MDBBtn>
                        </div>
                      </div>

                      {/* Section Advancement */}
                      <div className="col-12 bg-half-dark my-5">
                        <p class="d-none d-sm-block display-3 text-capitalize mt-0 ml-2 ml-sm-5 pr-2 text-primary"> Advancement</p>
                        <p class="d-block d-sm-none h1 text-capitalize mt-0 ml-sm-5 px-2 text-primary"> Advancement</p>
                        <img src={dentalLight} className="img-dental-light d-none d-lg-block img-jumbo-3" alt="hand holding tube sample" />
                        <div className="col-12 col-sm-10">
                          <div className="col-12 col-sm-6 pl-0 pl-sm-2">
                            <img src={aim} alt="aim" className="float-left ml-0 ml-sm-5 ml-lg-4 mr-2" />
                            <p class="lead mb-0 ml-0 ml-sm-5 mt-2">To carry out research</p>
                            {/* <hr class="my-4" /> */}
                            <p className="ml-0 ml-sm-5 ml-lg-4"> and also support funding of cutting-edge and evidence-based 	research in orthodontics for the advancement of orthodontic care for the less privileged 	and the general public.
                            </p>
                          </div>
                          <div className="d-none d-sm-block col-sm-7 col-md-5 col-lg-7 box-right-3 rounded text-left rgba-blue-grey-strong white-text mt-5 mx-3 pt-3">
                            <img src={aim} alt="aim" className="float-left mr-2" />
                            <p class="lead mb-0">To provide access</p>
                            <p className="">  to electronic and print volumes of various journals of orthodontics	and dentofacial orthopaedics and other related medical and dental scientific 	literatures for the advancement of orthodontic care for the less privileged and the 	general public.
                            </p>
                          </div>

                          {/* for xs screens */}
                          <div className="d-block d-sm-none">
                            <img src={aim} alt="aim" className="float-left mr-1" />
                            <p class="lead mb-0">To provide access</p>
                            <p className="">  to electronic and print volumes of various journals of orthodontics	and dentofacial orthopaedics and other related medical and dental scientific 	literatures for the advancement of orthodontic care for the less privileged and the 	general public.
                            </p>
                          </div>
                          {/* xs screens ended */}

                          <div className="d-none d-sm-block col-8 col-sm-7 col-md-5 col-lg-7 box-left-3 rounded text-left rgba-blue-grey-strong white-text mt-5 mx-3 pt-3">
                            <img src={aim} alt="aim" className="float-left mr-2" />
                            <p class="lead mb-0">To publish journals </p>
                            {/* <hr class="my-4" /> */}
                            <p className="">  in orthodontics and dentofacial orthopaedics and other scientific 	papers and monographs including films and video tapes in orthodontics and related 	subjects for the advancement of orthodontic care for the less privileged and the general 	public.
                            </p>
                          </div>
                          <img src={researchBg} className="pb-2 img-fluid" alt="test tubes" />

                          {/* for xs screens */}
                          <div className="d-block d-sm-none">
                            <img src={aim} alt="aim" className="float-left mr-1 mr-sm-2" />
                            <p class="lead mb-0">To publish journals </p>
                            {/* <hr class="my-4" /> */}
                            <p className="">  in orthodontics and dentofacial orthopaedics and other scientific 	papers and monographs including films and video tapes in orthodontics and related 	subjects for the advancement of orthodontic care for the less privileged and the general 	public.
                            </p>
                          </div>
                          {/* xs screens ended */}

                          <MDBBtn color="blue" size="lg" className="mr-0 mr-sm-5" href="/About">Learn more
                            <MDBIcon className="ml-2" icon="lightbulb" />
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBRow>
                  </MDBContainer>
                  <hr class="mb-2 mx-5 px-5" />

                  <MDBContainer fluid className=" pl-0 py-5 my-5 bg-gallery">
                    <div className="row  d-flex align-items-center">
                      <div className="col-10 col-md-8 py-3 bg-dark mx-auto align-middle">
                        <Slider {...gallery_settings} className="bg-dark">
                          <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[0]} alt="crowding"
                              onClick={() => this.setState({ photoIndex: 1, isOpen: true})}/>
                          </div>
                          <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[1]} alt="diastema"
                              onClick={() => this.setState({ photoIndex: 2, isOpen: true})}/>
                            {/* <img className="w-75 mx-auto" src="http://profajayibraces.org/gallery/counsel5.png" alt="Counselling session" /> */}
                          </div>
                          <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[2]} alt="anterior open bite"
                              onClick={() => this.setState({ photoIndex: 3, isOpen: true})}/>
                          </div>
                          {/* <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[4]} alt="anterior cross"
                              onClick={() => this.setState({ photoIndex: 4, isOpen: true})}/>
                          </div> */}
                          <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[3]} alt="unerupted"
                              onClick={() => this.setState({ photoIndex: 4, isOpen: true})} />
                          </div>
                          <div className="bg-dark">
                            <img className="w-100 mx-auto px-3" src={images[4]} alt="anterior open bite"
                              onClick={() => this.setState({ photoIndex: 5, isOpen: true })}/>
                          </div>
                        </Slider>
                      </div>
                      <div className="d-none d-md-block col-0 col-md-4 pr-0 text-lora text-center d-flex align-items-center">
                        <div className="d-none d-md-block bg-dark gallery-border p-0 p-md-4 ml-auto">
                          <h3 className="text-white d-none d-lg-block">Some Orthodontic cases</h3>
                          <MDBBtn color="blue" size="lg" className="" href="/why">Learn more
                            <MDBIcon className="ml-2" icon="lightbulb" />
                          </MDBBtn>
                        </div>
                      </div>
                      <MDBBtn color="blue" size="lg" className="d-md-none mx-auto" href="/why">Learn More
                        <MDBIcon className="ml-2" icon="lightbulb" />
                      </MDBBtn>
                    </div>
                    {isOpen && (
                      <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                          })
                        }
                      />
                    )}
                  </MDBContainer>

                  <hr class="mb-2 mx-5 px-5" />

                  <MDBContainer fluid className="my-5">
                    <div className="col-12 my-5 text-center">
                      <h1 className="text-lora text-capitalize"> Why Get Involved? </h1>
                      <hr class="mb-2 mx-5 px-5" />
                      <MDBRow>
                        <MDBCol>
                          <p>
                            Orthodontic problems are of public health importance and they do constitute a great concern as the ability to chew one’s food without difficulties, communicate orally and pronounce words correctly, breathe normally, smile with pleasing facial appearance, all together enhance productive social interactions and quality of life for all individuals.
                          </p>
                          <p>
                            It is obvious that one cannot be truly healthy without good oral health and smiles. Thankfully, malocclusion and most of these occlusal variants illustrated can be treated by a Specialist / Consultant Orthodontist. Orthodontists are primarily Dental Surgeons who had undergone at least 3 - 6 years of University Post-graduate Master’s programme and or Residency training at the University Teaching Hospital.
                          </p>

                          <MDBBtn color="blue" size="lg" className="mr-0 mx-sm-5" href="/why">Learn more
                            <MDBIcon className="ml-2" icon="lightbulb" />
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBContainer>

                  <MDBContainer fluid classname="mt-5 mb-0 pb-0 bg-gray">
                    <div className="text-center bg-gray py-3">
                      <a href="http://www.contemporarydentalclinic.com">
                       <img className="text-center mt-sm-2" src={cdcLogo} alt="Contemporary Dental Clinic logo" />
                      </a>
                      <h3 className="text-lora text-oblique text-center mb-1">Contemporary Dental Clinic</h3>
                      <p className="small pr-1">  Partner   </p>
                    </div>
                  </MDBContainer>

                  {/* <MDBContainer classname="my-5">
                    <div className="col-12 pt-5 text-center">
                      <h1 className="mt-5 text-lora text-capitalize"> Partner </h1>
                    </div>
                      <div className="bg-dark pt-5 pb-2 col-4 mx-auto">
                        <div className="col-6 py-5  bg-partners mx-auto text-center">
                          <img className="" src={cdcLogo} alt="" />
                        </div>
                        <h3 className="text-white text-center my-3">Contemporary Dental Clinic</h3>
                      </div>
                  </MDBContainer> */}
                </main>

              </div>
  )
}
}

export default withRouter(Home);
