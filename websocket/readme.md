## Visual Representation of my setup 
 +------------------------+      +------------------------+      +------------------------+
 |      Client 1          |      |      Client 2          |      |    WebSocket Server   |
 |      Port: 3000        |      |      Port: 5000        |      |      Port: 5500        |
 +------------------------+      +------------------------+      +------------------------+
               |                                |                                 |
               |           WebSocket            |            WebSocket         |
               |       Connection to Server      |       Connection to Server   |
               |        ws://localhost:5500       |        ws://localhost:5500  |
               |                                |                                 |
               v                                v                                 v
 +------------------------+      +------------------------+      +------------------------+
 |        Terminal        |      |        Terminal        |      |     WebSocket Module   |
 |  (Reads and Sends      |      |  (Reads and Sends      |      |    (Handles WebSocket    |
 |   Messages via CLI)    |      |   Messages via CLI)    |      |   Communication Logic)  |
 +------------------------+      +------------------------+      +------------------------+
