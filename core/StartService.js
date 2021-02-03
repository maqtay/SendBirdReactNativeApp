import SendBird from 'sendbird';
import GLOBALS from '../globals';

class StartService {
    init(key) {
        return new Promise((resolve, reject) => {
            GLOBALS.client = new SendBird({appId: key});
            resolve(true);
        })
    }

    async auth(userid) {
        return new Promise((resolve, reject) => {
            GLOBALS.client.connect(userid, (user, error) => {
                if (error) {
                    reject(error);
                }
                GLOBALS.user = user;
                resolve();
            })
        })
        
    }
}

export default new StartService();