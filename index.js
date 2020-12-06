// initial depedensies
const {MessageEmbed, Client} = require('discord.js');
const client = new Client();
const axios = require('axios')

const token ='Nzg0NjE5ODU1MzE5NDAwNDU4.X8r8Lw.jPSyY7_8s2jZukagVdkahaSPtVI'

client.login(token);

const prefix = '!';



client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case 'Panduan':
      let msg = new MessageEmbed()
          .addField('Panduan Penggunaan Covid Tracker Discord Bot', 'Made by Muhamad Zainal Arifin')
          .addField('!corona : nama negara' , 'Menampilkan data covid pada negara tersebut')
      message.channel.send(msg)
      break;
    case 'Corona':
     if(args[1]){
       let country = args[1];
       axios.get(`https://covid19.mathdro.id/api/countries/${country}`).then((response) => {
         console.log(response)
          const {confirmed, recovered, deaths} = response.data
          let msg = new MessageEmbed()
                    .addField('Show All Data Covid19 in this Country', country)
                    .addField('Confirmed', confirmed.value)
                    .addField('Deaths', deaths.value)
                    .addField('Recovered', recovered.value)
                    .setFooter('Made By Muhamad Zainal Arifin')
                    .setColor('#ddd')
            message.channel.send(msg)
       }).catch((err) => {
         console.log(err)
       });
     }
    break

    default:
      break;
  }
});

client.on('ready', () => {
  console.log('Bot actived')
})
