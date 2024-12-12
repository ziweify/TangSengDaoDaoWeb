import {Channel, Mention, MessageText, WKSDK} from "wukongimjssdk";

export function sendMessageToContact(contactid, message){
    console.log(`-----------------------------------`)
        console.log(`向联系人:[${contactid}],发送消息:[${message}]`)
    console.log("---sendMessageToContact----");
    //发送消息2, 回复消息会在别人发送之前，顺序有问题
    const c = new Channel("39e096cb77e14983972c33c063509a2c", 2)
    const content = new MessageText("@ff1002 111111")
    const mn = new Mention()
    mn.all = true
    mn.uids = ['0f3f6f2f54da4d6fa7a1d6cd065cb10c']
    content.mention = mn
    //this.conversationContext.sendMessage(content, c);
    WKSDK.shared().chatManager.send(content, c)

    // const c = message.channel;
    // const mn = new Mention()
    // mn.all = false
    // mn.uids = [message.fromUID]
    // const content = new MessageText("$" + message.content.text + '已处理')
    // content.mention = mn
    // WKSDK.shared().chatManager.send(content, c)

}