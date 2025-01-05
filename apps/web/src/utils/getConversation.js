import {Channel, Mention, MessageText, WKSDK} from "wukongimjssdk";

export function getConversation(){
    console.log(`-----------------------------------`)
    console.log("---getConversation----");
    //发送消息2, 回复消息会在别人发送之前，顺序有问题
    //const c = new Channel("39e096cb77e14983972c33c063509a2c", 2)
    //const content = new MessageText("@ff1002 111111")
    //const mn = new Mention()
    //mn.all = true
    //mn.uids = ['0f3f6f2f54da4d6fa7a1d6cd065cb10c']
    //content.mention = mn
    //this.conversationContext.sendMessage(content, c);
    console.log("wsdk.config", WKSDK.shared().config);
    console.log('wsdk.channelManager', WKSDK.shared().channelManager);
    console.log('wsdk.conversationManager', WKSDK.shared().conversationManager);
    console.log('wsdk.chatManager', WKSDK.shared().chatManager);
    console.log('wsdk.connectManager', WKSDK.shared().connectManager);
    console.log("---end---");
}