import React, { Component } from 'react';

//Importing the pages
import IndependentInvestigation from '../pages/IndependentInvestigation';
import SummaryClues from '../pages/SummaryClues';
import IntroDiscussion from '../pages/IntroDiscussion';
import Incentives from '../pages/Incentives'
import PresComStruct from '../pages/PresComStruct';
import InitialWhodunit from '../pages/InitialWhodunit';
import TestIncentives from '../pages/TestIncentives';
import TestComStruct from '../pages/TestComStruct';
import ClueHints from '../pages/ClueHints';
import DiscussionInstructionsPage from '../pages/DiscussionInstructionsPage';

export default class Page extends Component {
    render() {
        const { currentPage, round, player, game, previousPage, nextPage, scrollToTop } = this.props;

        if (currentPage === 0) {
            return (
                <IndependentInvestigation player={player} round={round} game={game} />
            )
        } else if (currentPage === 1) {
            return (
                <SummaryClues player={player} round={round} game={game} />
            )
        } else if (currentPage === 2) {
            return (
                <InitialWhodunit player={player} round={round} game={game} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 3) {
            return (
                <IntroDiscussion scrollToTop={scrollToTop} />
            )
        } else if (currentPage === 4) {
            return (
                <Incentives player={player} game={game} />
            )
        } else if (currentPage === 5) {
            return (
                <TestIncentives player={player} game={game} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 6) {
            return (
                <PresComStruct player={player} round={round} game={game} previousPage={previousPage} nextPage={nextPage} scrollToTop={scrollToTop} />
            )
        } else if (currentPage === 7) {
            return (
                <TestComStruct player={player} game={game} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 8) {
            return (
                <ClueHints player={player} round={round} game={game} scrollToTop={scrollToTop} />

            )
        } else if (currentPage === 9) {
            return (
                <DiscussionInstructionsPage player={player} round={round} game={game} previousPage={previousPage} />

            )
        }
    }
}
