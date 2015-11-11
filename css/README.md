# CSS

### Objective
Build a web page that renders the Tile component outlined below.

### Instructions
- Fork this repository and submit your finished work as pull request.
- Your submission should include a rendered example of the Tile component.
- Treat your final deliverable as if it were to be deployed to production.
- If you use a preprocessor or build tool, include your source as well as the compiled code.

### Success Criteria
- Your source should be semantic and accessible.
- The page should be presentable in all modern browsers as well as IE 9+, but not necessarily visually identical across all browsers. Please document any intentional deviations.

### Server
This directory is configured to utilize a basic web server. You will first need to install [Node.js](https://nodejs.org). Once Node.js is installed and you have cloned this repository, you can start the server by running the following in Terminal:

```
cd path/to/repo/css/
npm install
npm start
```

After visiting `http://localhost:8080` in your browser, you should see _"The server is running!"_. Use <kbd>CTRL</kbd> + <kbd>c</kbd> to stop the server.

Feel free to add any additional infrastructure that you would like, as long as the page is still accessible by running `npm start`.

### Tile Component
- A [mockup of Tile component](./resources/tile-example.png) may be found here: `./resources/tile-example.png`.
- Used to represent a single piece of video content.
- Displays a thumbnail, title, duration, and category.
- Used in a variety of layouts (e.g. – standalone, within a responsive grid, etc), and should be built to handle that flexibility.
- Includes [interactions](./resource/tile-interactions.gif) for favoriting and viewing additional, similar content. Interactions can be found here: `./resources/tile-interactions.gif`
