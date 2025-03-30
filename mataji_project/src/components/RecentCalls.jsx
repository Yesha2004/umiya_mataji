import { useState } from "react";

function RecentCalls() {
  const [recentCalls] = useState([
    { id: 1, name: "John Doe", phone: "1234567890", time: "10:30 AM" },
    { id: 2, name: "Jane Smith", phone: "9876543210", time: "Yesterday" },
  ]);

  return (
    <div className="recent-calls">
      <h2>Recent Calls</h2>
      <ul>
        {recentCalls.map(call => (
          <li key={call.id}>
            {call.name} - {call.phone} <span>({call.time})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentCalls;
