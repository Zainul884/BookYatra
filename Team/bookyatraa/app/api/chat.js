// pages/api/chat.js
import axios from 'axios';

export default async function handler(req, res) {
  // Enable CORS for local development
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: req.body.messages
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      // Assuming the response structure is similar to the examples given
    const messages = response.data.choices[0].message.content;

      res.status(200).json({messages});
    } catch (error) {
      console.error('OpenAI API error:',error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Internal Server Error', error: error.response ? error.response.data : error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
