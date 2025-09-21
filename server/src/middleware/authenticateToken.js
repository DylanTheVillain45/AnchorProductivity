import jwt from "jsonwebtoken";

function authenticateToken({ isAdmin = false } = {}) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access denied, no token" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }

      req.user = user;

      if (isAdmin && user.role !== "admin") {
        return res.status(401).json({ message: "Access denied, not admin" });
      }
      next();
    });
  };
}

export default authenticateToken;
