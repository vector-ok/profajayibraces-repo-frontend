import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../extra-styling/gallery.css";

import gallery from '../assets/images/gallery.png';

const images = [
  "http://profajayibraces.org/gallery/counsel1.png",
  "http://profajayibraces.org/gallery/counsel2.png",
  "http://profajayibraces.org/gallery/counsel3.png",
  "http://profajayibraces.org/gallery/counsel4.png",
  "http://profajayibraces.org/gallery/counsel5.png",
  "http://profajayibraces.org/gallery/presentation1.png",
  "http://profajayibraces.org/gallery/presentation2.png",
  "http://profajayibraces.org/gallery/presentation3.png",
  "http://profajayibraces.org/gallery/presentation4.png",
  "http://profajayibraces.org/gallery/presentation6.png",
  "http://profajayibraces.org/gallery/students1.png",
  "http://profajayibraces.org/gallery/service1.png"
  // "http://profajayibraces.org/gallery/woman.png"
];

const smallImages = [
  "http://profajayibraces.org/gallery/counsel1.png",
  "http://profajayibraces.org/gallery/counsel2.png",
  "http://profajayibraces.org/gallery/counsel3.png",
  "http://profajayibraces.org/gallery/counsel4.png",
  "http://profajayibraces.org/gallery/counsel5.png",
  "http://profajayibraces.org/gallery/presentation1.png",
  "http://profajayibraces.org/gallery/presentation2.png",
  "http://profajayibraces.org/gallery/presentation3.png",
  "http://profajayibraces.org/gallery/presentation4.png",
  "http://profajayibraces.org/gallery/presentation6.png",
  "http://profajayibraces.org/gallery/students1.png",
  "http://profajayibraces.org/gallery/service1.png"
  // "http://profajayibraces.org/gallery/woman.png"
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="pb-5">
        <MDBContainer className="bg-info pt-1 mb-5" fluid>
          <div className="row my-5 pt-5">
            <div className="col-12 d-flex px-0">
              <img className="d-none d-sm-block img-fluid w-25 float-left" src={gallery} alt="calendar cube" />
              <img className="d-block d-sm-none img-fluid img-xs-programs float-left mt-3" src={gallery} alt="calendar cube" />
              <div className="align-self-center text-center">
                <h1 className="d-none d-sm-block display-4 pl-4">Gallery</h1>
                <h2 className="d-block d-sm-none display-5-responsive pl-2 mt-3">Gallery</h2>
              </div>
            </div>
          </div>
        </MDBContainer> 

        <MDBContainer>
          <div className="mdb-lightbox no-margin">
            <MDBRow>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[0]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 0, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[1]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 1, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[2]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 2, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[3]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 3, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[4]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 4, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[5]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 5, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[6]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 6, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[7]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 7, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[8]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 8, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[9]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 8, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[10]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 8, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[11]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 8, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
            </MDBRow>
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
      </div>
    );
  }
}

export default Gallery;
