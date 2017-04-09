import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';


export default class Mail extends React.Component{
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
			
    render() {
        return (
            <div>
                <Card>
				<CardHeader title="Avatar"	subtitle="Subtitle"/>
					<CardText>
						{this.props.snippet}
					</CardText>
				</Card >
            </div>
        )
    }
}

Mail.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};