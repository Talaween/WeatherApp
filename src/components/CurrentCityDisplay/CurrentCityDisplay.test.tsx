import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CityProps, City} from './CurrentCityDisplay';
import {Card} from 'antd';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

const initialState = {
    cities: [],
    forecastFor: '',
};

const defaultProps:CityProps = {
    name: 'London',
    state: 'Cloudy',
    temp: 10,
}
describe('CurrentCityDisplay', ()=> {

    const mockStore = configureStore();
    let store,wrapper;

    it('renders card', ()=> {
        
        store = mockStore(initialState);

        wrapper = shallow((<Provider store={store}><City {...defaultProps}/></Provider>));

        expect(wrapper.find(City)).toBeTruthy();
        expect(wrapper.find(City).prop('name')).toEqual('London');
        expect(wrapper.find(City).children.length).toEqual(1);
        
    });
})

