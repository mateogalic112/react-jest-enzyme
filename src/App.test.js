import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzyimeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzyimeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders without err", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("diplays counter", () => {
  const wrapper = setup();
  const counter = findByTestAttribute(wrapper, "counter-display");
  expect(counter.length).toBe(1);
});

test("counter display starts at 0", () => {});

test("clicking button increments counter display", () => {});
