import profilepic from "./assets/Shashank_Shekhar_Photo.png";
function Card() {
  return (
    <div className="Card">
      <img className="card-img" src={profilepic} alt="Photo" />
      <h2 className="Card-title">Shashank Shekhar Shukla</h2>
      <p className="Card-text">I am Learning React .</p>
    </div>
  );
}
export default Card;
