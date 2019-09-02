import React from 'react';
import { shallow  } from 'enzyme';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';


describe('HeaderComponent', () => {
    it('Deve criar o header sem erros', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.containsMatchingElement(<Link className="home" to={'/'}>Movies</Link>))
    })
});
