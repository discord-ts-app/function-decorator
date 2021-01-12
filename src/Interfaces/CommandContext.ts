type CommandContext<R> = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<R>
}

export default CommandContext
