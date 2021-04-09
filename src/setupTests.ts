
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
// import register from 'ignore-styles';
// register(['.css', '.sass', '.scss']);
Enzyme.configure({ adapter: new ReactSixteenAdapter() });