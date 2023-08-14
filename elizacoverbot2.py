import openai

# Set your OpenAI API key here
openai.api_key = "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"

def eliza_response(input_text):
    response = openai.Completion.create(
        engine="text-davinci-003",  # GPT-3.5 Turbo engine
        prompt=input_text,
        max_tokens=80  # Adjust the response length as needed
    )
    return response.choices[0].text.strip()

# Main loop for interaction
while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        print("Goodbye!")
        break
    response = eliza_response(user_input)
    print("Eliza Cover:", response)
    