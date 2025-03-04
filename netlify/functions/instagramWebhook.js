exports.handler = async (event) => {
    if (event.httpMethod === "GET") {
        // Webhook verification for Meta Dev Portal
        const params = new URLSearchParams(event.queryStringParameters);
        const mode = params.get("hub.mode");
        const token = params.get("hub.verify_token");
        const challenge = params.get("hub.challenge");

        if (mode === "subscribe" && token === "verify_token") {
            return {
                statusCode: 200,
                body: challenge,
            };
        } else {
            return {
                statusCode: 403,
                body: "Invalid request",
            };
        }
        }
        if (event.httpMethod === "POST") {
        // Webhook for Instagram
        try { 
            const body = JSON.parse(event.body);
            console.log("Instagram Webhook Event Received Successfully: ", body);

            return {
                statusCode: 200,
                body: JSON.stringify({message: "Instagram Webhook Event Received Successfully"}),
            };
        } catch (error) {
            console.error("Instagram Webhook Event Error: ", error);

            return {
                statusCode: 500,
                body: JSON.stringify({message: "Instagram Webhook Event Error"}),
            };
        }
    }
}