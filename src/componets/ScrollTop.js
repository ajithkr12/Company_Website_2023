
import React , { useState, useEffect }from 'react';

const ScrollTop = () =>  {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

  return (
    <div>
    {" "}
        {showTopBtn && (
            <div className="scroll-top">
              <i class="bi bi-chevron-up" onClick={goToTop}></i>
            </div>
        )}
        {" "}
    </div>
  );}
  

export default ScrollTop;
