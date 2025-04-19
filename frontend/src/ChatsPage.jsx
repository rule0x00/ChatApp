import { PrettyChatWindow } from "react-chat-engine-pretty";
import dotenv from "dotenv"

dotenv.config()
const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={process.env.project_id}
        username={user.username}
        secret={user.username}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
