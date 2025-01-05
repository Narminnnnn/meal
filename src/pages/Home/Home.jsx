import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  const visibility = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/recipes");
      setData(res.data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    visibility();
  }, []);
  return (
    <>
      <section className="sectionOne">
        <div className="containerSecone">
          <h2 className="welcome">Welcome to Meal</h2>
          <button className="reserve">Reserve a table</button>
        </div>
      </section>

      <section className="sectionTwo">
        <div className="containerSectwo">
          <div className="text">
            <h2 className="find">Find your best food</h2>
            <p className="free">
              Free Website Template For Restaurants Made by Colorlib
            </p>
          </div>

          <div className="pictureAndImages">
            <div className="part">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/meal/images/img_1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="about">
                <div className="textAbout">
                  <span className="type"> Vegies</span>
                  <h3 className="name">Beef Empanadas</h3>
                  <p className="info">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
                <div className="learn">
                  <p className="lrn">
                    Learn more <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="part">
              <div className="about">
                <div className="textAbout">
                  <span className="type"> Vegies</span>
                  <h3 className="name">Beef Empanadas</h3>
                  <p className="info">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
                <div className="learn">
                  <p className="lrn">
                    Learn more <FaArrowRight />
                  </p>
                </div>
              </div>
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/meal/images/img_3.jpg.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="part">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/meal/images/img_2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="about">
                <div className="textAbout">
                  <span className="type"> Vegies</span>
                  <h3 className="name">Beef Empanadas</h3>
                  <p className="info">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
                <div className="learn">
                  <p className="lrn">
                    Learn more <FaArrowRight />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionThree">
        <div className="containerSecThree">
          <div className="text">
            <h2 className="find">Menu</h2>
            <p className="free">
              Free Website Template For Restaurants Made by Colorlib
            </p>
          </div>

          <div className="meal">
            <ul>
              <li>
                <a href="">Breakfast</a>
              </li>
              <li>
                <a href="">Brunch</a>
              </li>
              <li>
                <a href="">Dinner</a>
              </li>
            </ul>
          </div>
         <div className="axios-boxs">
          {data.map((item)=>(
            <div className="axios-box"  key={item.id}>
            <div className="cart">
              <div className="image">
                <img
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="cartText">
                <h3 className="cartName">{item.name}</h3>
                <p className="cartAbout">
                  {item.instructions}
                </p>
              </div>
              <div className="price">
                <p className="dollar">{item.rating} </p>
              </div>
            </div>
          </div>
          ))

          }
         
         </div>
        </div>
      </section>

      <section className="sectionFour">
        <div className="containerSecFour">
          <div className="text">
            <h2 className="find">Get In Touch</h2>
          </div>
          <form className="forum" action="#">
            <div className="formPart">
              <div className="inputGroup">
                <label htmlFor="personName">Name</label>
                <div className="inp">
                  <input
                    id="personName"
                    type="text"
                    placeholder="Enter your name"
                  />

                  <IoPerson className="icon" />
                </div>
              </div>

              <div className="inputGroup">
                <label htmlFor="personEmail">Email</label>
                <div className="inp">
                  <input
                    id="personEmail"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <IoIosMail className="icon" />
                </div>
              </div>

              <div className="inputGroup">
                <label htmlFor="personPhone">Phone</label>
                <div className="inp">
                  <input
                    id="personPhone"
                    type="tel"
                    placeholder="Enter your phone"
                  />
                  <MdOutlinePhone className="icon" />
                </div>
              </div>
            </div>

            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="control"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="submitButton">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
