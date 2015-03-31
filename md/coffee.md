---
layout: post
title:  "coffee"
date:   2015-03-31 09:19:11
categories: coffee
permalink: /md/coffee/
---


CoffeeScript Note
===
- ###函数
            my=(num)-> Math.pow num, 3

            greeting = (sub) -> "hello, #{sub}"
    - ####函数使用参数槽
            sum =(nums...) ->
        	result = 0
        	nums.forEach(n) -> result +=n
        	result

    - ####函数调用
            alert inspect (a)
            Equivalent to:
            alert(inspect(a))




- ###作用域
- ###`coffee采取的是词法作用域`
            age = 99;//全局
            reg = -> age = 0//全局
            reg()
            console.log "#{age}"//0

            reg = age = 0//局部
            age=99//全局
            reg()
            console.log "#{age}"//99

            reg = -> age=0//局部
            reg()
            console.log "#{age}"// not defined

- ###全局变量
    - ####this在顶级作用域中相当于全局对象
            export = this
            export.h1 = 10



- ###函数上下文
    - ####使用胖箭头代替普通箭头是为了确保函数的上下文可以绑定为当前的上下文
            this.clickHandler = -> alert "clicked"
            element.addEventListener "click", (e) => this.clickHandler(e)



- ###对象字面量与数组定义
        object1 = {one: 1, two: 2}

         Without braces
        object2 = one: 1, two: 2

         Using new lines instead of commas
        object3 =
          one: 1
          two: 2




- ###数组
        array1 = [1, 2, 3]

        array2 = [
          1
          2
          3
        ]

        range = [1..5]   ---等价---- range = [1,2,3,4,5]

- ####数组切片
        firstTwo = ["one", "two", "three"][0..1]
- ####字符串切片
        my = "my string"[0..2]
- ####数组查询
        words = ["rattled", "roudy", "rebbles", "ranks"]
        alert "Stop wagging me" if "ranks" in words
- ####数组替换
        numbers = [0..9]
        numbers[3..5] = [-3, -4, -5]





- ###流程控制
        if true == true
            "We're ok"

        if true != true then "Panic"

        if 1 > 0 then "Ok" else "Y2K!"

        alert "It's cold!" if heat < 5
        等价：
        if(heat<5){
            alert("Its cold")
        }

        if not true then "Panic"
        等价：
        if(！true){
            "Panic"
        }
        等价：
        unless true
            "Panic"

        if true is 1
            "Type coercion fail!"

        f true isnt true
            alert "Opposite day!"




- ###字符串插值法
        favourite_color = "Blue. No, yel..."
        question = "Bridgekeeper: What... is your favourite color?
                    Galahad: #{favourite_color}
                    Bridgekeeper: Wrong!
                    "



- ###循环和列表解析
        for name in ["Roger", "Roderick", "Brian"]
          alert "Release #{name}"

        for name, i in ["Roger the pickpocket", "Roderick the robber"]//可得知当前索引
        alert "#{i} - Release #{name}"

        release prisoner for prisoner in ["Roger", "Roderick", "Brian"] //前缀模式


- ####过滤
        prisoners = ["Roger", "Roderick", "Brian"]
        release prisoner for prisoner in prisoners when prisoner[0] is "R"

- ####你可以使用推导式来迭代对象的全部属性，不过要使用of代替in关键字。
        names = sam: seaborn, donna: moss
        alert("#{first} #{last}") for first, last of names



- ###别名和存在操作符
            @saviour = true   ----------  this.saviour = true

            User::first = -> @records[0] ---------- User.prototype.first = function()
            {
            return this.records[0]
            }

            praise if brian?          //?只有在brain!=null && !==undefined 返回真

            velocity = southern ? 40   //用来替换 ||

            blackKnight.getLegs()?.kick()
                                        // if (blackKnight.getLegs() !=null) {
                                                 blackKnight.getLegs().kick()
                                            }

            blackKnight.getLegs().kick?()
                                        // if (type of (blackKnight.getLegs().kick()) !=function) {
                                                 blackKnight.getLegs().kick()
                                            }






