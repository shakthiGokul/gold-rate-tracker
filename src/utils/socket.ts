export class SocketClient {
  websocket: WebSocket;
  constructor(uri: string) {
    this.websocket = new WebSocket(uri);
  }
  connect() {
    this.websocket.addEventListener("open", (event) => {
      console.log("event ->", event);
    });
  }
}
