import React from "react";
import "./Help.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
// import { LuUsers } from "react-icons/lu";
import { SiFuturelearn } from "react-icons/si";
import { IoBuildSharp } from "react-icons/io5";
import { BiSolidHomeCircle } from "react-icons/bi";
// import { BiBrain } from "react-icons/bi";
import { TbGrowth } from "react-icons/tb";
import { FaGooglePlay } from "react-icons/fa";

const Help = () => {
  return (
    <div className="help">
      <div className="help-left">
        <h3 className="help_main_head">BUYING A HOME</h3>
        <h2 className="help_main_head1">
          Your Path To Homeownership And Property Investment
        </h2>
        <div className="h-left-main">
          <div className="h-left-h">
            <div className="h_icon_top">
              <MdOutlineMapsHomeWork className="h-icon" />
            </div>
            <div>
              <h3 className="help_txt">Achieve Your Homeownership Dreams</h3>
              <p className="help_txt_inner">
                At Mortgage Titans, we understand that buying a home is one of
                the most significant financial decisions you’ll ever make. We
                are here to simplify the process, providing you with
                professional guidance and tailored mortgage solutions to turn
                your dream of owning a home into reality.
              </p>
            </div>
          </div>
          <div className="h-left-h">
            <div className="h_icon_top">
              <SiFuturelearn className="h-icon" />
            </div>
            <div className="help_txt">
              <h3 className="help_txt">Invest in Your Future</h3>
              <p className="help_txt_inner">
                Real estate is a powerful investment vehicle. Whether you’re a
                seasoned investor or just starting, we offer strategic advice
                and innovative mortgage solutions to help you build and expand
                your property portfolio.
              </p>
            </div>
          </div>
          <div className="h-left-h">
            <div className="h_icon_top">
              <IoBuildSharp className="h-icon" />
            </div>
            <div className="help_txt">
              <h3 className="help_txt">Enjoy the Comfort of Your Own Home</h3>
              <p className="help_txt_inner">
                Owning your own home provides a sense of stability and comfort.
                We assist you in finding the best mortgage options to ensure
                your home is a place of peace and security.
              </p>
            </div>
          </div>
          <div className="h-left-h">
            <div className="h_icon_top">
              <BiSolidHomeCircle className="h-icon" />
            </div>{" "}
            <div className="help_txt">
              <h3 className="help_txt">Build Wealth Through Equity</h3>
              <p className="help_txt_inner">
                Every mortgage payment builds your home equity, enhancing your
                financial security. We provide you with the best options to
                ensure your investment grows over time.
              </p>
            </div>
          </div>
          <div className="h-left-h">
            <div className="h_icon_top">
              <TbGrowth className="h-icon" />
            </div>{" "}
            <div className="help_txt">
              <h3 className="help_txt">Secure and Grow Your Investment</h3>
              <p className="help_txt_inner">
                With our deep industry knowledge and access to over 40 lenders,
                we ensure you secure the best rates and terms. While we provide
                comprehensive mortgage assistance, we do not offer financial
                advice.
              </p>
            </div>
          </div>
          {/* <div className="h-left-h">
            <div className="h_icon_top">
              <FaGooglePlay className="h-icon" />
            </div>
            <div>
              <h3 className="help_txt">Build Credit</h3>
              <p className="help_txt_inner">
                Our plan dolor sit amet seeturlit sed dolor sit ameolor sit
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="help-right">
        <img
          src="https://themes.hibootstrap.com/levix/wp-content/uploads/2021/09/help.png"
          alt="help"
        />
      </div>
    </div>
  );
};

export default Help;
