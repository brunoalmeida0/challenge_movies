import React from 'react';
import { shallow  } from 'enzyme';
import AverageMovie from './../../../components/AverageMovie';

describe('AverageMovieComponent', () => {
    it('Deve criar o AverageMovieComponent sem erros', () => {
        let voteAverage = 8.6
        const wrapper = shallow(<AverageMovie voteAverage={voteAverage} page={'page'}/>);
        expect(wrapper.containsMatchingElement(<button className={'average-value page'}>{`${voteAverage*10}%`}</button>)).toEqual(true);
    })
});