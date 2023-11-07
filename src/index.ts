export default class TwineServerLibrary {
	host: string;

	constructor(host: string) {
		this.host = host + "/api/twine";
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
					"Authorization": "beemo",
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