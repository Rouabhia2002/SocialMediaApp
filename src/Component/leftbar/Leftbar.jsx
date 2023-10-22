import "./leftbar.scss"
import pic1 from "../../assests/1.png";
import pic2 from "../../assests/2.png";
import pic3 from "../../assests/3.png";
import pic4 from "../../assests/4.png";
import pic5 from "../../assests/5.png";
import pic6 from "../../assests/6.png";
import pic7 from "../../assests/7.png";
import pic8 from "../../assests/8.png";
import pic9 from "../../assests/9.png";
import pic10 from "../../assests/10.png";
import pic11 from "../../assests/11.png";
import pic12 from "../../assests/12.png";
import pic13 from "../../assests/13.png";





export const Leftbar = () => {
  return (
    <div className="Leftbar">
      <div className="container">
      <div className="menu">
      <div className="user">
        <img src="https://picsum.photos/200/200" alt="" />
        <span>AMIRA</span>

      </div>

        <div className="item">
        <img src={pic1} alt=""/>
        <span>Friends</span>
        </div>

        <div className="item">
        <img src={pic2}  alt="" />
        <span>Groups</span>
        </div>

        <div className="item">
        <img src={pic3} alt="" />
        <span>Marketplace</span>
        </div>

        <div className="item">
        <img src={pic4} alt="" />
        <span>Watch</span>
        </div>

        <div className="item">
        <img src={pic5} alt="" />
        <span>Memories</span>
        </div>

        </div>
        <hr/>


        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={pic6} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={pic7} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={pic8} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={pic9} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={pic10} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={pic11} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={pic12} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={pic13} alt="" />
            <span>Courses</span>
          </div>
        </div>




      </div>



    </div>
  )
}

export default Leftbar