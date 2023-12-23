import React, { useState } from 'react';

const Mensajes = ({ onClose }) => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = () => {
        if (inputMessage) {
            const newMessage = {
                text: inputMessage,
                sender: 'You',
            };
      
            setMessages([...messages, newMessage]);
      
            setInputMessage('');
        }
    };

    return (
        <div className="chat-popup" style={{ position: 'fixed', right: '800px', bottom: '100px' }}>
            <div className="chat-content">
                <button
                    onClick={onClose}
                    className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm6.293 6.293-4.293 4.293 4.293 4.293-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414 4.293-4.293-4.293-4.293 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414z" />
                    </svg>
                </button>
                <div className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[400px] h-[540px]">
                    <div className="flex flex-col space-y-1.5 pb-6">
                        <h2 className="font-semibold text-lg tracking-tight">Chat Profesor/Alumno</h2>
                        <p className="text-sm text-[#6b7280] leading-3">Más adelante se cambiará</p>
                    </div>

                    <div className="pr-4 h-[380px]" style={{ minWidth: '100%', display: 'table' }}>
                        <div className="messages-container">
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center pt-0">
                        <form
                            className="flex items-center justify-center w-full space-x-2"
                            onSubmit={handleSendMessage}
                        >
                            <input
                                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                                placeholder="Type your message"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                            />
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                                onClick={handleSendMessage}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mensajes;
