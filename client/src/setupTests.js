import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });
window.scrollTo = jest.fn(); // Remove error message with window obj
