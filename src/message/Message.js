import React from 'react'
import './Message.css';

const Message = ({isInfo, className, children}) => {
    let classes = className || '';
    classes += 'message';
    classes += isInfo ? ' is-info' : '';
    return(
        <article className={classes}>
            <div class="message-header">
                <p>Hello World</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {children}
            </div>
        </article>
    )
}

export default Message;