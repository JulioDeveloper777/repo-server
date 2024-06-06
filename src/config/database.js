import "dotenv/config";

export default {
  url: process.env.MONGODB_URI,
  mongo: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
