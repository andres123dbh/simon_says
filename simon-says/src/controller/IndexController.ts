import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";

export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    constructor(model: IndexModel, view: IndexView) {
        this.model = model;
        this.view = view;
        this.add_funtion_element();
    }

    /* add_funtion_element */
    add_funtion_element() {
        const start_game = document.getElementById('btn_star_game');
        start_game?.addEventListener('click', () => {
            this.model.create_sequence();
            this.view.paint_funtion(this.model.array_colors,1000);
        });

        const buttons_color =  Array.from(document.getElementsByClassName('sbtn'));
        buttons_color.forEach((element,i) => {
            element?.addEventListener('click', () => {
                this.model.validate_player_button(i);
                if (this.model.win_round == true) {
                    this.model.create_sequence();
                    this.view.paint_funtion(this.model.array_colors,1000);
                }
            });
        });
    }
}