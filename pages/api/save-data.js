// pages/api/save-data.js
import { put } from '@vercel/blob';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, ...data } = req.body;
            const bodyData = JSON.stringify(req.body);
            const bufferData = Buffer.from(bodyData);
            
            const { url } = await put(`contact/${name}.json`, bufferData, { 
                access: 'public', 
                contentType: 'application/json',
            });
            res.status(200).json({ message: 'Message send successfully', url });
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ message: 'Error saving data', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
