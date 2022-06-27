const logout = async () => {
    const response = await fetch('/api/users/logout');
    console.log(response)
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert("couldn't log out");
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);