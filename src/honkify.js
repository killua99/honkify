import honkify from 'honkify'

const body = document.querySelector( 'body' )

const honker = () => {
	const initialState = { state: goose.state, unregister: () => {} }
	const honk = JSON.parse(JSON.stringify(initialState))
	let unregister

	body.onkeydown = e => {
		if ( goose.hotKey !== e.key || ! goose.active ) {
			return
		}

		switch ( honk.state ) {
			case 'lock':
				unregister = honkify()

				honk.state = 'loose'
				honk.unregister = unregister

				// todo: Show a popup alert about the goose is loose!
				console.log( 'The goose is loose!' )

				break

			case 'loose':
				honk.unregister()

				honk.state = initialState.state
				honk.unregister = initialState.unregister

				console.log( 'The goose is lock!' )

				break
		}
	}
}

honker()
