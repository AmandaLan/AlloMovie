import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import classes from "./Footer.module.css"


export default function Footer() {


    return (
        <IconContext.Provider value={{ color: "rgb(255, 174, 0)", size: "3rem" }}>
            <div className={classes.footer}>
                <div className={classes.lines}>

                    <AiOutlineFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineMail />
                    <AiOutlineLinkedin />

                </div>

            </div>
        </IconContext.Provider>

    )
}
