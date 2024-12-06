import React from "react";
import MessageStyles from "../styles/Message.module.css";

const Message = ({user}) => {
    return (
        <div className={MessageStyles.messageContainer}>
        <p>Gracias {user}, te contactaremos cuanto antes vía mail</p>
        </div>
    )

}

export default Message;