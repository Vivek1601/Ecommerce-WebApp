import { useState } from "react";
const Account = () => {

    const [isOpen, setIsOpen] = useState();

    return (
        <div>
          <button onClick={() => setIsOpen(true)}>
            Open Pop-up
          </button>
     
          {isOpen && (
           <div>
            <div>
              This is the content of the pop-up.
            </div>
            <button onClick={() => setIsOpen(false)}>
              Close Pop-up
            </button>
           </div>
          )}
        </div>
      );
}

export default Account;