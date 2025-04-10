export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const netsuiteURL = 'https://7849230-sb1.app.netsuite.com/app/site/hosting/scriptlet.nl?script=5336&deploy=1';
  
        const response = await fetch(netsuiteURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        const text = await response.text(); // read body as raw string
  
        try {
          const json = JSON.parse(text); // try parsing it
          return res.status(200).json(json); // ✅ return parsed JSON
        } catch {
          return res.status(500).json({
            success: false,
            message: 'NetSuite response is not JSON',
            raw: text,
          });
        }
  
      } catch (err) {
        console.error('Login Proxy Error:', err);
        return res.status(500).json({
          success: false,
          message: 'Proxy failed',
          error: err.message,
        });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  