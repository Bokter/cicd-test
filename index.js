const http = require('http');
const { URL } = require('url');

function multiply(a, b) {
	return a * b;
}

const server = http.createServer((req, res) => {
	const url = new URL(req.url, `http://${req.headers.host}`);

	if (req.method === 'GET' && url.pathname === '/m') {
		const a = Number(url.searchParams.get('a'));
		const b = Number(url.searchParams.get('b'));

		res.setHeader('Content-Type', 'application/json');

		if (!Number.isFinite(a) || !Number.isFinite(b)) {
			res.statusCode = 400;
			return res.end(JSON.stringify({ error: 'Usa /m?a=2&b=3' }));
		}

		return res.end(JSON.stringify({ resultado: multiply(a, b) }));
	}

	res.statusCode = 404;
	res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

if (require.main === module) {
	server.listen(3000, () => {
		console.log('Servidor ejecutándose en http://localhost:3000');
	});
}

module.exports = { multiply, server };
