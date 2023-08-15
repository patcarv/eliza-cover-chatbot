document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        displayUserMessage(userMessage);
        getElizaResponse(userMessage);
        userInput.value = "";
    });

    function displayUserMessage(message) {
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user-message");
        userMessageElement.textContent = "You: " + message;
        chatLog.appendChild(userMessageElement);
    }

    function displayElizaResponse(response) {
        const elizaResponseElement = document.createElement("div");
        elizaResponseElement.classList.add("message", "eliza-response");
        elizaResponseElement.textContent = "Eliza: " + response;
        chatLog.appendChild(elizaResponseElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getElizaResponse(userMessage) {
        // Replace this part with your OpenAI code or the way you generate Eliza's response
        const elizaResponse = eliza_response(userMessage); // Call your function here
        displayElizaResponse(elizaResponse);
    }
});
