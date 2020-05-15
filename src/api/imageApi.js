export const postImage = async imageUrl => {
  return await fetch(
    'https://smart-brain-backend-bdesigned.herokuapp.com/imageurl',
    {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        input: imageUrl
      })
    }
  )
    .then(response => response.json())
    .catch(error => console.log(error))
}
