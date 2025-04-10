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
  
        const data = await response.json();
        return res.status(200).json(data);
  
      } catch (err) {
        console.error('Login Proxy Error:', err);
        return res.status(500).json({ success: false, message: 'Proxy failed', error: err });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  