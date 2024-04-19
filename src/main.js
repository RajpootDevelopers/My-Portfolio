import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/compnents/header.css'
import '../styles/compnents/hero.css'
import '../styles/compnents/about.css'
import '../styles/compnents/featured.css'
import '../styles/compnents/work.css'
import '../styles/compnents/contact.css'
import '../styles/compnents/footer.css'
import '../styles/compnents/mobile-nav.css'
import '../styles/utils.css';

import mobileNav  from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from "./utils/lazy-loading"
mobileNav();
darkMode();
lazyLoading();