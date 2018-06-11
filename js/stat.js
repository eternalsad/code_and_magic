'use strict';
function findMax(names, times) {

};
function drawHistogram(ctx, names, times) {

};

window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle ='rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white'; // make color of rect white
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '14px PT Mono';

    ctx.fillText('Вы победили', 120, 40);

};