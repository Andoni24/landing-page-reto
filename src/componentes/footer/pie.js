import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <footer className="text-center text-white">
      <div className="container">
        {/* <!--LINKS--> */}
        <section className="pt-3 links-section">
            {/* <!--LINK 1--> */}
          <div className="row text-center d-flex justify-content-center pt-5 links">
            <div className="col-md-2 link">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#nosotros" className="text-white">NOSOTROS</a>
              </h6>
            </div>
            {/* <!--LINK 2--> */}
            <div className="col-md-2 link">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#servicios" className="text-white">SERVICIOS</a>
              </h6>
            </div>
            {/* <!--LINK 3--> */}
            <div className="col-md-2 link">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#contactanos" className="text-white">CONTACTANOS</a>
              </h6>
            </div>
          </div>
        </section>
        {/* <!--Linea blanca separador--> */}
        <hr className="my-5" />
        {/* <!--Descripcion--> */}
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti
                dicta, aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        {/* <!--Social--> */}
        <section className="text-center pb-3 icons">
            {/* <!--SOCIAL 1--> */}
          <a href="" className="text-white me-4">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          {/* <!--SOCIAL 2--> */}
          <a href="" className="text-white me-4">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* <!--SOCIAL 3--> */}
          <a href="" className="text-white me-4">
          <FontAwesomeIcon icon={faGoogle} />
          </a>
          {/* <!--SOCIAL 4--> */}
          <a href="" className="text-white me-4">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <!--SOCIAL 5--> */}
          <a href="" className="text-white me-4">
            <FontAwesomeIcon icon={faMicrosoft} />
          </a>
          {/* <!--SOCIAL 6--> */}
          <a href="" className="text-white me-4">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
    </footer>
    );
}

export default Footer;