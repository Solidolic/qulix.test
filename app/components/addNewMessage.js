import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';


export default class AddNewMessage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {open: false};
	};

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	};
	
	handleOpen() {
	    this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
			
    render() {
	
	const style = {
		position: 'relative',
	   	cursor: 'pointer',
		top: 0,
		bottom: 0,
		right: 0,
		left: '300%',
	};
	const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];
		
        return (
            <div>
                <RaisedButton
					label="New item"
					labelPosition="after"
					primary={true}
					icon={<ActionAdd />}
					style={style}
					onTouchTap={::this.handleOpen}
				/>
				<Dialog
                    title="New message"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField
                        hintText="Item name"
                        type="Item name"
                    /><br />
                    <TextField
                        hintText="Text"
                        type="Text"
                    />
                </Dialog>
              
            </div>
        )
    }
}

AddNewMessage.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};