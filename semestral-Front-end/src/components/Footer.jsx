const Footer = () => {
  return (
    <>
        <footer className="footer-1 bg-light text-dark">
        <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="links">
                    <ul className="footer-menu list-unstyled d-flex flex-row text-center text-md-left">
                        <li><a href="https://bootstrapbay.com/" target="_blank">Store</a></li>
                        <li><a href="https://bootstrapbay.com/about" target="_blank">About Us</a></li>
                        <li><a href="https://bootstrapbay.com/blog/" target="_blank">Blog</a></li>
                        <li><a href="https://bootstrapbay.com/terms" target="_blank">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="social mt-4 mt-md-0">
                <a className="twitter btn btn-outline-primary btn-icon" href="https://twitter.com/bootstrapbay" target="_blank">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">View our Twitter Profile</span>
                </a>
                <a className="facebook btn btn-outline-primary btn-icon" href="https://www.facebook.com/bootstrapbayofficial/" target="_blank">
                <i className="fab fa-facebook"></i>
                <span className="sr-only">View our Facebook Profile</span>
                </a>
                <a className="github btn btn-outline-primary btn-icon" href="https://github.com/bootstrapbay" target="_blank">
                <i className="fab fa-github"></i>
                <span className="sr-only">View our GitHub Profile</span>
                </a>
            </div>
            </div>
            <div className="copyright text-center">
                <hr />
                <p className="small">&copy; 2019, made with <span className="text-danger"><i className="fas fa-heart"></i></span> by BootstrapBay</p>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer