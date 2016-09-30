var PNSubChannel = process.env['CUSTOMCONNSTR_PNSubChannel'];    // "bot_object";
var PNPubChannel = process.env['CUSTOMCONNSTR_PNPubChannel'];    // "bot-relay";
var PNPublishKey = process.env['CUSTOMCONNSTR_PNPublishKey'];    // "demo-36";
var PNSubscribeKey = process.env['CUSTOMCONNSTR_PNSubscribeKey'];  // "demo-36";

// Azure Vars

var EHInConnectionString  = process.env['CUSTOMCONNSTR_EHInConnectionString']; // 'Endpoint=sb://autonubeventhub.servicebus.windows.net/;SharedAccessKeyName=infromsubscriberhub;SharedAccessKey=533HJhCxZIynOV1xbQKBWgilDQ4euKRSUxWsbZBG1v4=;EntityPath=infrompnsubscriber';
var EHOutConnectionString = process.env['CUSTOMCONNSTR_EHOutConnectionString']; // 'Endpoint=sb://autonubeventhub.servicebus.windows.net/;SharedAccessKeyName=outtopublisherhub;SharedAccessKey=GjfSXpxyIvVWzB6+DEZj9amxBIf1QV9XfyRtaujbTzo=;EntityPath=outtopnpublisher'

console.log(PNSubChannel);
console.log(PNPubChannel);
console.log(PNPublishKey);
console.log(PNSubscribeKey);
console.log(EHInConnectionString);
console.log(EHOutConnectionString);

console.log(JSON.stringify(process.env));
