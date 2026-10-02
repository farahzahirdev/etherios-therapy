/** form_embed.js hides widgets until resize; on some hosts (esp. *.4tms.com) reveal never runs. */
export function revealGhlIframe(iframe: HTMLIFrameElement): void {
  iframe.removeAttribute("data-initial-iframe-hidden");
  Object.assign(iframe.style, {
    opacity: "1",
    visibility: "visible",
    pointerEvents: "auto",
    display: "block",
    position: "static",
    left: "auto",
    right: "auto",
    top: "auto",
  });
}
