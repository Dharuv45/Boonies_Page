import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <h1>BOONIES</h1>
        <button className="button">BOOK NOW</button>
      </div>

      <div className="img">
        <img
          className="imgR"
          src="https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash Image"
        />
        <div className="blogs">
          <h1> Blogs</h1>
          <h3>Home blogs</h3>
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="search" className="searchinput" />
        <button className="searchbutton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="Card Image"
            className="imgq"
          />
          <h1 className="cardinfo">Card Title</h1>
          <p className="cardinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente neque suscipit labore tempora quo assumenda eos, vero delectus doloremque voluptas, officiis nihil. Vitae nam, nesciunt beatae incidunt qui soluta?</p>
        </div>
        <div className="card">
          <img
            src="https://plus.unsplash.com/premium_photo-1718204438280-484021f08ca1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="imgq"
          />
          <h1 className="cardinfo">Card Title</h1>
          <p className="cardinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente neque suscipit labore tempora quo assumenda eos, vero delectus doloremque voluptas, officiis nihil. Vitae nam, nesciunt beatae incidunt qui soluta?</p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1721297014365-5f8e043e87a5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="imgq"
          />
          <h1 className="cardinfo">Card Title</h1>
          <p className="cardinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente neque suscipit labore tempora quo assumenda eos, vero delectus doloremque voluptas, officiis nihil. Vitae nam, nesciunt beatae incidunt qui soluta?</p>
        </div>
      </div>
      <div className="container">
        <div className="card1">
          <img
            src="https://images.unsplash.com/photo-1721297015739-6737bb24089c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="imgw"
          />
          <h1 className="cardinfo">Card Title</h1>
          <p className="cardinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente neque suscipit labore tempora quo assumenda eos, vero delectus doloremque voluptas, officiis nihil. Vitae nam, nesciunt beatae incidunt qui soluta?</p>
        </div>
        <div className="card1">
          <img
            src="https://images.unsplash.com/photo-1721297015479-452516dfba1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="imgw"
          />
          <h1 className="cardinfo">Card Title</h1>
          <p className="cardinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sapiente neque suscipit labore tempora quo assumenda eos, vero delectus doloremque voluptas, officiis nihil. Vitae nam, nesciunt beatae incidunt qui soluta?</p>
        </div>
      </div>
      <div className="containerfooter">
        <div className="footer">
          <h1 className="footerinfo">BOONIES</h1>
          <h4 className="information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptatibus nisi accusamus deserunt, sapiente, ex dicta blanditiis
            provident asperiores fuga repellendus fugit nostrum temporibus
            dolor, illo delectus eveniet placeat pariatur?
          </h4>
        </div>
        <div className="footer">
          <h1 className="footerinfo">sitemap</h1>
          <h4 className="information">blogs</h4>
          <h4 className="information">contacuts</h4>
        </div>
        <div className="footer">
          <h1 className="footerinfo">ContactUs</h1>
          <h4 className="information">+91 1234567890</h4>
          <h4 className="information">boonies@gmail.com</h4>
        </div>
      </div>
      <div className="containerfooter1">
        <div className="socialmedia">
          <img
            src="data:image/png;base64,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"
            alt="facebook"
            className="socialmediaimg"
          />
          <img
            src="data:image/jpeg;base64,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"
            alt="instagram"
            className="socialmediaimg"
          />
        </div>
        <div className="line"></div>
        <div className="email">
          <h6 className="kuchbi">@TheBoonies.AI Right Dharuv</h6>
        </div>
      </div>
    </>
  );
}

export default App;
