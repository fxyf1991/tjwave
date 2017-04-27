module.exports = {

    sense:{
	 thinkURL : 'https://tjbot-humix.mybluemix.net',
         senseId  : 'humix-tj2'
    },
    'humix-conversation-module':{

        lang: 'cht', // 'en', 'cht' or 'chs'
        'stt-engine': 'google', // 'watson' or 'google',
        'tts-engine': 'watson', // 'watson' or 'itri' or 'iflytek'
        stt: {
            watson: {
                username: 'c8090707-bcda-49e0-98f9-172c40420c1a',
                passwd: 'cZGWayUpvsSJ'
            },
            google: {
                username: '',
                passwd: '',
                googleCredentialFile: '/home/pi/.humix/stt.json', //the location of your google auth credential file.
                googleProjectName: 'api-project-400451087256', //the project name which create your credential file.
                googleLan: 'cmn-Hant-TW', // en-Us or cmn-Hant-TW
            }
        },
        tts: {
            watson: {
                username: '8e0177e5-f735-4861-bf51-b164cb6e26e2',
                passwd: '9CeX6rQkqJ0P'
            },
            iflytek: {
                appid: '<app_id>'
            },
            itri: {
                username: 'as93717913',
                passwd: 'adsl852',
                speaker: 'Bruce',
            }
        }
    }
}
