import minHeader from "./components/min.header.js";
import minNav from "./components/min.nav.js";
import minMain from "./components/min.main.js";
import minSection from "./components/min.section.js";
import minFooter from "./components/min.footer.js";
import minAside from "./components/min.aside.js";

minHeader.render_title_date();
minHeader.render_banner(minHeader.details)
minNav.render_paragraphs(); 
minNav.render_cards(); 
minMain.render_about(); 
minMain.render_info_main();
minSection.render_section(minMain.data_main[3].pays);
minFooter.render_footer()
minAside.render_aside();