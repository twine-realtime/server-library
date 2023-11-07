# Twine Client Library

This library enables users to publish messages to their Twine Realtime service.

## Installation

Install the `twine-server-lib` NPM package:

```bash
npm install twine-server-lib
```

and then require the module:

```js
import TwineServerLibrary from "twine-server-lib";
```

## Initialization

To configure the client, use the `Twine` constructor:

```js
const host = 'https://your-twine-domain.com';
const twinePublish = new TwineServerLibrary(host);
```

Once the constructor has been invoked, messages may be published to the twine server.

## Usage

### publish

The `publish` method takes a `room` (string) and a JavaScript object that serves as the messages payload. When invoked the messages will be sent to the twine server and the message published to all subscribers of the `room`. 

```js
sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const message = input.value;
	twineServer.publish(roomToPublishTo, { 
		message: "Goodmoring, friend!"
	}); 
})
```