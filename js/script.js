let errors = 0
let score = 1
let timer
let speed = 0
let start = false
let time = 1

$('body').keydown(function(event){
 
    if(start==false){

        if(event.key==' '){
            start=true;
            $('.start').hide()
            $('.pers').show()
            $('.input_text').show()
            $('.score').text('Cчет: ' + score)
            $('.mistake').text('Ошибок: ' + errors)
            $('.speed').text('Скорость: ' + speed + " зн/мин")
            timer = setInterval(function(){
                time++
                speed = Math.round(score/time*60)
                $('.speed').text('Скорость: ' + speed + " зн/мин")
                
            },1000)
        }

    }
    else{
        let text = $('.input_text').text().split('')
    
        if(event.key==text[0]){
            score++
            $('.score').text('Cчет: ' + score)
            text.shift()
            $('.input_text').text(text.join(''))
            $('.pers').css('animation','eat 0.2s 1')
            setTimeout(function(){
                $('.pers').css('animation','none')
            },200)
            
        }
        else{
            errors++
        $('.mistake').text('Ошибок: ' + errors)
        }
    }
   
})