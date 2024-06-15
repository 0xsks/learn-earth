import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'

//set player name
const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Student'
        player.setComponentsTop(Components.text('{name}'))
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    //show intro text on first join
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome to the start of Learn Earth!')
        await player.showText('You can move around by touching your screen or using the arrow keys')
        await player.showText('Access your inventory and items with the --- menu')
        await player.showText('Talk to the dude to get started')
        player.setVariable('AFTER_INTRO', true)
    }
}

export default player