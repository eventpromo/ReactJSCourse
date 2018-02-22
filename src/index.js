import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'
import App from './compontents/App'

render(<App articles={articles}/>, document.getElementById('container'));