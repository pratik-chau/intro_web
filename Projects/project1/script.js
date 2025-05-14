
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
