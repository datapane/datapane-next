import { createApp, defineCustomElement } from "vue";
import Report from "../components/Report.vue";
import TableBlock from "../components/blocks/Table.ce.vue";
import "../styles/report.scss";

customElements.define("x-table-block", defineCustomElement(TableBlock));

declare global {
  interface Window {
    dpLocal: boolean;
    reportProps?: any;
  }
}

const mountReport = (reportProps: any) => {
  const app = createApp(Report, { reportProps });
  app.mount("#report");
};

export { mountReport };