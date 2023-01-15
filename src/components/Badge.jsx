import React from "react";

const Badge = ({ t, p, tt }) => {
  return (
    <div style={{ padding: p, textTransform: tt }} className="big-badge">
      {t}
    </div>
  );
};

export default Badge;
