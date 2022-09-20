export class IndexView {
    private _btn_green: any;
    private _btn_red: any;
    private _btn_yellow: any;
    private _btn_blue: any;

    constructor() {
        this._btn_green = this.getElement('green');
        this._btn_red = this.getElement('red');
        this._btn_yellow = this.getElement('yellow');
        this._btn_blue = this.getElement('blue');
        //this._display.classList.toggle('active_green');
    }

    private getElement = (selector: string): HTMLElement | null => document.getElementById(selector);
    
    /* paint funtion */
    public paint_funtion(array_colors: Array<number>,speed_show: number) {
        this.clean_button();
        let posicion = 0;
        const button_color = setInterval(() => {
            this.clean_button();
            switch (array_colors[posicion++]) {
                case 0:
                    this._btn_green.classList.toggle('active_green');
                    setTimeout(() => {
                        this.clean_button();
                    }, speed_show);
                    break;

                case 1:
                    this._btn_red.classList.toggle('active_red');
                    setTimeout(() => {
                        this.clean_button();
                    }, speed_show);
                    break;

                case 2:
                    this._btn_yellow.classList.toggle('active_yellow');
                    setTimeout(() => {
                        this.clean_button();
                    }, speed_show);
                    break;

                case 3:
                    this._btn_blue.classList.toggle('active_blue');
                    setTimeout(() => {
                        this.clean_button();
                    }, speed_show);
                    break;
            
                default:
                    break;
            }
            if (posicion == array_colors.length) {
                clearInterval(button_color);
            }
        }, speed_show*1.2);
    }

    /* clean button colors */
    public clean_button() {
        this._btn_green.classList.remove('active_green');
        this._btn_red.classList.remove('active_red');
        this._btn_yellow.classList.remove('active_yellow');
        this._btn_blue.classList.remove('active_blue');
    }
}