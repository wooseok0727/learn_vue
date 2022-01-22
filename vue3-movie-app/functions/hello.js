exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JOJO',
      age: 100,
      email: 'crash2@naver.com'
    })
  }
}