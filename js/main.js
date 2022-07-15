let nowPosition = ''
let commandList = ' start clear 123 132 213 312 321 231'.split(' ')
let hisCommand = []

let e_main = $('#main')
let e_input = $('.input-text')
let e_html = $('body,html')

let aName = '[A:]'

let mainFunc = (input, position) => {
    if (input === '') {
        e_main.html($('#main').html() + '[<span id="ai">'  + '</span><span class="master">B:</span>' + position + ']' + '<br/>')
        e_html.animate({scrollTop: $(document).height()}, 0)
    } else {
        command = input.split(' ')[0]
        if (commandList.indexOf(command) === -1) {
            e_main.html($('#main').html() + '[<span id="ai">'  + '</span><span class="master">B:</span>' + position + ']' + input + '<br/>' + ' <span id="a">' + aName + '输入有误' + '</span> ' + '<br/>')
            e_html.animate({scrollTop: $(document).height()}, 0)
        } else {
            switch (command) {
                case 'start':
                    e_main.html($('#main').html() + '[<span id="ai">'  + '</span><span class="master">B:</span>' + position + ']' + input + '<br/>' + ' <span id="a">' + aName + '<br/>' + '怎么把大象饭放进冰箱?<br/><br/>1.关上冰箱门<br/>2.打开冰箱门<br/>3.把大象放进去<br/><br/><br/>请输入正确的数字排列顺序<br/>' + '</span> ')
                    e_html.animate({scrollTop: $(document).height()}, 0)
                    break

                case '123':
                case '132':
                case '213':
                case '321':
                case '312':
                    e_main.html($('#main').html() + '[<span id="ai">'  + '</span><span class="master">B:</span>' + position + ']' + input + '<br/> ' + ' <span id="a">' + aName + '答案错误请重新输入' + '</span> ' + '<br/>')
                    e_html.animate({scrollTop: $(document).height()}, 0)
                    break

                case '231':
                    e_main.html($('#main').html() + '[<span id="ai">'  + '</span><span class="master">B:</span>' + position + ']' + input + '<br/> ' + ' <span id="a">' + aName + '你不能把大象放进冰箱！！！' + '</span> ' + '<br/>')
                    e_html.animate({scrollTop: $(document).height()}, 0)
                    break

                case 'clear':
                    e_main.html('')
                    e_html.animate({scrollTop: $(document).height()}, 0)
                    break;
            }
        }
    }
}

window.onresize = function () {
    e_input.width($(document).width() - $('.prefix').width() - 160)
};


$(document).bind('keydown', function (b) {
    e_input.focus()
    if (b.keyCode === 13) {
        e_main.html($('#main').html())
        e_html.animate({scrollTop: $(document).height()}, 0)
        mainFunc(e_input.val(), nowPosition)
        hisCommand.push(e_input.val())
        isInHis = 0
        e_input.val('')
    }
})
//power by ursb

