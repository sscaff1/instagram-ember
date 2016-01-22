import {configurable} from 'torii/configuration';
import Oauth2Bearer from 'torii/providers/oauth2-bearer';
import config from '../config/environment';

export default Ember.Object.extend({
	baseUrl: 'https://api.instagram.com/oauth/authorize/',
  responseParams: {
    client_id: '5462c767598944d29043e26c86fc28dc'
  },
  open() {
		const instagram = config.torii.providers['instagram-connect'];
    const url = this.get('baseUrl') + '?client_id=' + instagram.appId + '&redirect_uri=' + instagram.redirectUri + '&response_type=token';
		const responseParams = this.get('responseParams');
    return this.get('popup').open(url, responseParams).then((authData) => {
      console.log(authData);
    });
  }
});
