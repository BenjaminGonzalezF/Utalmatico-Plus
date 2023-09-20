export async function test(req, res) {
	console.log('test conn');
	return res.status(200).send('你好世界!');
}