import "./App.css";
import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Verify() {
  const [otp, setOtp] = useState("");
  const textFieldRef = useRef(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [numberError, setNumberError] = useState(false);

  const setFocus = (index) => {
    document.getElementById(`otp${index}`)?.focus();
  };
  const updateOtp = (e, index) => {
    const val = parseInt(e.target.value);

    if (val < 0 && val > 9) return;
    if (!val) return;
    const currentOtpDigits = otp.slice().split("");
    currentOtpDigits[index] = val;
    const newOtp = currentOtpDigits.join("");
    setOtp(newOtp);
    setFocus(index + 1);
  };

  const handleKeyPress = (e, index) => {
    if (e.keyCode === 8) {
      index -= 1;
      const currentOtpDigits = otp.slice().split("");
      currentOtpDigits[index + 1] = " ";
      const newOtp = currentOtpDigits.join("");
      setOtp(newOtp);
      document.getElementById(`otp${index}`)?.select();
    }

    if (e.keyCode === 37) {
      document.getElementById(`otp${index - 1}`)?.select();
    }
    if (e.keyCode === 39) {
      document.getElementById(`otp${index + 1}`)?.select();
    }
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i <= 5; i++) {
      inputs.push(
        <input
          type="number"
          key={i}
          maxLength="1"
          onChange={(e) => updateOtp(e, i)}
          onKeyDown={(e) => handleKeyPress(e, i)}
          value={otp?.[i]}
          id={`otp${i}`}
        />
      );
    }
    return inputs;
  };

  const handleBlur = () => {
    if (mobileNumber.length !== 10) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setMobileNumber(inputValue);

    if (inputValue.length !== 10) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };

  const handleSend = () => {
    if (mobileNumber === "") return;
    toast.success(`OTP sent successfully on ${mobileNumber}`, {
      autoClose: 1500,
    });
    setTimeout(() => {
      toast("OTP received 654321", {
        autoClose: 15000,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }, 3000);
  };

  const verifyOtp = () => {
    if (otp === "") return;
    if (otp !== "654321") {
      toast.error("Invalid OTP", {
        autoClose: 1500,
      });
    } else {
      toast.success("Phone Number Verified successfully", {
        autoClose: 1500,
        position: "top-center",
      });
    }
  };
  const HandleChangeNumber = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div>
          <h1>Phone Number Verification</h1>
          <div className="number-input-field">
            <h2>Enter Mobile Number</h2>
            <TextField
              error={numberError}
              value={mobileNumber}
              onChange={handleChange}
              inputRef={textFieldRef}
              onBlur={handleBlur}
              id="outlined-error-helper-text"
              label="Mobile Number"
              helperText={numberError ? "Must Contain 10 digits" : null}
            />
          </div>
          <div className="send-btn">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              disabled={numberError}
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
        </div>
        <hr />
        <div className="text">Enter the OTP you received</div>
        <div className="otp">{renderInputs()}</div>
        <div className="options">
          <span className="change">
            <p onClick={HandleChangeNumber}>Change Number</p>
          </span>
          <span className="resend">
            <p onClick={handleSend}>Re-send OTP</p>
          </span>
        </div>
        <div className="verify-btn">
          <button onClick={verifyOtp}>Verify Phone Number</button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
