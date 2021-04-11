import Link from "next/link";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Promotional = () => {
  return (
    <div className="container-fluid bg-dark promotional-sec">
      <div className="promotional-sec-button">
        <div className="row">
          <div className="col-md-6 desc">
            <p>
              <Link href="/contact">
                <Button
                  inverted
                  color="orange"
                  size="massive"
                  icon
                  labelPosition="right"
                >
                  Contact Us
                  <Icon name="right arrow" />
                </Button>
              </Link>
            </p>
          </div>
          <div className="col-md-6 prom-button">
            <h2
              className="text-center"
              style={{ color: "#F6852C", fontFamily: "Roboto" }}
            >
              Feel free to Ask your quarries <br /> about Non-surgical Hair
              Replacement
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
