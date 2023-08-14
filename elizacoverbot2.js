{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red212\green20\blue102;\red0\green0\blue0;\red255\green255\blue255;
\red235\green16\blue47;\red20\green152\blue106;\red39\green129\blue201;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c87451\c18824\c47451;\cssrgb\c0\c0\c0;\cssrgb\c100000\c100000\c100000;
\cssrgb\c94902\c17255\c23922;\cssrgb\c0\c65098\c49020;\cssrgb\c18039\c58431\c82745;\cssrgb\c100000\c100000\c100000\c50196;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 addEventListener\cf4 \strokec4 (\cf6 \strokec6 "DOMContentLoaded"\cf4 \strokec4 , \cf7 \strokec7 function\cf4 \strokec4  () \{\
  \cf7 \strokec7 const\cf4 \strokec4  chatLog = \cf2 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 getElementById\cf4 \strokec4 (\cf6 \strokec6 "chat-log"\cf4 \strokec4 );\
  \cf7 \strokec7 const\cf4 \strokec4  userInput = \cf2 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 getElementById\cf4 \strokec4 (\cf6 \strokec6 "user-input"\cf4 \strokec4 );\
  \cf7 \strokec7 const\cf4 \strokec4  sendButton = \cf2 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 getElementById\cf4 \strokec4 (\cf6 \strokec6 "send-button"\cf4 \strokec4 );\
\
  \cf7 \strokec7 function\cf4 \strokec4  \cf5 \strokec5 appendUserMessage\cf4 \strokec4 (message) \{\
    \cf7 \strokec7 const\cf4 \strokec4  userMessage = \cf2 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 createElement\cf4 \strokec4 (\cf6 \strokec6 "div"\cf4 \strokec4 );\
    userMessage.className = \cf6 \strokec6 "user-message"\cf4 \strokec4 ;\
    userMessage.textContent = \cf6 \strokec6 "You: "\cf4 \strokec4  + message;\
    chatLog.\cf5 \strokec5 appendChild\cf4 \strokec4 (userMessage);\
  \}\
\
  \cf7 \strokec7 function\cf4 \strokec4  \cf5 \strokec5 appendBotMessage\cf4 \strokec4 (message) \{\
    \cf7 \strokec7 const\cf4 \strokec4  botMessage = \cf2 \strokec2 document\cf4 \strokec4 .\cf5 \strokec5 createElement\cf4 \strokec4 (\cf6 \strokec6 "div"\cf4 \strokec4 );\
    botMessage.className = \cf6 \strokec6 "bot-message"\cf4 \strokec4 ;\
    botMessage.textContent = \cf6 \strokec6 "Eliza: "\cf4 \strokec4  + message;\
    chatLog.\cf5 \strokec5 appendChild\cf4 \strokec4 (botMessage);\
  \}\
\
  sendButton.\cf5 \strokec5 addEventListener\cf4 \strokec4 (\cf6 \strokec6 "click"\cf4 \strokec4 , \cf7 \strokec7 function\cf4 \strokec4  () \{\
    \cf7 \strokec7 const\cf4 \strokec4  userMessage = userInput.value;\
    \cf7 \strokec7 if\cf4 \strokec4  (userMessage) \{\
      \cf5 \strokec5 appendUserMessage\cf4 \strokec4 (userMessage);\
\
      \cf8 \strokec8 // Here, you can use the user input to interact with the chatbot and get its response\cf4 \strokec4 \
      \cf8 \strokec8 // You would need to implement the necessary code for this interaction\cf4 \strokec4 \
\
      userInput.value = \cf6 \strokec6 ""\cf4 \strokec4 ; \cf8 \strokec8 // Clear the input field after sending\cf4 \strokec4 \
    \}\
  \});\
\
  userInput.\cf5 \strokec5 addEventListener\cf4 \strokec4 (\cf6 \strokec6 "keypress"\cf4 \strokec4 , \cf7 \strokec7 function\cf4 \strokec4  (event) \{\
    \cf7 \strokec7 if\cf4 \strokec4  (event.key === \cf6 \strokec6 "Enter"\cf4 \strokec4 ) \{\
      sendButton.\cf5 \strokec5 click\cf4 \strokec4 (); \cf8 \strokec8 // Simulate a click on the send button when Enter key is pressed\cf4 \strokec4 \
      event.\cf5 \strokec5 preventDefault\cf4 \strokec4 (); \cf8 \strokec8 // Prevent the default Enter behavior (form submission)\cf4 \strokec4 \
    \}\
  \});\
\});}