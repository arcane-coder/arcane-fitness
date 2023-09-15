import { IarcaneCoder } from "../svgs/logo";
import { Iinstagram, Itelegram, Iyoutube } from "../svgs/svg";
import './footer.css'


export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper-box first">
          <div className="info-box">
            <div className="name">
              <div className="svg-box"><IarcaneCoder /></div>
              <span>Arcane Coder</span>
            </div>
            <div className="detail">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, iste accusamus? Ut nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, necessitatibus aspernatur.
            </div>
          </div>
          <div className="social-box">
            <div className="svg-box"><Iinstagram /></div>
            <div className="svg-box"><Itelegram /></div>
            <div className="svg-box"><Iyoutube /></div>
          </div>
          <a href="#contact"><button className="btn btn-p">Hire Me</button></a>
        </div>
        <div className="wrapper-box second">
          <div className="column one">
            <div className="title">Links</div>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </div>
          <div className="column two">
            <div className="title">Links</div>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </div>
        </div>
        <div className="wrapper-box third">
          <div className="subs">
            <p>Subscribe to out newsletter</p>
            <label htmlFor="subs-email">
              <input type="email" id="subs-email" placeholder="Enter your email address" />
              <button className="btn btn-p">Subscribe</button>
            </label>
          </div>
          <div className="legal">
            <p>Created by <a href="#">Salman Mallick</a> <br />
              <a href="#">privacy-policy</a> <br />
              <a href="#">copyright&copy;</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}
