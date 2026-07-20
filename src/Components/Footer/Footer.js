import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">

        <div className="footer-content-left ">
         <img className="logo"
           src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhIVFRUVFRcVFxUXFRUVFRUXFRUXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tKystLSstLS0tLS0uLy0tLS0tLS0tLS0tLSsuLS0rLS0tLS0tLS0tLy0tLS0tLf/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAYFBwj/xABDEAABAwIDBQUFBQYCCwAAAAABAAIRAyEEEjEFQVFhcQYTIoGRMlKhscEHFCNikjNCU4LR8HKzFRYXJEODorLC4fH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAsEQACAgECBQIFBQEAAAAAAAAAAQIRAxIhBBMxQVGRwSIyYXGBFKGx0fAF/9oADAMBAAIRAxEAPwD5KEUuVOxoSkmFqYKBoQqGI6rCFoUcbJYTgICNjuUaEp6IzyQJNjqKukLmeP0V0LEpMDW3TgKBMECbbZGhU0/qT8Srv6JaTfCOi1gTGsgSrBuUjghYtlQKqxOkcx81rcAqSZdEbvitY0ZdwQgQrS1KQtYLKEFY2nZEtCNlNSK0pVmVIQiFSEKVh+vzKGIdEdUrhxsiVT2C9oSTBE8/kgISkrFkObaJX8UsqQsOgGyQmLhOeXqlBHUojJikRJ5qbwVDzQylEYD0h0RclCwyNqcFKFALoEmWBLVFwf7umBS1ND5fNAUuCKUJliUgtujfl6oM0CYIEpMlNseasCSbgf3oU6BKQwlFFqYBCybYl9yZotAPJOVVS39T80DXaLQFOVlGqYdkufyAHzQsXyw5CqnMiXcvl/8AVuoYZzrAEngBJWp+wq5H7Gpce47+iTmRXcTmpOmzybpSDw+K9b/QmIABNGoOfduj1hYqlAjcsskfIyyIzAJHK9zVWQnTHTKXujVI4ngmqe03r9Co8JiqM1cadUhMq9wlKBGiYqmVBm8oRwVhGvUfJVuRKJk6JXHzQP8AYRIKw6K3c0A09EziAo8E6ojoSRwUuUZSHesOgFwCRxR6KRxRGNQRpifVRqNOwKBNlkJsoSBOTogIxgjNlWmWJSDSdYdFaqKRtCtHRBkpLcdmvkVY0Kpo+XzVjCgTkWABFLKAclJ0ywAJaDJJEcPjKspsJ3arqNg7BOYSzO98FlPQR79Q7m8tT845MqgiWTMsa+p5eC2OXDM6GM952h5NAu49POF2GxOw9R4BbSDG/wAStqebaI/8pXYbB7PMpEVKkVKvvEeFn5abdGgLpWKCUp/MxMeOWTeb/BzGC7BUgPxK1R/JsU2eTRotzOweA/gk9alT6Fe5Xz5H93GfKcuacuaLTG6V5Gx+1VOtTe57TTqUnBtamTen4spfzYDqd0FV0Yls16nbHFhjs16lR7B4H91j2Hi2o6fiSsGO7CEj8PEucPcrsbVHTMbt8l72B2qfvVbCVD4gBUpnTPTdu6tMjmADxXrlMsWOS2XsPyMM1svY+QbW7DuaPFSLPz0s1al5s/aMHO/RcdtnYFbDmKjIBEtIu1w3Frt6++4naIa/IRo6m0mdBVDgx0f4xl80m08HTrMNOq0Oadx+Y4Hmp6XH5Wcrw6b0P1PzO4XFrhIV3PbPsc7DHOyXUibHe08Hf1XE1BCvjyKX3Gx5FIz1d+6yV4HP+qj77jojUVTpKXHd8EAyeSsyoQiPZUYCDhKYncAkdzRKIFtyR5Tn0QIARKIXKgYARe5VErDohKUlQoFEY3hFt1Ubq0DmgybGISOddvX6KPO4FLk3ICl4duCGvTeq23sNE5jQeixJkw7reZWgFU06YEKxt+iDJTpstCZqUBODySkmR/Djb1VzG7kkgLfsrC948N4ka7tZJ9FOclFWyWSSjG2e/wBmtjl0Py5rwwHQu1Jd+UanjYL6XsbZ7aLTeXOu951cfoOS8LYbhTptN/FZjfyta5w8yASTzXR7MripTY8Cz2h0dRMLgT1PUzxMeV5cjkz1KDgQCLg71rYuc7J4iWVKO+hVfT/lBJZ8LeS9TamKq0mipTpmq1pOdjfbLfeZxI4bweSvCW1nsYJfDZ67FzHaTYbm1W47DszVG2rUh/x6ZEOEb3R6wN4C07F2mzvGtGYU8QHVKIcC1wc0/jUyDz8Q6u3ALogrUpxOyKjlictR2Mahw1ek+TQc00qhP7Sg8w6jU35mguAJ5TcmOm75uYskZgA7LvgkgGOEgrnNvduMDg8wdUDniZZThxk6ydAZ4mV8i7QfaJiK2KGKoTS7sZGgHN4dTmmzpJ4cEE1H5dzJqG0d/J9f7R4OoXl1Ns56Lm6TFSi7vqBPATnHUhb31y+kKlMAlzQ5oJgGRIBO7qvlmyftlfYYiixw4slh9DIPwXU0ftE2d3bC15aJDcmWCwQYMDVtotOqSTVsjkVNvdWeq3EU8TTcC0jVlSm4eJp3tcPiDvsV8d7Z7DOGqkC7Ddp5cDzC+g437QdntFR7XFzpiA2C8DQyd1zr6LiNo9sKeNz0XNyhxmkbSx1hDjvB47pUlaepHClkjPWk2u/2ONSuKaowgmZ6JQ1d6do9REqbuipcVY4qstTDxFQUc7gkc3iiVRDUuFWSnG+OSSESiFUITb0CFhkxJlCESUsIjmumN6Y1EDZUtdr1QJlgJTOdFt5UZa6R+rTz+iwC1pjzT0274S073TPduQIy8BaZPwVwVOG0PUp802CBOXUcO3D1T5wFU50EdFZSZvKAjSLGcSuo7N0Jkm2bKyeAdJef0Nd6rm2rpw408I5+8ipHVxZTHwNRcfFPZR8nn8Y24qK7uj1cf22w1JwyNNQsnKZLWiRBjjbksn+1gtBy0GaWu7yXBGg2feKtbhhY5QmjhS6j4eA4fDFLd/k67s728fhalSq9neCuMzhOXxAkyDB4lehifthrk/h0qbR0c4+s/RcV3IcCCJgfVVMoDgFljS6F4xxrz6nRbW+0PF4l9OpIaaBzsLW5TJiSZJnRX7d+0zG4xgpMimCIcKcjNxkkyByC5tlJdT2KpMccRQyia1CoG2/fpjvGxw9k+qEkooznGN0v3/k5EYFzg4vPCy0MwsCwhdhgKbaeCxLyBNSpSosMXGtR8eTWjzXZ7N2e5n3TDjuO5fRBrNzUS6o54eS4XzO/dgjgprK30RHnSn/vwfGKmCBHsrI7Zh3Ewuz2TtatTqtoUSAatRjb02Pu45RdwMar36BbiNp1i0Myt71oBytBDKTqcgGxve3VFZ5bbGXEzjGz5X/oo7yVacF4RAuB8ZXe4rZppYNwdkJNdkFrmPt3brS0mOi9HC4IsbQpDuu7dTmo2aZLnPzEnid0RwQ/UvwSy/8ASlGNs+ZVHOf4iLnXrvVS6qjSaMPirfwv+8rk3m5XRhy672OvBl5jkkun9J+4pSOTOKrcfmF0HWkQpCFYgSiOismyrTTcqFFFUAJHpksrDIVLKjkURzQb70GtHxUzbkKh0A4oCMuAnogRmKhduCMwgIxqjoFkaLBEnelpjeUGu1A0WEa2pFp4BHOBI3oBwaElMS4k8vkgToupNvJWgO6qqUpqTogTas0iqBxK6DG03HB03ONi8iOhefmVzdCBddDVxgdgwJ9iqfRzJHxlcnELdHFxMXqhpXc8GmJg6K8BZqT/AC6rQ1w4hXLzTLWaHdNvQlK2nzKqpvEa7z8ym7wcUoulmmhh3PexjASXEiBck2AAHUr2di1XYXF0XPkGnWaHg2gZstQHyJU7L0JL6gIzQ2jT5VMQ4tnyY2ofRebtvaLalarUabPe8joXGPhC55ScnSJfE3SOr7YYf7uyhhtCKleqRxBf3VI/ppk+a9LAk/fdl6R92oz+mouL292j++VhWOgpUWebabc//WXr28L2nwzcTgKrqkMo0KTKpyu8LmteHCIk6jRI8bT2XgzxNOkvBR2WhtZ+IOmHpVK/m1pDB+pzVn7GPJxLZOrK08Z7iodVZsXGYV2FxFGriRRfWNNo/De/wMOd3sjeco8lRgMXhsJiQ7vw+mGVAagY9vifSe0Nym+pF+aEU6SE0PTVbl1F7vuL5In7wz/KetdEu7/A3t3FOfR68Jm16QwrqJd+IazHhsH2RTcCZ01IstVPb1AVcK8v8NKkxjzB8Lmh0iIk6jRJy5eDny4JuLqPnt9Cugf93xX/ACf8wrknnxQvdpbWpCjXYXDM/usgvfK8l19BbiueLpdK6uGi1dnocJjlFztVv7IeElQWlMSq6hsV2HaiNULVG6IFwRGK4ueg+qMITc+SMrFBH2QIUeUCiOhXBAokpeCIxoiE7RA5lKoCdUBWO0wJUbe5SuBRd80BB802CbRK2Ao1s3KwjGYJuVY56rc/cEWti5QJteR2gnVW5gFRJOiYNA1MlARotDiei6HszSY/vaTiPGyWk+8wyPgSuYNQkwFow+IdRc2pN2mY+YUs0NUaIZ8LnBxTp9vv2NGMAa+D7yZgzEACSTAAGpO5entfaGFxDG1KQLagjMwiQeYKy7KwpqZ5NxTe5oGpc1sgfM9AVOM3p3Ixm+Xc04tdUzPUZlJaRBBII5ixUaiKDvNephdjkeKs9tJv5gc5/wANMeI+cDmi8iSC5JLqexhz3GC73QzUc3nUe0UaX6R37v5VyQbYL3+0tfPSwlOlm7lrHuGYCS81nh5MWmzbXgHmvOwWya1b9mwuA1dENbzc42b5lRxtLdix2XU86nTDRAVBwohwnUyuy2fsSg1tR1Wr3rmAfh0fZLnODWsNU6zP7oOhuvO7SbK7moMrcrXNBAzB8HR7M41LXBw4iPNUWWN0PHLuc5Vw0kEOIgQmbs972PMktZBc7hJgfFexgtiVagzmGU99R/gpj+Y+0eQk8lbtnZ9NlKk6g9zw4va9zhlGZmWMrdRZ28z0ReSN0inO3STObbSuDO6Ej8PYidSvTwuzalQwxrnEe6J9eC2VNn0qQPe1Jd7lMgmfzP8AZHlPkneSKGfERi6u39DnnUbg8ESU9U8OMKsqyOhOyHcgVJSEohSGSFBCUSiQSkJUJQKI6AoQggVh0BKUxSlEYvn0Rpm0KRHRQICsdp3FQGLFQGbFMy8g6rCEa/cUQLwUvJODNt6AjA2xRkTdQXsdUvzCwlFgfNhZEQN8pWGwPqjCArF7zxDomkb0RCYOA3IGY+zsE574pi53btCT8AVc+pUpuBDnNc0zaWuBGvQqkY2oy9OQdJBIMHXRMC46gKbTvfoSlqbuVUbf9YKv7rnAnUgBpPVwAKx99UeXEuiTxknzRcwiJGonTdxUyjgEFCIqjBdEa9n7erYcFjXHITmALW1GzxAcCAeYRx3aDEV7Oe9w3BxOUdGiwWLKOCtiyHLiZqHWh8JtbEYck06jgXDK7LGmojgZ3i4T4HtDiaALGucATmywHNnjDgYPNZ1UR4gfVHQvAVpfVGjH7Wr1jL3uPN7iSOk6BDAbXq4fMGvdlfBIIDmkjeWuBE84VDzKSUeWqoZRjVVsbcXt+vVGUucW8Jys/SLfBDA0KdTP31TKQJaBoT9d1ra62girs57aTap9l1hefX0P6TwXn1GTFyEFCLXw7CxjBqobfVDvVcpnFIqosiFKVHFBEdAKTj5JykcUR0QpSiUo0RGIgVClKxQLksqShKITS3gUTA6IOugHDegKMD/6KZpnqqwRomBvzhYVotiQkkygH7/VMbxCAtDkTcIRKVr4RJi6wjQWpgN09EOakoCMisBVfHjb6oE71jVZflMapg53JUZ0zKm4oUI4mmpi31DmdFgGi0ABogADcFr2fs59VtRzSIptL3E2ETEDmdwXnF4UZiXtADSQDZ19RO/ikcXWwjg6qOxcW3TOmFT3nNbq+2GvpMoBoBYSS7ebuI6e2fhwWdqgNS8GMA8VXiGkXO5EVQFq27tw4t3eZGttBDQRMEmet/gtvY8VK+mxdsXZ33h4ph7WEgkF0xYTHpJ8ivPrNi0/JUVHGPCUxcik7CoNO7J94f7JPhGgnSdfkEMyUqApkqHpdiJSUSdUqIUiFKiShKI6QDKUhElBxRHQCUIUQJWGSIgVNyWURgBQoKSsMaWmEXBRwlBk8VhRokJWC5CIBCIagBhy8k1MqESklYQse3epNkWmUC3cgLQ8xZKT6KG9iUANxWFobMoPgUqZoWFaFNinN+qRwvHC6AcgGi5hsmVeaE0rE2hpQYBc75SqDRY1ELkqMKNbKwQEoSllSVhqHJSkqEpZRCkQuQJSl14UKw9EcVCUrkJRGoMoFSUJWCkQlAFBBYcJKVFBEIJSlNCUrDI1CoEGHRFpRlYUMqNKAKYLADKDk0KBAUWYTOcD6hQhJMFYBYT6hQuBui4oFyAtALwd49VA9RAhY1BLr+X1ChQp706wrQCnGg6JQisBqyEoSgSi02/visDSSUMyDihKwdICooSoFhqIgoSlzLBoEXRKkoSiEBQlDeisNQHFCbKEKLDAUUUebohAShKKVYNEKCMoOWCf/9k=" 
           alt="logo" height={"60px"} width={"150px"} />        
       
          <p>Delicious food delivered to your door 🍔</p>
       
    
    <div className="footer-content-left"> 
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
 </div>
        <div className="footer-content-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Cart</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h3>Contact</h3>
          <p>Email: support@valai_illai.com</p>
          <p>Phone: +91 8870573887</p>
        </div>

      
<hr />
      <p className="footer-bottom">
        © 2026 valai_illai_App. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;