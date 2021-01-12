import CommandContext from '../Interfaces/CommandContext'

function Command<R>(ctx: CommandContext<R>) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, {
			value: {
				object: {
					module: 'COMMAND',
					ctx: {
						name: ctx.name,
						description: ctx.description,
						tag: ctx.tag,
						alias: ctx.alias || [],
						roles: ctx.roles || [],
						run: target[propertyKey]
					}
				}
			}
		})
	}
}

export default Command
