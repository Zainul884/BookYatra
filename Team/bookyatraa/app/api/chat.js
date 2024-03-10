export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { messages } = req.body;
      
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Make sure to use your OpenAI API Key here, stored in an environment variable
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages, // Pass the messages from the frontend to OpenAI
          }),
        });
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  