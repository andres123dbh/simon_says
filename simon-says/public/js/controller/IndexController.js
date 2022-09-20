export class IndexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.add_funtion_element();
    }
    /* add_funtion_element */
    add_funtion_element() {
        const start_game = document.getElementById('btn_star_game');
        start_game === null || start_game === void 0 ? void 0 : start_game.addEventListener('click', () => {
            this.model.create_sequence();
            this.view.paint_funtion(this.model.array_colors, 1000);
        });
        const buttons_color = Array.from(document.getElementsByClassName('sbtn'));
        buttons_color.forEach((element, i) => {
            element === null || element === void 0 ? void 0 : element.addEventListener('click', () => {
                this.model.validate_player_button(i);
                if (this.model.win_round == true) {
                    this.model.create_sequence();
                    this.view.paint_funtion(this.model.array_colors, 1000);
                }
            });
        });
    }
}
