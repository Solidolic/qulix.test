import React from 'react';
import Api from './api.js';
import Mail from './mail.js';


export default class MessagesList extends React.Component {
  constructor(props) {
    super(props);
	this.state = {messages: []};
  }
  
  
  
  render() {
    return ( this.props.data.length ? (
		<div>
            {
                this.props.data.map(function (mail, i) {
                    return (
                        <Mail
                            key={i}
							snippet={mail.snippet}
                        />
                    )
                })
            }
        </div>) : null
    );
  }
}