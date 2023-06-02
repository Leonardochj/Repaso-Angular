import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy()" >+1</button>
    <button (click)="descreaseBy()">-1</button>
    <button (click)="resetBy()">Reset</button>
    `,
})
export class CounterComponent{
    public title: string = 'Hola Mundo';
    public counter: number = 0;

    increaseBy(): void {
        this.counter += 1;
    }

    descreaseBy(): void {
        this.counter -= 1;
    }

    resetBy(): void{
        this.counter = 0;
    }
}