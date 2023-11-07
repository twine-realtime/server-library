var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class TwinePub {
    constructor(host) {
        this.host = host + "/api/twine";
    }
    ;
    publish(room, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = {
                    room_id: room,
                    payload,
                };
                const response = yield fetch(this.host, {
                    method: "POST",
                    headers: {
                        "Authorization": "beemo",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                console.log("publish status:", response.status);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
}
;
