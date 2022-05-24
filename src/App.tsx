import React, { useState } from "react";
import LoadingSpinner from "./loadingSpinner/loadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitOk, setIsSubmitOk] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const [isSubmitOk2, setIsSubmitOk2] = useState<boolean>(false);
  const spinnerLoadingTimeInMs = 3000;

  const handleSubmit1 = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSubmitOk(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitOk(true);
    }, spinnerLoadingTimeInMs);
  };

  const handleSubmit2 = (event: any) => {
    event.preventDefault();
    setIsLoading2(true);
    setIsSubmitOk2(false);
    setTimeout(() => {
      setIsLoading2(false);
      setIsSubmitOk2(true);
    }, spinnerLoadingTimeInMs);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessibility demo</h1>
      </header>

      <div className="container">
        <div className="column">

          <h2>Accessible form</h2>

          <form onSubmit={(event) => handleSubmit1(event)}>

            <fieldset className="questionSet">
              <legend>
                <h3>Personal information</h3>
              </legend>

              <div className="question">
                <label className="leftAlign" htmlFor="Name">
                  Name
                  <span className="madatoryStar" aria-hidden={true}>*</span>
                </label>
                <input
                  className="block"
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  placeholder={"Use characters"}
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      const isValid = e.target.value !== "";
                      const isTooLong = e.target.value.length > 8;

                      if (isValid && !isTooLong) {
                        e.target.setCustomValidity("");
                      } else if (isTooLong) {
                        e.target.setCustomValidity("Name is too long!");
                      } else {
                        e.target.setCustomValidity("Name is required!");
                      }
                    }
                  }
                />
              </div>

              <div className="question">
                <label className="leftAlign" htmlFor="Surname">
                  Surname
                  <span className="madatoryStar" aria-hidden={true}>*</span>
                </label>
                <input
                  className="block"
                  type="text"
                  id="Surname"
                  name="Surname"
                  required
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      const isValid = e.target.value !== "";

                      if (isValid) {
                        e.target.setCustomValidity("");
                      } else {
                        e.target.setCustomValidity("Surname is required!");
                      }
                    }
                  }
                />
              </div>

              <div className="question">
                <label className="leftAlign" htmlFor="Password">
                  Password
                </label>
                <input
                  className="block"
                  type="password"
                  id="Password"
                  name="Password"
                />
              </div>

            </fieldset>

            {/* Begin preferences */}
            <fieldset className="questionSet">
              <legend>
                <h3>Preferences</h3>
              </legend>

              {/* Begin pets */}
              <fieldset>

                <legend className="marBottomHalf">
                  Which pets do you prefer?
                  <span className="madatoryStar" aria-hidden={true}>*</span>
                </legend>

                <div role="radiogroup" className="question">

                  <input type="radio" id="kitties" name="favAnimal" value="Cats" required />
                  <label className="marginLeftAndRight" htmlFor="kitties">
                    Cats
                  </label>

                  <input type="radio" id="doggos" name="favAnimal" value="Dogs" required />
                  <label className="marginLeftAndRight" htmlFor="doggos">
                    Dogs
                  </label>

                </div>

              </fieldset>
              {/* End pets */}

              {/* Consider using CSS in fieldsets */}
              <br aria-hidden={true} />

              {/* Begin transport */}
              <fieldset>
                <legend className="marBottomHalf">Which type of transport do you own?</legend>
                <div className="question leftAlign">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="marginLeftAndRight" htmlFor="vehicle1">
                    I have a bike
                  </label>
                  <br aria-hidden={true} />
                  <br aria-hidden={true} />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label className="marginLeftAndRight" htmlFor="vehicle2">
                    I have a car
                  </label>
                </div>
              </fieldset>
              {/* End transport */}

            </fieldset>
            {/* End preferences */}

            {!isLoading &&
              <button className="btnSubmit" type="submit">
                Save accessible form
              </button>
            }

            <LoadingSpinner loading={isLoading} text="Saving, please wait." />
            <div aria-live="polite">
              {!isLoading && isSubmitOk ? <p>Save succeeded!</p> : <></>}
            </div>
          </form>
        </div>

        <div className="verticalLine" />
        <hr className="horizontalLine" />


        {/* Not accessible form */}
        <div className="column">
          <h2>Not accessible form</h2>
          <form onSubmit={(event) => handleSubmit2(event)}>
            <h3 className="marTop40">Personal information</h3>
            <div className="question">
              <label className="leftAlign">Name*</label>
              <input className="block" type="text" id="Name2" name="Name2" placeholder="Use characters" />
            </div>
            <div className="question">
              <label className="leftAlign">Surname*</label>
              <input className="block" type="text" id="Surname2" name="Surname2" />
            </div>
            <div className="question">
              <span className="leftAlign">Password</span>
              <input
                className="block"
                type="password"
                id="Password2"
                name="Password2"
              />
            </div>
            <br aria-hidden={true} />
            <div className="questionSet">
              <h3>Preferences</h3>
              <p>Which pets do you prefer?*</p>
              <div className="question">
                <input type="radio" id="kitties2" name="favAnimals2" value="kitties" />
                <span className="marginLeftAndRight">Cats</span>
                <input type="radio" id="doggos2" name="favAnimals2" value="doggos" />
                <span className="marginLeftAndRight">Dogs</span>
              </div>
              <br aria-hidden={true} />
              <p>Which type of transport do you own?</p>
              <div className="question leftAlign">
                <input
                  type="checkbox"
                  id="vehicle12"
                  name="vehicle12"
                  value="Bike"
                />
                <span className="marginLeftAndRight">I have a bike</span>
                <br aria-hidden={true} />
                <br aria-hidden={true} />
                <input
                  type="checkbox"
                  id="vehicle22"
                  name="vehicle22"
                  value="Car"
                />
                <span className="marginLeftAndRight">I have a car</span>
              </div>
            </div>
            {!isLoading2 &&
              <button className="btnSubmit" type="submit">
                Save not accessible form
              </button>
            }
            <LoadingSpinner loading={isLoading2} />
            {!isLoading2 && isSubmitOk2 ? <p>Save succeeded!</p> : <></>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
