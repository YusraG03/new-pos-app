export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Only POST allowed' });
    }
  
    try {
      const { email, password } = req.body;
  
      const netsuiteRes = await fetch('https://7849230-sb1.app.netsuite.com/app/site/hosting/scriptlet.nl?script=5336&deploy=1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const text = await netsuiteRes.text();
  
      // Try to parse it safely
      let json;
      try {
        json = JSON.parse(text);
      } catch (err) {
        console.error('❌ Not valid JSON:', text);
        return res.status(500).json({
          success: false,
          message: 'NetSuite response is not JSON',
          raw: text, // helpful for debugging
        });
      }
  
      return res.status(200).json(json);
    } catch (error) {
      console.error('🔥 Error calling NetSuite:', error);
      return res.status(500).json({ error: 'Server error', raw: error.message });
    }
  }
  