import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Particles from 'react-tsparticles';
import '../Styles/Header.css';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            particlesCount: 100,
            count: 100,
            isReset: !0
        }
    }

    clickCheck = () => {
        let _count = this.state.count;
        _count += 4;
        if (_count > 180) {
            _count = this.state.isReset ? 104 : 100;

            this.setState({
                particlesCount: _count,
                isReset: !this.state.isReset
            })
        }

        this.setState({ count: _count });
    }

    render() {
        document.title = 'IT School Mingbuloq'
        return (
            <div className='Header' onClick={this.clickCheck}>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    height='100vh'
                    options={{
                        background: {
                            color: {
                                value: "#1A2B3C",
                            },
                        },
                        fpsLimit: 80,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: false,
                            },
                            modes: {
                                bubble: {
                                    distance: 20,
                                    duration: 2,
                                    opacity: 0.2,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 140,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            collisions: {
                                enable: false,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 0.8,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: this.state.particlesCount,
                            },
                            opacity: {
                                value: 0.8,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />

                <h1 className='HeaderTitle'>
                    <Bounce left duration={2000}>
                        <div><span id='animate-it'>IT</span> School</div>
                    </Bounce>
                    <Bounce right duration={2000}>
                        Mingbuloq
                    </Bounce>
                </h1>
            </div>
        )
    }
}

export default Header;