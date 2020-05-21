// document.createElement("div") test
const div = dom.create("<div>newdiv</div>");
//after test
dom.after(test, div);
//before test
dom.before(test, div);
//wrap删掉这个函数要用的元素，
//为了方便测试，先注释掉这两个
//dom.append(test, div);
//wrap test
//dom.wrap(test, div);

//删除
//  remove test
const remove = document.getElementById("remove");
dom.remove(remove);
// empty test
dom.empty(removeTest);

//修改
