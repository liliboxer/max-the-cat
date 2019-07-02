const parseRequest = (req) => {
  const lines = req.toString().split('\n');
  const method = lines[0].split(' ')[0];
  const path = lines[0].split(' ')[1];
  return { method, path };
};

module.exports = { parseRequest };
