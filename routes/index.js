/*
 * GET home page.
 */

var note = require('../controllers/note'),
    site = require('../controllers/site');

exports.index = function(req, res){
};

exports = function(app){
	// ����1��GET��URL��ַ
	// ����2�ǿ�������ַ
	app.get('/', site.index);
	app.get('/add_note', note.add);	
};
