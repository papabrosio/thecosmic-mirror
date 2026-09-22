// Lead capture endpoint for The Cosmic Mirror
// Receives form submissions and writes to a JSONL file (no database required)
// In production, replace with proper ESP/webhook as needed

export const config = {
  api: {
    bodyParser: {
      urlencoded: { extended: true },
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  // In a real deployment, you'd write to a database or send to an ESP here.
  // For now, we return success and log to console.
  console.log('Lead captured:', { name, email });

  // Return success
  return res.status(200).json({
    message: 'Lead captured successfully',
    lead: { name, email },
  });
}
