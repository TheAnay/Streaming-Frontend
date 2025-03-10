document.addEventListener("DOMContentLoaded", function() {
    const sendMessageButton = document.getElementById('send-message');
    const chatInputField = document.getElementById('chat-input-field');
    const chatMessagesContainer = document.getElementById('chat-messages');
    const darkModeButton = document.getElementById('dark-mode-toggle');

    // Toggle Dark Mode
    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Change the icon based on dark mode state
        if (document.body.classList.contains('dark-mode')) {
            darkModeButton.textContent = '🌞';  // Switch to light mode icon
        } else {
            darkModeButton.textContent = '🌙';  // Switch to dark mode icon
        }
    });

    // Sample function to add a chat message
    function addMessage(message, isUser = true) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.classList.add(isUser ? 'user' : 'bot');

        const messageText = document.createElement('p');
        messageText.textContent = message;
        messageElement.appendChild(messageText);

        chatMessagesContainer.appendChild(messageElement);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to the latest message
    }

    // Event listener for the "Send" button
    sendMessageButton.addEventListener('click', function() {
        const userMessage = chatInputField.value.trim();
        if (userMessage) {
            // Add user message
            addMessage(userMessage);

            // Clear input field
            chatInputField.value = '';

            // Simulate bot response (you can add more intelligent responses here)
            setTimeout(() => {
                addMessage('Thanks for your message! We are monitoring the stream closely.', false);
            }, 1000);
        }
    });

    // Optional: Press Enter to send the message
    chatInputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessageButton.click();
        }
    });

    // Initial welcome message
    addMessage('Welcome to the live stream chat!', false);
});
