import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Button3 } from "./index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("Button3", () => {
  describe("when user clicks on button", () => {
    it("calls correct function to save the information", () => {
      //makes a new mock
      const onButtonClickMock = jest.fn();
      const wrapper = Enzyme.shallow(
        <Button3 onButtonClick={onButtonClickMock} />
      );

      const buttonElement = wrapper.find("Button3"); // step 1 above
      buttonElement.simulate("click"); // step 2

      expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
      expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });
  });
});
