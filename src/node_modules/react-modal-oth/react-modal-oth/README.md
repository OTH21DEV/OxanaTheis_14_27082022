[![MADE WITH - JAVASCRIPT](https://img.shields.io/badge/MADE_WITH-JAVASCRIPT-1D75C2?style=for-the-badge)](https://) [![STYLED - CSS](https://img.shields.io/badge/STYLED-CSS-E034BE?style=for-the-badge)](https://) ![BUILT WITH - REACT](https://img.shields.io/badge/BUILT_WITH-REACT-4F28B0?style=for-the-badge) 



# Modal app - pop up plugin 

This project is a React plugin allowing to display an alert in other words a pop up information. <br />Contains a smoth animation while appear on the screen and can be controlled by keyboard.

## Installation

$ npm install --save react-modal-oth<br />
$ yarn add react-modal-oth


## How the plugin works

- Import module : 
```
import Modal from "react-modal-oth";
```

- Create your state in your component:
```
const [modalIsOpen, setModalIsOpen] = useState(true);
```

- Render your alert in your component:

```
return <Modal icon={icon} closeIcon={close_icon} show={modalIsOpen} setShow={setModalIsOpen} title={"Well done!"} text={"Employee was successfully created!"} />;
```

### ```<Modal/> params:```

- icon : svg component used in the Modal (decoration purpose).<br />
Import the svg component as:
```
import icon from "../assets/icon.svg";
```

- closeIcon : svg component used in the Modal - close icon.<br />
Import the svg component as:
```
import close_icon from "../assets/close.svg";
```
- show : Boolean state use to show and hide the Modal 
- setShow : function that updates the state
- title : Modal heading
- text: additional text information 

## Example

```
import "./style.css";

const Modal = ({ icon, closeIcon, show, setShow, title, text }) => {

  const handleKeydown = useCallback((e) => {
    if (e.type === "click" || e.key === "Escape" || e.key === "Enter") {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    show && (
      <>
        <div className="wrapper-modal">
          <div className="modal">
            <div className="modal-icon">
              <img src={icon} alt="" />
            </div>
            <img className="modal-close-icon" src={closeIcon} alt="" onKeyPress={(e) => handleKeydown(e)} onClick={(e) => handleKeydown(e)}></img>
            <h1 className="modal__title">{title}</h1>
            <p className="modal__text">{text}</p>
            <div className="wrapper-btn">
              <button type="button" className="btn" onClick={(e) => handleKeydown(e)}>
                OK{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};
```



![modal](https://user-images.githubusercontent.com/81259062/190851870-c1d58c7e-98a0-45bc-8dd1-b5f760946756.gif)
