/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const con = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');

// Descriptions
const TRGAY = "Yanitladiginiz kisinin gay y�zdesini �l�er."
const ENGAY = "Measures the percentage of love of you towards the replied one."
const HIGAY = "???? ?????? ???????? ???? ???? ?????????? ?? ??????? ?? ????? ??"
const AZGAY = "Yanitladiginiz kisinin gay y�zdesini �l�er."

// Need Reply
const TRREP = "```Herhangi Bir Mesaji Yanitlaman Gerekiyor!```"
const ENREP = "```You Need To Reply Any Message!```"
const HIREP = "```???? ???? ?? ????? ?? ???? ???? ?? ???????? ??```"
const AZREP = "```Herhangi Bir Mesaji Yanitlaman Gerekiyor!```"

// Plugin Start 
if (con.LANG === 'TR') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'bmeter', fromMe: true, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adli Kisinin Gay Y�zdesi Hesaplaniyor ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Y�zdesi Hesaplandi!* ??????\n*Sonu�:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'bmeter', fromMe: false, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adli Kisinin Gay Y�zdesi Hesaplaniyor ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Y�zdesi Hesaplandi!* ??????\n*Sonu�:* ${r_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'bmeter', fromMe: true, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *???????? ?? ??????? ?? ???? ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*???????? ??????? ?? ????!* ??????\n*??????:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'bmeter', fromMe: false, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *???????? ?? ??????? ?? ???? ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*???????? ??????? ?? ????!* ??????\n*??????:* ${r_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'AZ') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'bmeter', fromMe: true, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adli Kisinin Gay Y�zdesi Hesaplaniyor ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Y�zdesi Hesaplandi!* ??????\n*Sonu�:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'bmeter', fromMe: false, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adli Kisinin Gay Y�zdesi Hesaplaniyor ??????*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";
            r_text[101] = "*%50*";
            r_text[102] = "*%51*";
            r_text[103] = "*%52*";
            r_text[104] = "*%53*";
            r_text[105] = "*%54*";
            r_text[106] = "*%55*";
            r_text[107] = "*%56*";
            r_text[108] = "*%57*";
            r_text[109] = "*%58*";
            r_text[110] = "*%59*";
            r_text[111] = "*%60*";
            r_text[112] = "*%61*";
            r_text[113] = "*%62*";
            r_text[114] = "*%63*";
            r_text[115] = "*%64*";
            r_text[116] = "*%65*";
            r_text[117] = "*%66*";
            r_text[118] = "*%67*";
            r_text[119] = "*%68*";
            r_text[120] = "*%69*";
            r_text[121] = "*%70*";
            r_text[122] = "*%71*";
            r_text[123] = "*%72*";
            r_text[124] = "*%73*";
            r_text[125] = "*%74*";
            r_text[126] = "*%75*";
            r_text[127] = "*%76*";
            r_text[128] = "*%77*";
            r_text[129] = "*%78*";
            r_text[130] = "*%79*";
            r_text[131] = "*%80*";
            r_text[132] = "*%81*";
            r_text[133] = "*%82*";
            r_text[134] = "*%83*";
            r_text[135] = "*%84*";
            r_text[136] = "*%85*";
            r_text[137] = "*%86*";
            r_text[138] = "*%87*";
            r_text[139] = "*%88*";
            r_text[140] = "*%89*";
            r_text[141] = "*%90*";
            r_text[142] = "*%91*";
            r_text[143] = "*%92*";
            r_text[144] = "*%93*";
            r_text[145] = "*%94*";
            r_text[146] = "*%95*";
            r_text[147] = "*%96*";
            r_text[148] = "*%97*";
            r_text[149] = "*%98*";
            r_text[150] = "*%99*";
            r_text[151] = "*%100*";
            

            var i = Math.floor(152*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Y�zdesi Hesaplandi!* ??????\n*Sonu�:* ${r_text[i]}` }
            )
        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'bmeter', fromMe: true, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating how much  your heart was broken by * ' + '@' + message.reply_message.jid.split('@')[0] + ' 💔', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";
            r_text[101] = "*%50*";
            r_text[102] = "*%51*";
            r_text[103] = "*%52*";
            r_text[104] = "*%53*";
            r_text[105] = "*%54*";
            r_text[106] = "*%55*";
            r_text[107] = "*%56*";
            r_text[108] = "*%57*";
            r_text[109] = "*%58*";
            r_text[110] = "*%59*";
            r_text[111] = "*%60*";
            r_text[112] = "*%61*";
            r_text[113] = "*%62*";
            r_text[114] = "*%63*";
            r_text[115] = "*%64*";
            r_text[116] = "*%65*";
            r_text[117] = "*%66*";
            r_text[118] = "*%67*";
            r_text[119] = "*%68*";
            r_text[120] = "*%69*";
            r_text[121] = "*%70*";
            r_text[122] = "*%71*";
            r_text[123] = "*%72*";
            r_text[124] = "*%73*";
            r_text[125] = "*%74*";
            r_text[126] = "*%75*";
            r_text[127] = "*%76*";
            r_text[128] = "*%77*";
            r_text[129] = "*%78*";
            r_text[130] = "*%79*";
            r_text[131] = "*%80*";
            r_text[132] = "*%81*";
            r_text[133] = "*%82*";
            r_text[134] = "*%83*";
            r_text[135] = "*%84*";
            r_text[136] = "*%85*";
            r_text[137] = "*%86*";
            r_text[138] = "*%87*";
            r_text[139] = "*%88*";
            r_text[140] = "*%89*";
            r_text[141] = "*%90*";
            r_text[142] = "*%91*";
            r_text[143] = "*%92*";
            r_text[144] = "*%93*";
            r_text[145] = "*%94*";
            r_text[146] = "*%95*";
            r_text[147] = "*%96*";
            r_text[148] = "*%97*";
            r_text[149] = "*%98*";
            r_text[150] = "*%99*";
            r_text[151] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Your heart was broken by*` + '@' + message.reply_message.jid.split('@')[0] + ` and your hearts health is reduced to :* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'bmeter', fromMe: false, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating how much  your heart was broken by * ' + '@' + message.reply_message.jid.split('@')[0] + ' 💔', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";
            r_text[101] = "*%50*";
            r_text[102] = "*%51*";
            r_text[103] = "*%52*";
            r_text[104] = "*%53*";
            r_text[105] = "*%54*";
            r_text[106] = "*%55*";
            r_text[107] = "*%56*";
            r_text[108] = "*%57*";
            r_text[109] = "*%58*";
            r_text[110] = "*%59*";
            r_text[111] = "*%60*";
            r_text[112] = "*%61*";
            r_text[113] = "*%62*";
            r_text[114] = "*%63*";
            r_text[115] = "*%64*";
            r_text[116] = "*%65*";
            r_text[117] = "*%66*";
            r_text[118] = "*%67*";
            r_text[119] = "*%68*";
            r_text[120] = "*%69*";
            r_text[121] = "*%70*";
            r_text[122] = "*%71*";
            r_text[123] = "*%72*";
            r_text[124] = "*%73*";
            r_text[125] = "*%74*";
            r_text[126] = "*%75*";
            r_text[127] = "*%76*";
            r_text[128] = "*%77*";
            r_text[129] = "*%78*";
            r_text[130] = "*%79*";
            r_text[131] = "*%80*";
            r_text[132] = "*%81*";
            r_text[133] = "*%82*";
            r_text[134] = "*%83*";
            r_text[135] = "*%84*";
            r_text[136] = "*%85*";
            r_text[137] = "*%86*";
            r_text[138] = "*%87*";
            r_text[139] = "*%88*";
            r_text[140] = "*%89*";
            r_text[141] = "*%90*";
            r_text[142] = "*%91*";
            r_text[143] = "*%92*";
            r_text[144] = "*%93*";
            r_text[145] = "*%94*";
            r_text[146] = "*%95*";
            r_text[147] = "*%96*";
            r_text[148] = "*%97*";
            r_text[149] = "*%98*";
            r_text[150] = "*%99*";
            r_text[151] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brkn.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Your heart was broken by*` + '@' + message.reply_message.jid.split('@')[0] + ` and your hearts health is reduced to :* ${r_text[i]}` }
            )
        }));
    }
}
// Plugin End