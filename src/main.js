import minHeader from "./components/min.header.js";
import minNav from "./components/min.nav.js";
import minMain from "./components/min.main.js";

minHeader.title_consume();
minHeader.chapters(minHeader.details)
minNav.consume_(); 
minNav.card(); 
minMain.render_about(); 
minMain.render_main(); 
minMain.example();