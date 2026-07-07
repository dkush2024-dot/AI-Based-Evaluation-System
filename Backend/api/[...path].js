import serverless from 'serverless-http';
import app, { connectDatabase } from '../server.js';

const serverlessHandler = serverless(app);

export default async function handler(req, res) {
  await connectDatabase();
  return serverlessHandler(req, res);
}