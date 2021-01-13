import Lifecycles from '../Enums/Lifecycles'
import Context from '../Types/Middleware'

function Middleware({ lifecycle }: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'MIDDLEWARE', lifecycle, run: target[propertyKey] } } })
	}
}

export { Middleware, Lifecycles }
