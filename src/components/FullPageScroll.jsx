import React from 'react';
import { FullPage, Slide } from 'react-fullpage';

const FullPageSlider = () => {
  let slideIndexS = 0;
  let sliding = false;

  const handleSlideLoad = (section, origin, destination, direction) => {
    slideIndexS = destination.index + 1;
  };

  const handleLeave = (origin, destination, direction) => {
    console.log('Index: ' + origin + ' Slide Index: ' + slideIndexS);

    if (origin === 1 && !sliding) {
      if (direction === 'down' && slideIndexS < 4) {
        sliding = true;
        // Move slide right
        // You can use a ref to call the moveSlideRight() method from react-fullpage
        // For simplicity, I'll just log the action here.
        console.log('Moving slide right');
        setTimeout(() => {
          sliding = false;
        }, 1000); // Add a delay to prevent rapid sliding
      } else if (direction === 'up' && slideIndexS > 1) {
        sliding = true;
        // Move slide left
        // You can use a ref to call the moveSlideLeft() method from react-fullpage
        // For simplicity, I'll just log the action here.
        console.log('Moving slide left');
        setTimeout(() => {
          sliding = false;
        }, 1000); // Add a delay to prevent rapid sliding
      }
    } else if (sliding) {
      return false;
    }
  };

  return (
    <FullPage
      scrollSensitivity={7}
      touchSensitivity={7}
      onSlideLoad={handleSlideLoad}
      onLeave={handleLeave}
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <React.Fragment>
            <Slide>
              <div className="section">
                <h1>Section 1</h1>
                <p>Content of section 1</p>
              </div>
            </Slide>
            <Slide>
              <div className="section">
                <h1>Section 2</h1>
                <p>Content of section 2</p>
              </div>
            </Slide>
            <Slide>
              <div className="section">
                <h1>Section 3</h1>
                <p>Content of section 3</p>
              </div>
            </Slide>
            <Slide>
              <div className="section">
                <h1>Section 4</h1>
                <p>Content of section 4</p>
              </div>
            </Slide>
          </React.Fragment>
        );
      }}
    />
  );
};

export default FullPageSlider;
