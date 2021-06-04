import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzyimeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzyimeAdapter() });

test("renders without err", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {});

test("diplays counter", () => {});

test("counter display starts at 0", () => {});

test("clicking button increments counter display", () => {});
