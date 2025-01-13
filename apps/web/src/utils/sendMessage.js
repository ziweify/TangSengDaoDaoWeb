import {Channel, Mention, MessageText, WKSDK} from "wukongimjssdk";

//sendMessageToContact('39e096cb77e14983972c33c063509a2c',2,['0f3f6f2f54da4d6fa7a1d6cd065cb10c'],'222222');
export function sendMessageToContact(channelID, channelType, uids, message){
    console.log(`----sendMessageToContact----`)
    console.log(`频道:[${channelID}],lx:[${channelType}],向联系人:[${uids}],发送消息:[${message}]`)
    console.log('----参数准备')
    //发送消息2, 回复消息会在别人发送之前，顺序有问题
    const c = new Channel(channelID, channelType)
    const content = new MessageText(message)
    const mn = new Mention()
    mn.all = true
    mn.uids = uids
    // mn.uids = ['0f3f6f2f54da4d6fa7a1d6cd065cb10c']
    content.mention = mn
    //this.conversationContext.sendMessage(content, c);
    WKSDK.shared().chatManager.send(content, c)
    console.log('----发送完成')
}