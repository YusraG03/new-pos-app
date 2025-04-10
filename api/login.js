fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput,
    }),
  })
  .then(res => res.json())
  .then(data => {
    console.log('✅ Login response:', data);
    // handle success (e.g., store token, redirect)
  })
  .catch(err => {
    console.error('❌ Login failed:', err);
  });
  