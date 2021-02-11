import Events from '../Types/Events'

function Event(type: Events) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'EVENT', event: type, run: target[propertyKey] } } })
	}
}

export { Event }
