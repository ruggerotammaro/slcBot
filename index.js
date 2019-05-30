const Telegraf = require('telegraf');
const session = require('telegraf/session')
const { reply } = Telegraf
var opn= require('opn')
const bot =new Telegraf('884060941:AAHoQAdhDstOLm3cwTs5jp46nx_ziEP6vr8')
var id=new Array();

bot.start((message) => {
  console.log('started:', message.from.id)
  id.push(message.from.id);
  return message.reply('Benvenuto su Smart litio coin, verrai contattato quando ci saranno progressi , se sei interessato allo stato di avanamento del pregetto digita "progress"');
})

bot.on('text', (message) => {
  let m=message.message.text
  if(m="/progress"){
  message.reply('siamo nella fase di ICO')}})
bot.launch();

//send messagg
/*
if(bot.start()){
window.open("https://api.telegram.org/bot"+bot+"/sendMessage?chat_id="+id+"&text=Entra%20su%20metamask%20ci%20sono%20aggiornamenti")
}*/
function myFunc(arg) {
  for(var i=0;i<id.length;i++){
  opn('https://api.telegram.org/bot884060941:AAHoQAdhDstOLm3cwTs5jp46nx_ziEP6vr8/sendMessage?chat_id='+id[i]+'&text=%20https://www.google.it');
}}

setTimeout(myFunc, 5500, id);
