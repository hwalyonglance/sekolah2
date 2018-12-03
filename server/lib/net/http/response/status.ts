import { Response } from 'express';

export type statusKey =
	|		100		|	'continue'
	|		101		|	'switchingProtocols'
	|		102		|	'processing'
	|		200		|	'ok'
	|		201		|	'created'
	|		202		|	'accepted'
	|		203		|	'nonAuthoritativeInfo'
	|		204		|	'noContent'
	|		205		|	'resetContent'
	|		206		|	'partialContent'
	|		207		|	'multiStatus'
	|		208		|	'alreadyReported'
	|		226		|	'iMUsed'
	|		300		|	'multipleChoices'
	|		301		|	'movedPermanently'
	|		302		|	'found'
	|		303		|	'seeOther'
	|		304		|	'notModified'
	|		305		|	'useProxy'
	|		306		|	'_'
	|		307		|	'temporaryRedirect'
	|		308		|	'permanentRedirect'
	|		400		|	'badRequest'
	|		401		|	'unauthorized'
	|		402		|	'paymentRequired'
	|		403		|	'forbidden'
	|		404		|	'notFound'
	|		405		|	'methodNotAllowed'
	|		406		|	'notAcceptable'
	|		407		|	'proxyAuthRequired'
	|		408		|	'requestTimeout'
	|		409		|	'conflict'
	|		410		|	'gone'
	|		411		|	'lengthRequired'
	|		412		|	'preconditionFailed'
	|		413		|	'requestEntityTooLarge'
	|		414		|	'requestURITooLong'
	|		415		|	'unsupportedMediaType'
	|		416		|	'requestedRangeNotSatisfiable'
	|		417		|	'expectationFailed'
	|		418		|	'teapot'
	|		422		|	'unprocessableEntity'
	|		423		|	'locked'
	|		424		|	'failedDependency'
	|		426		|	'upgradeRequired'
	|		428		|	'preconditionRequired'
	|		429		|	'tooManyRequest'
	|		431		|	'requestHeaderFieldsTooLarge'
	|		451		|	'unavailableForLegalReasons'
	|		500		|	'internalServerError'
	|		501		|	'notImplemented'
	|		502		|	'badGateWay'
	|		503		|	'serviceUnavailable'
	|		504		|	'gatewayTimeout'
	|		505		|	'HTTPVersionNotSupported'
	|		506		|	'variantAlsoNegotiates'
	|		507		|	'insuficientStorage'
	|		508		|	'loopDetected'
	|		510		|	'notExtended'
	|		511		|	'networkAuthenticationRequired'

export const _status: {[key: string]: statusKey} = {
	'continue'						:	100		,
	'switchingProtocols'			:	101		,
	'processing'					:	102		,
	'ok'							:	200		,
	'created'						:	201		,
	'accepted'						:	202		,
	'nonAuthoritativeInfo'			:	203		,
	'noContent'						:	204		,
	'resetContent'					:	205		,
	'partialContent'				:	206		,
	'multiStatus'					:	207		,
	'alreadyReported'				:	208		,
	'iMUsed'						:	226		,
	'multipleChoices'				:	300		,
	'movedPermanently'				:	301		,
	'found'							:	302		,
	'seeOther'						:	303		,
	'notModified'					:	304		,
	'useProxy'						:	305		,
	'_'								:	306		,
	'temporaryRedirect'				:	307		,
	'permanentRedirect'				:	308		,
	'badRequest'					:	400		,
	'unauthorized'					:	401		,
	'paymentRequired'				:	402		,
	'forbidden'						:	403		,
	'notFound'						:	404		,
	'methodNotAllowed'				:	405		,
	'notAcceptable'					:	406		,
	'proxyAuthRequired'				:	407		,
	'requestTimeout'				:	408		,
	'conflict'						:	409		,
	'gone'							:	410		,
	'lengthRequired'				:	411		,
	'preconditionFailed'			:	412		,
	'requestEntityTooLarge'			:	413		,
	'requestURITooLong'				:	414		,
	'unsupportedMediaType'			:	415		,
	'requestedRangeNotSatisfiable'	:	416		,
	'expectationFailed'				:	417		,
	'teapot'						:	418		,
	'unprocessableEntity'			:	422		,
	'locked'						:	423		,
	'failedDependency'				:	424		,
	'upgradeRequired'				:	426		,
	'preconditionRequired'			:	428		,
	'tooManyRequest'				:	429		,
	'requestHeaderFieldsTooLarge'	:	431		,
	'unavailableForLegalReasons'	:	451		,
	'internalServerError'			:	500		,
	'notImplemented'				:	501		,
	'badGateWay'					:	502		,
	'serviceUnavailable'			:	503		,
	'gatewayTimeout'				:	504		,
	'HTTPVersionNotSupported'		:	505		,
	'variantAlsoNegotiates'			:	506		,
	'insuficientStorage'			:	507		,
	'loopDetected'					:	508		,
	'notExtended'					:	510		,
	'networkAuthenticationRequired'	:	511
};

for ( let _text in _status ) {
	let text = <statusKey>_text
	const code = _status[text]
	_status[text] = code
}

export function status(response: Response, codeOrText: statusKey = 200, responseObject: {} = {}) {
	const code = typeof codeOrText === 'number' ? Number(codeOrText) : Number(_status[codeOrText])
	response
		.status(code)
		.json({
			...responseObject,
			text: _status[code]
		})
}
