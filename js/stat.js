'use strict';
/** 
*Функция нахождения максимального значения в массиве
*@param массив times
*@ret возвращает индекс максимального значения
*/
function findMax(times) {
    var max = -1;
    var maxIndex;
    for (var i = 0; i < times.length; i++) {
        if (times[i] > max)
            max = times[i]
            maxIndex = i;
    }
    return maxIndex;
 };

 /*
 *Функция рисующая гистограмму соотвествующего размера
 *@param объект канвас и массивы names times
 */
function drawHistogram(ctx, names, times) {
    var histogramHeight = 150; //px
    var histogramWidth = 40;   //px 
    var indent = 50; // px
    var barHeight = 20; //px
    var initialX = 120; //px
    var initialY = 40; //px
    var lineHeight = 15; //px
    var maxIndex = findMax(times); //px
    var step = histogramWidth / times[maxIndex]; //px
    var fontSize = 16; 
    ctx.fillStyle = '#000';
    ctx.font = fontSize + 'px PT Mono';

    ctx.fillText('Ура Вы победили! Список результатов:', initialX, initialY);
    ctx.fillText('Худшее время у игрока - ' + names[maxIndex] + ' : ' + times[maxIndex].toFixed(2), initialX, initialY + fontSize);
    
    initialY = 64;

    for (var i = 0; i < times.length; i++) {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
        if (names[i] == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);  // прямоугольники
        ctx.fillText(names[i], initialX + times[i] * step + indent, initialY + indent * i + lineHeight); // текст сдвинуть вправо       
    }
};

window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // draw shadow
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white'; // make color of rect white
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    drawHistogram(ctx, names, times);
};