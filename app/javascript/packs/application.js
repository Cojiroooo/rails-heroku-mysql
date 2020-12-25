// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")
import lozad from 'lozad'

import 'src/css/application/theme.scss'
import 'src/css/application/container.scss'
import 'src/css/application/header.scss'
import 'src/css/application/logo.scss'
import 'src/css/application/nav.scss'
import 'src/css/application/footer.scss'
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
