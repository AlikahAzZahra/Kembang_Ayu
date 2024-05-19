import "../Styles/Reserved.css";

const Reserved = () => {
  return (
    <div className="reserved">
      <div className="reserved-inner">
        <div className="instance-parent">
          <div className="vector-parent">
            <b className="send">Send</b>
          </div>
          <div className="vector-group">
            <b className="send">Reset</b>
          </div>
        </div>
      </div>
      <div className="fill-in-the">Fill in the data correctly</div>
      <b className="kembang-ayu2">Kembang Ayu</b>
      <div className="our-service-wrapper7">
        <div className="our-service19">
          <div className="our-service20">
            <span className="our-service-txt-container2">
              <b>{` `}</b>
              <b className="reservation">{`reservation `}</b>
              <b className="data">Data</b>
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <input className="name" type="Name" placeholder="Name" />
      </div>
      <div className="rectangle-group">
        <div className="group-child" />   
        <input className="name" type="Telepon" placeholder="Telepon" />
      </div>
      <div className="rectangle-container">
        <div className="group-child" />  
        <input className="name" type="Email" placeholder="Email" />
      </div>
      <div className="rectangle-parent1">
        <div className="group-child" /> 
        <input className="name" type="Date" placeholder="Date" />
      </div>
      <div className="component-10">
        <div className="choose-one-of-our-service-parent">
          <div className="choose-one-of">Choose one of our service</div>
          <div class="dropdown">
            <button class="dropbtn">V</button>
            <div class="dropdown-content">
                <a href="#">SPA Treatment</a>
                <a href="#">Hair Treatment</a>
                <a href="#">Nails</a>
                <a href="#">Massaging The Face</a>
                <a href="#">Colagen Injections</a>
                <a href="#">Facial Mask</a>
            </div>
          </div>
        </div>
      </div>
      <div className="component-1">
        <div className="choose-one-of-our-service-parent">
          <div className="choose-one-of">Choose one of our branches</div>
          <div class="dropdown">
            <button class="dropbtn">V</button>
            <div class="dropdown-content">
                <a href="#">Green House Boutique</a>
                <a href="#">Indonesaian Kempiski</a>
                <a href="#">Ayyarta Hotel</a>
                <a href="#">Sambi Resort</a>
                <a href="#">JW Marriot</a>
                <a href="#">Katamaran</a>
                <a href="#">Grand Altuz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserved;
