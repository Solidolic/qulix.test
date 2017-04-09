import React from 'react';
import styles from './App.css';
import MessageList from './components/messageList.js';
import ActionsPanel from './components/actionsPanel.js';
import Api from './components/api.js';
import Promise from 'bluebird';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		user: null,
		messages: []
		};
  }
  
  componentWillMount(){
    window.onAuthorize = function (googleUser) {
	let profile = googleUser.getBasicProfile();
      this.setState({
	  user: {
		id: profile.getId(),
		fullName: profile.getName(),
		givenName: profile.getGivenName(),
		familyName: profile.getFamilyName(),
		imageURL: profile.getImageUrl(),
		email: profile.getEmail(),
		access_token: googleUser.getAuthResponse().access_token
	  }}); 
	  this.getMailList();
	  delete window.onAuthorize;
    }.bind(this); 
  }
  
  getMailList = () =>{
	Api.getMessagesList(this.state.user)
	.then(data => {
		return Promise.all(data.messages.map(d => Api.getMessageData(d.id, this.state.user.access_token)))		
	})
	.then(data => {
		this.setState({messages: data})
	});
  }
  
  searchHandler = (value) => {
	Api.getMessagesList(this.state.user, value).then(data => {
		Promise.all(data.messages.map(d => Api.getMessageData(d.id, this.state.user.access_token)))
			.then(data => {
				this.setState({messages: data})
			})
		
	});
  }
  
  render() {
    return (
      <div className={styles.app}>
        <div className="g-signin2" data-onsuccess="onAuthorize" data-theme="dark"></div>
		<ActionsPanel searchCallback={this.searchHandler}/>
		<MessageList data={this.state.messages}/>
      </div>
    );
  }
}
