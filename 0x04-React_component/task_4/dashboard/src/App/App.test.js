import { shallow } from 'enzyme';
import App from './App';

describe('<App /> is rendering', () => {
  it('.app exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists('.App')).toEqual(true);
  });

  it('.App-header exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists('.App-header')).toEqual(true);
  });

  it('.App-logo exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists('.App-logo')).toEqual(true);
  });

  it('.App-body exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists('.App-body')).toEqual(true);
  });

  it('.App-footer exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists('.App-footer')).toEqual(true);
  });
});
