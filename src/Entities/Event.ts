import Events from '../Enums/Events'
import Context from '../Types/Event'

function Event({ type }: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'EVENT', event: type, run: target[propertyKey] } } })
	}
}

export { Event, Events }
