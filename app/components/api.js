export default {
	getMessagesList: function(obj, value){
		return fetch('https://content.googleapis.com/gmail/v1/users/me/messages?access_token=' + obj.access_token + (value ? '&q=' + value : '')).then(data => data.json())
	},
	
	getMessageData(id, token){
		return fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${id}?access_token=${token}`).then(data => data.json())
	}
}