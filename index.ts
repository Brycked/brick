import 'dotenv/config'
import { Client } from './handlers'

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'DIRECT_MESSAGES'
    ],
    partials: [
        'CHANNEL'
    ],

    allowedMentions: {users: [], roles: [], repliedUser: false},
    
    prefix: '!',
    owners: ['691572882148425809'],
    testGuilds: ['968171159776559174']
})

client.login(process.env.TOKEN)