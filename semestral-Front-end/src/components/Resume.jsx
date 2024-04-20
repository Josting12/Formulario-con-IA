import React from 'react'

const Resume = () => {
    const style1 = {backgroundColor: '#611F6A'}
    const style2 = {backgroundColor: '#071D5C'}
    const style3 = {backgroundColor: '#007A5B'}
    const style4 = {backgroundColor: '#1264A4'}
    const style5 = {backgroundColor: '#ECB22F'}
    const style6 = {backgroundColor: '#E01E5B'}
    const style7 = {backgroundColor: '#212529'}
    const style8 = {backgroundColor: '#EBEAEB'}
  return (
    <>
        
        <div className="page-hero bg-primary text-white" id="banner">
		<div className="bubbles d-none d-md-block">

        <div className="bubble bubble-1 rotate-bubble bg-warning"></div>
        <div className="bubble bubble-2 bubble-bottom-right bg-danger rotate-bubble"></div>
        <div className="bubble bubble-3 bubble-top-right bg-warning rotate-bubble"></div>
        <div className="bubble bubble-4 bubble-top-left bg-info rotate-bubble"></div>
        <div className="bubble bubble-5 bg-info rotate-bubble"></div>
        <div className="bubble bubble-6 bubble-bottom-right bg-danger rotate-bubble"></div>
        <div className="bubble bubble-7 bubble-top-right bg-success rotate-bubble"></div>
        <div className="bubble bubble-8 bubble-top-left bg-success rotate-bubble"></div>
        <div className="bubble bubble-9 bg-warning rotate-bubble"></div>
        <div className="bubble bubble-10 bg-danger rotate-bubble"></div>
        <div className="bubble bubble-11 bubble-bottom-right bg-info rotate-bubble"></div>
        <div className="bubble bubble-12 bubble-top-right bg-success rotate-bubble"></div>
        <div className="bubble bubble-13 bubble-top-left bg-success rotate-bubble"></div>

        <div className="circle circle-1 bg-light rotate-circle"></div>
        <div className="circle circle-2 bg-success rotate-circle"></div>
        <div className="circle circle-3 bg-danger rotate-circle"></div>
        <div className="circle circle-4 bg-info rotate-circle"></div>
        <div className="circle circle-5 bg-success rotate-circle"></div>
        <div className="circle circle-6 bg-info rotate-circle"></div>
        <div className="circle circle-7 bg-warning rotate-circle"></div>
        <div className="circle circle-8 bg-white rotate-circle"></div>
        <div className="circle circle-9 bg-warning rotate-circle"></div>
        <div className="circle circle-10 bg-danger rotate-circle"></div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8  offset-lg-2 text-center">
                    <div className="title">
                        <h1 className="display-2 text-white">Semestral DS9</h1>
                        <h4 className="text-white">Generador de paleta de colores con IA.</h4>
                    </div>
                    <div className="credits">
                                    <p className="text-white mb-0 small">Hecho en casa <span className="text-danger"><i className="fas fa-heart"></i></span> by</p>
                                    <p className="text-white mb-0 small">Anthony Gonzalez - Josting Ramos - Nelson Rodriguez </p>
                                    
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="intro bg-light">
        <div className="container">
            <div className="section desc">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                                    <p className="lead"><strong>Lazy Kit</strong> is a complete design system built on Bootstrap 4. It is created for all web makers that want to get a project off the ground quickly and neatly. It overwrites all Bootstrap 4 components and adds 2 more plugins. It also comes with 3 example pages.</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="row">
                    <div class="col-12 col-md-8 offset-md-2">
                    <div class="page-header mb-5">
                        <h2 id="colours">Colours</h2>
                        <p>We have improved the Bootstrap colour selection with a brighter variation. All the components from the kit will have variations for each one of this contextual classes.</p>
                    </div>


                    </div>
                </div>
            <div class="row">
                <div class="col-12 col-lg-10 offset-lg-1">
                    <div class="row">

       
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style1}></div>
                                    <div class="title">Primary</div>
                                    <div class="hex text-muted">#611F6A</div>
                                </div>
                            </div>
                        </div>

       
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style2}></div>
                                    <div class="title">Secondary</div>
                                    <div class="hex text-muted">#071D5C</div>
                                </div>
                            </div>
                        </div>

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style3}></div>
                                    <div class="title">Success</div>
                                    <div class="hex text-muted">#007A5B</div>
                                </div>
                            </div>
                        </div>

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style4}></div>
                                    <div class="title">Info</div>
                                    <div class="hex text-muted">#1264A4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style5}></div>
                                    <div class="title">Warning</div>
                                    <div class="hex text-muted">#ECB22F</div>
                                </div>
                            </div>
                        </div>

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style6}></div>
                                    <div class="title">Danger</div>
                                    <div class="hex text-muted">#E01E5B</div>
                                </div>
                            </div>
                        </div>

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style7}></div>
                                    <div class="title">Dark</div>
                                    <div class="hex text-muted">#212529</div>
                                </div>
                            </div>
                        </div>

        
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="card no-hover color">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="swatch" style={style8}></div>
                                    <div class="title">Light</div>
                                    <div class="hex text-muted">#EBEAEB</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default Resume