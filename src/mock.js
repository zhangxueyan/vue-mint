// 使用 Mock
var Mock = require('mockjs')
var users= Mock.mock({
	"list|10":[{
		"number|+1": 1,
		name: ()=>Mock.Random.cname(),
		address: ()=>Mock.Random.county(true),
		date: ()=>Mock.Random.date(),
		"age|20-60":20,
        sex: ()=>Mock.Random.integer(0, 1),
        img:()=>Mock.Random.image('200x100')
	}]
})

var cities=Mock.mock({
	"list|10": [{ 
	  	// titl: ()=>Mock.Random.province(),
	  	titl: ()=>Mock.Random.character('upper'),
	  	subts:[
	  	{subt: ()=>Mock.Random.city()},
	  	{subt: ()=>Mock.Random.city()}
	  	]
	  }]
})
// 输出结果
// console.log(JSON.stringify(Users,null,4))
export { users,cities};