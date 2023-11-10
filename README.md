# Twine Server Library

This library enables users to publish messages to their Twine Realtime service.

## Installation

Copy this code into your JavaScript code as an ES module package:

```js
import TwineServerLibrary from 'https://cdn.jsdelivr.net/npm/twine-server-library@1.0/+esm';
```

## Initialization

To configure the client, use the `Twine` constructor, it requires a Twine `host` and `apiKey` created at deployment:

```js
const host = 'https://your-twine-domain.com';
const twineServerLibrary = new TwineServerLibrary(host, apiKey);
```

Once the constructor has been invoked, messages may be published to the twine server.

## Usage

### publish

The `publish` method takes a `room` (string) and a JavaScript object that serves as the messages payload. When invoked the messages will be sent to the twine server and the message published to all subscribers of the `room`. 

```js
twineServerLibrary.publish(room, callback); 
```

```js
sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const message = input.value;
	twineServerLibrary.publish(room, { 
		message: "Goodmoring, friend!"
	}); 
})
```