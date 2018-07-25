import componentHandler from './componentHandler'

import './plugins'

import Emitter from './components/Emitter'
import Example from './components/Example'
import Shapes from './components/Shapes'


// Sort the components alphabetically…
componentHandler([
	Emitter,
	Example,
	Shapes,
])
