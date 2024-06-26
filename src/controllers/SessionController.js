import jwt from "jsonwebtoken";
import User from "../models/User";
import { checkPassword } from "../services/auth";
import authConfig from "../config/auth";

class SessionControlller {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: `User invalid.` });
    }

    if (!checkPassword(user, password)) {
      return res.status(401).json({ error: `Password invalid.` });
    }

    const { id } = user;

    return res.json({
      user: {
        id,
        email
      },
      token: jwt.sign({ id }, authConfig.SECRET_KEY, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionControlller();
