function Middleware(lifecycle: 'messageReceived' | 'commandReceived') {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { module: 'MIDDLEWARE', lifecycle, run: target[propertyKey] } } })
	}
}

export { Middleware }
