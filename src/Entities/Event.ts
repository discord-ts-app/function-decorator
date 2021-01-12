import Events from '../Enums/Events'
import EventContext from '../Interfaces/EventContext'

function Event({ type }: EventContext) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'EVENT', event: type, run: target[propertyKey] } } })
	}
}

export { Event, Events }
