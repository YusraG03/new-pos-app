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
  
        const text = await response.text();
  
        console.log('📦 NetSuite Raw Response:', text); // <--- log it
  
        try {
          const json = JSON.parse(text);
          return res.status(200).json(json);
        } catch {
          return res.status(500).json({
            success: false,
            message: 'NetSuite response is not JSON',
            raw: text, // <-- return this so you can view it on frontend
          });
        }
  
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: 'Proxy error',
          error: err.message,
        });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  