import React, { Component, Fragment } from 'react';
import PoliceClues from '../../intro/PoliceClues';
import PersonalClues from './clues/PersonalClues';
import NextStageButton from '../general-ui/NextStageButton';

export default class SummaryClues extends Component {

    render() {
        const { player, stage, game } = this.props;

        if (stage.name == "summary_clues") {
            return (
                <div>
                    <h2>Summary of the Clues</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>
                    <PoliceClues />
                    <PersonalClues player={player} />
                    <p>
                        In vitae sollicitudin arcu. Etiam a tincidunt ante, eget porttitor lectus. Sed vulputate ligula sem, vitae semper lorem rhoncus euismod. Nam non egestas dui, vitae pulvinar neque. Praesent varius vulputate nisl, faucibus pretium erat auctor vel.
                    </p>
                    <NextStageButton player={player} game={game} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
