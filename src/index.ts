export default class TwineServerLibrary {
	host: string;
	apiKey: string;

	constructor(host: string, apiKey: string) {
		this.host = host + "/api/twine";
		this.apiKey = apiKey;
	};
		
	async publish(room: string, payload: object) {
		try {
			const body = {
				room_id: room, 
				payload,
			};

			const response = await fetch(this.host, {
				method: "POST",
				headers: {
					"Authorization": this.apiKey,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});

			console.log("publish status:", response.status);
		} catch(error) {
			console.log(error);
		};
	};
};