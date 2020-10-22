import { animate, animateChild, group, keyframes, query, state, style, transition, trigger, useAnimation, } from '@angular/animations';

/**
 * Триггер анимации появления
 */
export function fadeIn(affix: string = '', delay: number = 0, time: number = 500) {
    return trigger(`fadeIn${affix}`, [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(`${time}ms ${delay}ms`, keyframes([
                style({opacity: 0}),
                style({opacity: 1})
            ]))
        ])
    ])
}
/**
 * Триггер анимации исчезновения 
 */
export function fadeOut(affix: string = '', delay: number = 0, time: number = 500) {
    return trigger(`fadeOut${affix}`, [
        transition(":leave", [
            style({ opacity: 1 }),
            animate(`${time}ms ${delay}ms`, keyframes([
                style({opacity: 1}),
                style({opacity: 0})
            ]))
        ])
    ])
}
/**
 * Триггер анимации перемещения к 0 позиции с появлением
 */
export function slideFadeIn(affix: string = '', delay: number = 0, time: number = 500, startX: string = '-100%', startY: string = '-100%') {
    return trigger(`slideFadeIn${affix}`, [
        transition(":enter", [
            style({opacity: 0, transform: `translateX(${startX}) translateY(${startY})`}),
            animate(`${time}ms ${delay}ms`, keyframes([
                style({opacity: 0, transform: `translateX(${startX}) translateY(${startY})`}),
                style({opacity: 1, transform: `translateX(0) translateY(0)`})
            ]))
        ])
    ])
}
/**
 * Триггер анимации перемещения от 0 позиции с исчезновением
 */
export function slideFadeOut(affix: string = '', delay: number = 0, time: number = 500, endX: string = '-100%', endY: string = '-100%') {
    return trigger(`slideFadeOut${affix}`, [
        transition(":leave", [
            style({opacity: 1, transform: 'translateX(0) translateY(0)'}),
            animate(`${time}ms ${delay}ms`, keyframes([
                style({opacity: 1, transform: `translateX(0) translateY(0)`}),
                style({opacity: 0, transform: `translateX(${endX}) translateY(${endY})`})
            ]))
        ])
    ])
}