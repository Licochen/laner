var DB = require("../models"),
    Notes = DB.Table('Notes');    

var ObjID = DB.ObjID;

exports.index = function(req, res, next){
	// ����1��view��ַ
	// ����2�Ǵ���ȥ�Ĳ���ֵ
	res.render('index', { title: 'Laner.dm' });
};

