import React from 'react';
import Api from './api.js';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Seacrh from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import AddNewMessage from './addNewMessage.js';
import PropTypes from 'prop-types';
import styles from './actionsPanel.css';



export default class ActionsPanel extends React.Component{
	clickHandler(){
		let value = this.refs.input.input.value;
		
		this.props.searchCallback(value);
	};
	
	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };
	
    render() {
	const inputStyle = {
		marginLeft: '15px'
	}
        return (
            <div className={styles.actionsPanel}>
                <TextField ref="input" id="search" hintText="from:someuser@example.com" style={inputStyle}/>
				<IconButton onClick={::this.clickHandler} >
					<Seacrh />
				</IconButton>
				<AddNewMessage />
            </div>
        )
    }
}

ActionsPanel.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};