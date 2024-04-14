import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="775418f9-57ee-4abf-a85c-9625c382260f"
        username={user.username}
        secret={user.username}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
