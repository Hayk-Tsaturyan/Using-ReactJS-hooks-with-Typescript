import { useState } from "react";
import ClickCounter from "./ClickCounter";
import ClickCounter2 from "./ClickCounter2";
import ClickCounterByRef from "./ClickCounterByRef";
import Clip2 from "./Clip2";
import ColorChanger from "./ColorChanger";
import FormForFullName from "./FormForFullName";
import FullNameWithClicker from "./FullNameWithClicker";
import LessAndMore from "./LessAndMore";
import PushCount from "./PushCount";
import Randomizer from "./Randomizer";
import ThemeContext, { themes } from "./color_changer_styles";
import WelcomeWithClicker from "./WelcomeWithClicker";
import { CounterByImperativeHandleOuter } from "./CounterByImperativeHandleOuter";

function App() {
  const [theme, setTheme] = useState(themes.orange);
  const toggleTheme = () =>
    theme === themes.orange ? setTheme(themes.light) : setTheme(themes.orange);

  return (
    <div>
      <p>1. Push button (useState, useEffect)</p>
      <PushCount />
      <br />
      <p>2. Less/More button (useState)</p>
      <LessAndMore
        text="We are team of innovative developers and designers that are working on 
      creating disruptive technologies and services, specialized in web development. Our aim is 
      to take your business into next level taking different approaches to make you stand out 
      from the market"
      />
      <br />
      <p>3. Click counter (useState)</p>
      <ClickCounter />
      <br />
      <p>4. Click counter (useReducer)</p>
      <ClickCounter2 />
      <br />
      <p>5. Theme Changer button (useContext)</p>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Change Theme</button>
        <ColorChanger />
      </ThemeContext.Provider>
      <br />
      <p>6. Play/Pause button (useState, useCallback, useMemo, useRef)</p>
      <Clip2 />
      <br />
      <p>7. Fullname Creator (useState, useMemo)</p>
      <FullNameWithClicker />
      <br />
      <p>8. Welcome Clicker (useState, useEffect, useCallback)</p>
      <WelcomeWithClicker />
      <br />
      <br />
      <p>9. Click counter (useState, useEffect, useRef)</p>
      <ClickCounterByRef />
      <br />
      <p>10. Fullname Form (useState, useMemo)</p>
      <FormForFullName />
      <br />
      <p>
        11. Counter with 2 Buttons (forwardRef, useImperativeHandle, useState,
        useRef)
      </p>
      <CounterByImperativeHandleOuter />
      <br />
      <p>12. Randomizer (useState, useLayoutEffect)</p>
      <Randomizer />
    </div>
  );
}

export default App;
