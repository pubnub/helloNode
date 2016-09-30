var PNSubChannel = process.env['CUSTOMCONSTR_PNSubChannel'];    // "bot_object";
var PNPubChannel = process.env['CUSTOMCONSTR_PNPubChannel'];    // "bot-relay";
var PNPublishKey = process.env['CUSTOMCONSTR_PNPublishKey'];    // "demo-36";
var PNSubscribeKey = process.env['CUSTOMCONSTR_PNSubscribeKey'];  // "demo-36";

// Azure Vars

var EHInConnectionString  = process.env['CUSTOMCONSTR_EHInConnectionString']; // 'Endpoint=sb://autonubeventhub.servicebus.windows.net/;SharedAccessKeyName=infromsubscriberhub;SharedAccessKey=533HJhCxZIynOV1xbQKBWgilDQ4euKRSUxWsbZBG1v4=;EntityPath=infrompnsubscriber';
var EHOutConnectionString = process.env['CUSTOMCONSTR_EHOutConnectionString']; // 'Endpoint=sb://autonubeventhub.servicebus.windows.net/;SharedAccessKeyName=outtopublisherhub;SharedAccessKey=GjfSXpxyIvVWzB6+DEZj9amxBIf1QV9XfyRtaujbTzo=;EntityPath=outtopnpublisher'

console.log(PNSubChannel);
console.log(PNPubChannel);
console.log(PNPublishKey);
console.log(PNSubscribeKey);
console.log(EHInConnectionString);
console.log(EHOutConnectionString);
