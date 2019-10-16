//import './utils/swRegister'
import './plugins'
import 'bootstrap'
import jQueryFallbackProvider from './utils/jQueryFallbackProvider'
import componentsHandler from './componentsHandler'

// Components
import emmiter from './components/emmiter'
import example from './components/example'
import shapes from './components/shapes'
import toggler from './components/toggler'

// Svelte
import Hi from '../scripts-svelte/Hi.svelte'

new Hi({
	target: document.getElementById('svelte'),
	props: {
		name: 'John Wick'
	}
})


const onJQueryAvailable = ($) => {
	// Prepare shorthands
	window.win = $(window)
	window.dc = $(document)
	window.body = $(document.body)

	// Init components
	componentsHandler({
		emmiter,
		example,
		shapes,
		toggler,
	})
}

const onJQueryMissing = () => {
	console.log('jQuery dependency is missing. This page might not work correctly. Please try again later.')
}


jQueryFallbackProvider(
	'/node_modules/jquery/dist/jquery.min.js',
	onJQueryAvailable,
	onJQueryMissing
)
