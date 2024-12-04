import React from "react";

const WhatsappIcon = () => {
  const phoneNumber = "9685221056";
  const message = "Hello, I am founder of AmbiSpine technology";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        zIndex: "2",
      }}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="#FFFFFF"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.433.716 4.7 1.95 6.598L.184 22.96l4.404-1.754C6.462 22.326 8.66 23 11.034 23 17.66 23 23 17.66 23 12S17.66 0 12 0zm0 21.23c-2.334 0-4.52-.664-6.372-1.812l-4.146 1.668 1.694-4.112C1.928 15.462 1.23 13.28 1.23 11c0-5.95 4.82-10.77 10.77-10.77S22.77 5.05 22.77 11 17.95 21.23 12 21.23zm6.486-7.598c-.328-.164-1.944-.96-2.244-1.068-.3-.11-.52-.164-.74.164-.22.328-.852 1.068-1.044 1.286-.192.218-.384.246-.712.082-.328-.164-1.386-.51-2.64-1.626-.976-.87-1.634-1.944-1.826-2.272-.192-.328-.02-.506.144-.67.148-.148.328-.384.492-.576.164-.192.22-.328.328-.546.11-.218.056-.41-.028-.576-.082-.164-.74-1.782-1.014-2.438-.266-.642-.54-.554-.74-.564-.192-.01-.41-.01-.63-.01-.22 0-.576.082-.876.41-.3.328-1.146 1.12-1.146 2.73 0 1.61 1.174 3.166 1.338 3.384.164.218 2.308 3.52 5.594 4.936 3.286 1.416 3.286 1.044 3.848.978.562-.066 1.944-.796 2.22-1.564.276-.768.276-1.426.192-1.564-.082-.138-.3-.22-.63-.384z" />
      </svg>
    </div>
  );
};

export default WhatsappIcon;
