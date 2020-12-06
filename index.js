// initial depedensies
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios')

const token ='Nzg0NjE5ODU1MzE5NDAwNDU4.X8r8Lw.Mk20kElDnWfNGJrxBxUQMrnekUE'

client.login(token);

const prefix = '!';



client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
  // set param  
    if(args[0] === 'corona'){
      // check arg 1
      if(!args[1]){
        message.reply('Maaf perintah yang anda masukkan salah')
      }else{
        // set args 1 
        let country = args[1];
        axios.get(`https://covid19.mathdro.id/api/countries/${country}`).then(response => {
          console.log(response)
            // send response as a message to user
            message.channel.send(`
              Data Covid 19 - Covid Tracker Bot Discord with API Mathdroid
                Country : ${country},
                Recovered : ${response.data.recovered.value},
                Deaths: ${response.data.deaths.value},
                Confirmed: ${response.data.confirmed.value}
                Last Updated : ${response.data.lastUpdate}
            `)
        })
          .catch(error => console.log(error))
      }
    }
});

client.on('ready', () => {
  console.log('Bot actived')
})
