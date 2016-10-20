var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/test', function(req, res, next) {
  res.send({data:[
      {type: 'node express', name: 'test1 hack ',description:'description',rate:'7.00~8.00%',term:'aaa'},
      {type: 'qdb', name: 'test2',description:'description',rate:'7.00~8.00%',term:'3aaa'},
      {type: 'hqb', name: 'test3',description:'description',rate:'7.00~8.00%',term:'aaa'},
      {type: 'tyb', name: 'test4',description:'description',rate:'7.00~8.00%',term:'aaa'},
      {type: 'xsb', name: 'test5',description:'description',rate:'7.00~8.00%',term:'dasf'},
    ]});
});


module.exports = router;
