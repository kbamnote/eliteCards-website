import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mail, Bot, Minus } from "lucide-react";
import Cookies from "js-cookie";

/* ===================== API URLs ===================== */
const CHATBOT_API_URL = "https://eliteassociate1.app.n8n.cloud/webhook/sessionId";
const CHATBOT_MESSAGE_URL = "https://eliteassociate1.app.n8n.cloud/webhook/cardbot";

/* ===================== COOKIE KEYS ===================== */
const CHAT_HISTORY_COOKIE = "chatbot_history";
const CHAT_SESSION_COOKIE = "chatbot_session";
const CHAT_EMAIL_COOKIE = "chatbot_email";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isEmailCapture, setIsEmailCapture] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    try {
      const savedMessages = Cookies.get(CHAT_HISTORY_COOKIE);
      const savedSessionId = Cookies.get(CHAT_SESSION_COOKIE);
      const savedEmail = Cookies.get(CHAT_EMAIL_COOKIE);

      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
        setIsEmailCapture(false);
      } else {
        setMessages([
          {
            id: 1,
            text: "Hello! 👋 Please enter your email to continue.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }

      if (savedSessionId) setSessionId(savedSessionId);
      if (savedEmail) setUserEmail(savedEmail);
    } catch {
      Cookies.remove(CHAT_HISTORY_COOKIE);
    }
  }, []);

  useEffect(() => {
    if (messages.length) {
      Cookies.set(CHAT_HISTORY_COOKIE, JSON.stringify(messages), {
        expires: 7,
        sameSite: "Lax",
      });
    }
  }, [messages]);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = async () => {
    setEmailError("");
    if (!emailInput.trim()) return setEmailError("Enter email");
    if (!validateEmail(emailInput)) return setEmailError("Invalid email");

    setIsLoading(true);
    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: emailInput }),
      });

      const data = await res.json();
      const newSessionId = data?.[0]?.sessionId || `session_${Date.now()}`;

      Cookies.set(CHAT_SESSION_COOKIE, newSessionId, { expires: 7 });
      Cookies.set(CHAT_EMAIL_COOKIE, emailInput, { expires: 7 });

      setSessionId(newSessionId);
      setUserEmail(emailInput);
      setIsEmailCapture(false);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Thanks! How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setEmailError("Failed to start chat");
    } finally {
      setIsLoading(false);
    }
  };

  const getBotResponse = async (message) => {
    try {
      const res = await fetch(CHATBOT_MESSAGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, query: message }),
      });
      const data = await res.json();
      return data?.[0]?.output || "Please try again.";
    } catch {
      return "⚠️ Server error.";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    const reply = await getBotResponse(userMsg.text);
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: reply,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setIsLoading(false);
  };

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 right-8 z-9999 w-14 h-14 rounded-full bg-indigo-600 border border-gray-700 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <MessageCircle className="text-white w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-9999 w-[380px] transition-all ${
            isMinimized ? "h-14" : "h-[420px]"
          }`}
        >
          <div className="h-full bg-black border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Bot className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Elite Cards
                  </h3>
                  <p className="text-gray-400 text-[10px]">Online</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 rounded hover:bg-gray-800"
                >
                  <Minus className="text-white w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-gray-800"
                >
                  <X className="text-white w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-black space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                          msg.sender === "user"
                            ? "bg-gray-800 text-white rounded-br-none"
                            : "bg-gray-900 border border-gray-700 text-gray-200 rounded-bl-none"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className="block text-[10px] text-gray-400 mt-1">
                          {formatTime(msg.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></span>
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-gray-700 p-3 bg-black">
                  {isEmailCapture ? (
                    <div className="space-y-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          placeholder="Email address"
                          className="w-full pl-9 pr-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                      </div>
                      {emailError && (
                        <p className="text-xs text-red-400">{emailError}</p>
                      )}
                      <button
                        onClick={handleEmailSubmit}
                        disabled={isLoading}
                        className="w-full py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700"
                      >
                        {isLoading ? "Connecting..." : "Start Chat"}
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && sendMessage()
                        }
                        placeholder="Message..."
                        className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputValue.trim()}
                        className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                      >
                        <Send className="text-white w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;