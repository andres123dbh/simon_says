export class IndexModel {
    //public score_table: string;
    constructor() {
        this.round = 0;
        this.array_colors = [];
        this.player_position = 0;
        this.win_round = false;
    }
    /* create sequence of color */
    create_sequence() {
        this.win_round = false;
        this.array_colors = [];
        for (let index = 0; index <= this.round; index++) {
            this.player_position = 0;
            let number_random = Math.floor(Math.random() * 4);
            this.array_colors.push(number_random);
        }
    }
    /* validate button touched by player */
    validate_player_button(number_button) {
        if (this.array_colors[this.player_position] == number_button) {
            this.player_position += 1;
            if (this.player_position == this.array_colors.length) {
                console.log('gano');
                this.round += 1;
                this.win_round = true;
            }
        }
        else {
            alert('puntos' + this.round);
        }
    }
}
