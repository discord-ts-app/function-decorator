function Event(
	type:
		| 'channelCreate'
		| 'channelDelete'
		| 'channelPinsUpdate'
		| 'channelUpdate'
		| 'clientUserGuildSettingsUpdate'
		| 'debug'
		| 'disconnect'
		| 'emojiCreate'
		| 'emojuUpdate'
		| 'emojiDelete'
		| 'error'
		| 'guildBanAdd'
		| 'guildBanRemove'
		| 'guildCreate'
		| 'guildDelete'
		| 'guildMemberAdd'
		| 'guildMemberAvailable'
		| 'guildMemberRemove'
		| 'guildMemberSpeaking'
		| 'guildMemberUpdate'
		| 'guildMembersChunk'
		| 'guildUnvailable'
		| 'guildUpdate'
		| 'message'
		| 'messageDelete'
		| 'messageDeleteBulk'
		| 'messageReactionAdd'
		| 'messageReactionRemove'
		| 'messageReactionRemoveAll'
		| 'messageUpdate'
		| 'presenceUpdate'
		| 'rateLimit'
		| 'raw'
		| 'ready'
		| 'reconnecting'
		| 'roleCreate'
		| 'roleDelete'
		| 'roleUpdate'
		| 'typingStart'
		| 'typingStop'
		| 'userNoteUpdate'
		| 'userUpdate'
		| 'voiceStateUpdate'
		| 'warn'
) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'EVENT', event: type, run: target[propertyKey] } } })
	}
}

export { Event }
