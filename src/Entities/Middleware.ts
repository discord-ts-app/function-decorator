import Lifecycles from '../Enums/Lifecycles'
import MiddlewareContext from '../Interfaces/MiddlewareContext'

function Middleware({ lifecycle }: MiddlewareContext) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'MIDDLEWARE', lifecycle, run: target[propertyKey] } } })
	}
}

export { Middleware, Lifecycles, MiddlewareContext }
