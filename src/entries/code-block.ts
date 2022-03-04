import { defineCustomElement } from "vue";
import CodeBlock from "../components/Code.ce.vue";

customElements.define("dp-code-block", defineCustomElement(CodeBlock));

export { CodeBlock };