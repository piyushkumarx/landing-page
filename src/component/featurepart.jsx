import "./featurepart.css";

function Featurepart() {
  return (
    
    
      <div className="featureBox">
        <div class="box1 boxes">
          <img src="./icon-snappy-process.svg" alt="icon-snappy" />
          <h4>Snappy Process</h4>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>

        <div class="box2 boxes">
          <img src="./icon-affordable-prices.svg" alt="icon-affordable" />
          <h4>Affordable Prices</h4>
          <p id="affordablePara">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>

        <div class="box3 boxes">
          <img src="./icon-people-first.svg" alt="icon-people" />
          <h4>People First</h4>
          <p id="firstPara">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
  
  );
}

export default Featurepart;
