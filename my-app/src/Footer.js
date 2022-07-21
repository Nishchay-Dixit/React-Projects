import "./styles.css"

const Footer = (props) => {
    return (
        <>
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <p class="copyright">{props.companyname} © 2018</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;