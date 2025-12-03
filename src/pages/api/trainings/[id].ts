import { NextApiRequest, NextApiResponse } from 'next';
import { localDb } from '@/lib/local-db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const training = await localDb.getById(id as string);
      
      if (!training) {
        return res.status(404).json({ error: 'Training not found' });
      }
      
      res.status(200).json({ training });
    } catch (error) {
      console.error('Error fetching training:', error);
      res.status(500).json({ error: 'Failed to fetch training' });
    }
  } else if (req.method === 'PUT') {
    try {
      const trainingData = req.body;
      
      const training = await localDb.update(id as string, trainingData);
      
      if (!training) {
        return res.status(404).json({ error: 'Training not found' });
      }
      
      res.status(200).json({ 
        message: 'Training updated successfully',
        training 
      });
    } catch (error) {
      console.error('Error updating training:', error);
      res.status(500).json({ error: 'Failed to update training' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const success = await localDb.delete(id as string);
      
      if (!success) {
        return res.status(404).json({ error: 'Training not found' });
      }
      
      res.status(200).json({ message: 'Training deleted successfully' });
    } catch (error) {
      console.error('Error deleting training:', error);
      res.status(500).json({ error: 'Failed to delete training' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}