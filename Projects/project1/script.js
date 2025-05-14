
        // Initialize particles.js
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fddd25"
                },
                "shape": {
                    "type": "edge",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        function generateQRCode() {
            const link = document.getElementById('link').value;
            const qrcodeContainer = document.getElementById('qrcode');
            const downloadBtn = document.getElementById('download');
            qrcodeContainer.innerHTML = '';

            if (link.trim() === '') {
                alert('Please enter a valid link.');
                return;
            }

            // Generate QR code
            const qr = new QRCode(qrcodeContainer, {
                text: link,
                width: 200,
                height: 200,
                colorDark: "#000",
                colorLight: "#fff",
            });

            qrcodeContainer.style.display = 'inline-block';
            downloadBtn.style.display = 'block';
        }

        function downloadQRCode() {
            const qrCanvas = document.querySelector('#qrcode canvas');

            if (!qrCanvas) {
                alert('Please generate a QR code first.');
                return;
            }

            // Convert to image data URL
            const qrImage = qrCanvas.toDataURL("image/png");

            // Create download link
            const a = document.createElement('a');
            a.href = qrImage;
            a.download = 'qrcode.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }