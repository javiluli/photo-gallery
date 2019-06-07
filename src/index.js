//---------------------------------//
// Import CSS, Normalize and fonts.css
import "./styles/style.scss";
import "./static/css/font-Confortaa.css";
import "./static/css/font-Montserrat.css";
import "./static/css/normalize.css";
//---------------------------------//

//---------------------------------//
// Import fonts.ttf
import "./static/fonts/Comfortaa[wght].ttf";
import "./static/fonts/Montserrat-Regular.ttf";
import "./static/fonts/Montserrat-Medium.ttf";
import "./static/fonts/Montserrat-SemiBold.ttf";
//---------------------------------//

//---------------------------------//
// Import all filder from ./static/content/img/
const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("./static/content/img/", true, /\.(jpg|svg)$/));
// At build-time cache will be populated with all required modules.

//---------------------------------//
import "./static/js/banner";
import "./static/js/show_menu";
import "./static/js/menu_bg";
// import "./static/js/change_darkMode";
// import "./static/js/btn-back-top";
import "./static/js/jquery.lazyload.js";
import "./static/js/lazyLoad";
//---------------------------------//
