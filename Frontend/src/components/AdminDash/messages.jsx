"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function MessagesTab() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // "all", "read", "unread"
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState("");

  // جلب الرسائل من الخادم عند تحميل المكون
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:9527/api/message");
        setMessages(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // فلترة الرسائل حسب الحالة
  const filteredMessages = messages.filter((msg) => {
    if (filter === "all") return true;
    if (filter === "read") return msg.status === "Read";
    if (filter === "unread") return msg.status === "Unread";
    return true;
  });

  // دالة لتحديث حالة الرسالة كمقروءة عبر الخادم
  const markAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:9527/api/message/${id}`, {
        status: "Read",
      });
      setMessages((prev) =>
        prev.map((msg) => (msg._id === id ? { ...msg, status: "Read", read: true } : msg))
      );
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  };

  // اختيار رسالة وعرضها، وتحديدها كمقروءة إذا لم تكن كذلك
  const selectMessage = (message) => {
    setSelectedMessage(message);
    if (message.status !== "Read") {
      markAsRead(message._id);
    }
  };

  const sendReply = async () => {
    if (replyText.trim() === "" || !selectedMessage) return;
    try {
      const res = await axios.post("http://localhost:9527/api/message/reply", {
        messageId: selectedMessage._id, 
        replyMessage: replyText,
      });
      alert(`تم إرسال الرد إلى ${selectedMessage.from}: ${replyText}`);
      setReplyText("");
      // إعادة تحميل الرسائل لتحديث الحالة بعد الرد
      const updated = await axios.get("http://localhost:9527/api/message");
      setMessages(updated.data.data || updated.data);
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("حدث خطأ أثناء إرسال الرد.");
    }
  };

  if (loading) {
    return <div>جارٍ التحميل...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">الرسائل</h2>

      {/* أزرار الفلتر */}
      <div className="flex space-x-4">
        <button
          className={`px-3 py-1 ${filter === "all" ? "font-bold" : ""}`}
          onClick={() => setFilter("all")}
        >
          الكل
        </button>
        <button
          className={`px-3 py-1 ${filter === "read" ? "font-bold" : ""}`}
          onClick={() => setFilter("read")}
        >
          مقروءة
        </button>
        <button
          className={`px-3 py-1 ${filter === "unread" ? "font-bold" : ""}`}
          onClick={() => setFilter("unread")}
        >
          غير مقروءة
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* قائمة الرسائل */}
          <div className="md:col-span-1 border-l">
            <div className="p-4 border-b">
              <h3 className="font-medium">صندوق الوارد</h3>
            </div>
            <div className="divide-y">
              {filteredMessages.map((msg) => (
                <div
                  key={msg._id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 
                    ${selectedMessage && selectedMessage._id === msg._id ? "bg-gray-50" : ""}
                    ${msg.status === "Unread" ? "font-semibold text-black" : "text-gray-500"}`}
                  onClick={() => selectMessage(msg)}
                >
                  <div className="flex justify-between">
                    <span>{msg.from}</span>
                    <span className="text-xs">
                      {new Date(msg.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm truncate">
                    {msg.title}
                    {msg.adminReply && (
                      <span className="ml-2 text-xs text-green-600 font-bold">
                        (تم الرد)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* محتوى الرسالة */}
          <div className="md:col-span-2 flex flex-col h-[70vh]">
            {selectedMessage ? (
              <>
                <div className="p-4 border-b">
                  <h3 className="font-medium">{selectedMessage.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>من: {selectedMessage.from}</span>
                    <span>{new Date(selectedMessage.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-4 flex-1 overflow-auto">
                  <p>{selectedMessage.message}</p>
                  {selectedMessage.adminReply && (
                    <div className="mt-4 p-4 border rounded bg-gray-100">
                      <h4 className="font-medium">رد الأدمن:</h4>
                      <p>{selectedMessage.adminReply}</p>
                    </div>
                  )}
                </div>
                <div className="p-4 border-t">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    placeholder="اكتب ردك هنا..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  ></textarea>
                  <button
                    className="mt-2 px-4 py-2 bg-[#115173] text-white rounded-md hover:bg-[#022C43]"
                    onClick={sendReply}
                  >
                    إرسال الرد
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                اختر رسالة لعرضها
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
