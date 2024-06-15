import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('GET_GOLD')) {
            return
        }
        await player.showText('Hello new student!')
        await player.showText('Heres a little something to get you started')
        await player.showText('*** Received 10 gold & a Starter kit ***', {
            talkWith: this
        })
        player.gold += 10
        player.setVariable('GET_GOLD', true)
        //elseif say something else
        //doesnt work
        //else {
        //    await player.showText('I already gave you gold!!', {
        //        talkWith: this
        //}

    }
} 