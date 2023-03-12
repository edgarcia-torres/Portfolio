import styled from "styled-components";

const styles = styled.div
    `
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  color: black;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg-primary) !important;
  font-family: var(--secondary-font);
}

.grecaptcha-badge {
  display: none !important;
}

.loadingText {
  margin-top: 2rem;
  text-align: center;
  color: var(--text-light);
}

// .customBtn {
//   min-width: 140px;
//   padding: 1rem 18px;
// }
.footer-logo {
  border-radius: 40px;
}

section {
  flex: 1;

  input,
  textarea {
    background: transparent;
    outline: none;
    border: 2px solid var(--secondary-color);
    width: 100%;
    color: var(--text-light);
    padding: 1rem;

    &::placeholder {
      color: var(--text-light);
    }
  }

  input {
    height: 50px;
    border-radius: 50px;
  }

  textarea {
    border-radius: 15px;
    margin-top: 2rem;
  }
}

.btnContainer {
  text-align: end;
}

#form-error {
  color: red($color: #ff0000) !important;

  font-family: 'Courier New';
  font-size: 30px;
}`


export default styles;